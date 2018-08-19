import React, { Component } from "react";
import styles from "./styles";
class Zone extends Component {
  render() {
    const zips = this.props.currentZone.zipCodes.map((code, i) => {
      return (
        <div key={i}>
          <span>{code}</span>
          <br />
        </div>
      );
    });

    const styleZone = styles.zone;

    return (
      <div
        id={this.props.zoneId}
        onClick={this.props.onClickShowComments}
        style={styleZone.container}
      >
        <h4 style={styleZone.title}>{this.props.currentZone.name}</h4>
        <br />
        <span>{zips}</span>
      </div>
    );
  }
}

export default Zone;
