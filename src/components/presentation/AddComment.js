import React from "react";

function AddComment(props) {
  return (
    <React.Fragment>
      <input id="zoneId" type="hidden" value={props.zoneId} />
      <input
        onChange={props.updatedComment}
        id="username"
        className="form-control mb-2"
        type="text"
        name="username"
        placeholder="User name"
      />
      <input
        onChange={props.updatedComment}
        id="body"
        className="form-control mt-2 mb-2"
        type="text"
        name="body"
        placeholder="Body"
      />
      <button onClick={props.addComment} className="btn btn-info">
        Add comment
      </button>
    </React.Fragment>
  );
}

export default AddComment;
