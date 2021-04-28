import React, { useState } from "react";

function Hookobj() {
  const [name, setname] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => {
            setname({ ...name, firstName: e.target.value });
          }}
        ></input>
        <br></br>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => {
            setname({ ...name, lastName: e.target.value });
          }}
        ></input>
      </form>
      {name.firstName}
      <space></space>
      {name.lastName}
    </div>
  );
}

export default Hookobj;
