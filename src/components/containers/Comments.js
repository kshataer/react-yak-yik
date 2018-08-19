import React, { Component } from "react";
import Comment from "../presentation/Comment";
import superagent from "superagent";
import styles from "./styles";
import AddComment from "../presentation/AddComment";
const url_api = "http://127.0.0.1:3000/api/";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comment: {
        zoneId: "",
        body: "",
        username: ""
      }
    };
  }

  handleUpdatedComment(event) {
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment[event.target.id] = event.target.value;
    this.setState({ comment: updatedComment });
  }

  handleAddComment() {
    let updatedComment = Object.assign({}, this.state.comment);
    let zoneIdValue = document.getElementById("zoneId").value;
    updatedComment["zoneId"] = zoneIdValue;

    superagent
      .post(url_api + "comment")
      .send(JSON.stringify(updatedComment))
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .then(res => {
        console.log("SUCCESS POST COMMENT" + JSON.stringify(res.body));
        document.getElementById(zoneIdValue).click();
        document.getElementById("username").value = "";
        document.getElementById("body").value = "";
      });
  }

  render() {
    let commentItems = [];
    commentItems = this.props.listComments.comments.map((comment, i) => {
      return <Comment key={i} currentComment={comment} />;
    });

    const commentSName = this.props.listComments.zone.name
      ? "Comments of " + this.props.listComments.zone.name
      : "";

    const addComment = this.props.listComments.zone.name ? (
      <div className="mt-2">
        <AddComment
          zoneId={
            this.props.listComments.zone._id
              ? this.props.listComments.zone._id
              : this.props.listComments.zone.zoneId
          }
          updatedComment={this.handleUpdatedComment.bind(this)}
          addComment={this.handleAddComment.bind(this)}
        />
      </div>
    ) : (
      ""
    );
    return (
      <div>
        <h2 style={styles.comments.title}>{commentSName}</h2>
        {commentItems}
        {addComment}
      </div>
    );
  }
}

export default Comments;
