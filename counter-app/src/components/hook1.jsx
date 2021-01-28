import React, { Component, useState } from "react";

const Hook1 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your First name is: {name.firstName}</h2>
      <h2>Your last name is: {name.lastName}</h2>
    </div>
  );
};

export default Hook1;
