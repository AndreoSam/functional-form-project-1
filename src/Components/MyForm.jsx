import React, { useState } from "react";

const MyForm = () => {
  let [data, setData] = useState({
    fullname: "",
    email: "",
    contact: "",
    password: "",
  });
 
  let changeHandler = (event) => {
    // console.log("Event", event, event.target.value, event.target.name);
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  let submitHandler = (event) => {
    event.preventDefault();
    console.log("Submited Value: ", data);
  };

  return (
    <div className="container">
      <form className="p-5" onSubmit={submitHandler}>
        <input
          type="text"
          name="fullname"
          placeholder="Enter name"
          onChange={changeHandler}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter mail"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="contactnumber"
          placeholder="Enter contact number"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={changeHandler}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyForm;
