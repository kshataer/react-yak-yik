import React, { Component } from "react";
import styles from "./styles";
import dateFormat from "dateformat";

class Comment extends Component {
  render() {
    return (
      <div style={styles.comment.container}>
        <span>{this.props.currentComment.body}</span>
        <br />
        <span>{this.props.currentComment.username}</span>
        <span> | </span>
        <span>
          {dateFormat(
            this.props.currentComment.timestamp,
            "yyyy-mm-dd hh:mm:ss"
          )}
        </span>
      </div>
    );
  }
}
export default Comment;
