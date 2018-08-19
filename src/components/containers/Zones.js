import React, { Component } from "react";
import superagent from "superagent";
import Zone from "../presentation/Zone";
import Comments from "./Comments";
import AddZone from "../presentation/AddZone";
const url_api = "http://127.0.0.1:3000/api/";

class Zones extends Component {
  constructor() {
    super();
    this.state = {
      listZones: [],
      zone: {
        name: "",
        zipCodes: [],
        zoneId: ""
      },
      listComments: {
        comments: [],
        zone: {}
      }
    };
  }

  componentWillMount() {
    superagent
      .get(url_api + "zone")
      .query(null)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) {
          alert("ERROR ZONE GET" + err);
        }
        this.setState({ listZones: res.body.results });
      });
  }

  handleShowComments(zone) {
    superagent
      .get(url_api + "zonecomments/" + (zone._id ? zone._id : zone.zoneId))
      .query(null)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) {
          alert("ERROR ZONE COMMENT GET" + err);
        }
        this.setState({
          listComments: { comments: res.body.results, zone: zone }
        });
      });
  }

  handleUpdateZone(event) {
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone[event.target.id] = event.target.value;
    this.setState({ zone: updatedZone });
  }

  handleAddZone() {
    superagent
      .post(url_api + "zone")
      .send(JSON.stringify(this.state.zone))
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .then(res => {
        console.log("SUCCESS POST ZONE " + JSON.stringify(res.body));

        this.state.zone.zoneId = res.body.result._id;
        var zips = this.state.zone.zipCodes;
        var zip = zips.split(",");
        var newZips = [];
        zip.forEach(function(zipCode) {
          newZips.push(zipCode.trim());
        });

        this.state.zone.zipCodes = newZips;
        let updatedZones = Object.assign([], this.state.listZones);
        updatedZones.push(this.state.zone);

        this.setState({ listZones: updatedZones });
        document.getElementById("name").value = "";
        document.getElementById("zipCodes").value = "";
      });
  }

  render() {
    const zoneItems = this.state.listZones.map((zone, i) => {
      return (
        <Zone
          zoneId={zone._id ? zone._id : zone.zoneId}
          onClickShowComments={() => this.handleShowComments(zone)}
          key={i}
          currentZone={zone}
        />
      );
    });

    const { listComments } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
            <h2>Zones</h2>
            {zoneItems}
            <AddZone
              updateZone={this.handleUpdateZone.bind(this)}
              addZone={this.handleAddZone.bind(this)}
            />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
            <Comments listComments={listComments} />
          </div>
        </div>
      </div>
    );
  }
}

export default Zones;
