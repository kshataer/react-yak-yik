import React from "react";

function AddZone(props) {
  return (
    <React.Fragment>
      <input
        id="name"
        onChange={props.updateZone}
        className="form-control mt-2 mb-2"
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        id="zipCodes"
        onChange={props.updateZone}
        className="form-control mb-2"
        type="text"
        name="zipCodes"
        placeholder="Zip Codes"
      />
      <button onClick={props.addZone} className="btn btn-info">
        Add zone
      </button>
    </React.Fragment>
  );
}

export default AddZone;
