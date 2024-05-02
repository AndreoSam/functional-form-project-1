import React, { useState } from "react";
import "./MyForm2.css";

const MyForm2 = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
    errors: { fullname: "", email: "", password: "" },
  });

  let changeHandler = (event) => {
    // console.log("Event: ", event, event.target.value, event.target.name);
    let { name, value } = event.target;
    let err = data.errors;
    switch (name) {
      case "fullname":
        if (value.length < 1) {
          err.fullname = "Required field";
        } else if (value.length > 10) {
          err.fullname = "Maximum 10 characters required";
        } else {
          err.fullname = "";
        }

        // err.fullname = value.length < 1 ? "Required field" : "";
        break;

      case "email":
        if (value.length < 1) {
          err.email = "Required field";
        } else if (value.length < 5) {
          err.email = "Minimum 5 characters required";
        }
        break;

      case "password":
        err.password = value.length < 1 ? "Required field" : "";
        break;
      default:
        console.log("Not applicable");
    }
    setData({ ...data, [name]: value, errors: err });
    console.log("Validation error", data.errors);
    // console.log(data);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    console.log("Submited Value: ", data);
    if (data.confirm_password === data.password) {
      data.errors.password = "Password matched";
    } else {
      data.errors.password = "Password mismatched";
    }
    console.log(data.errors.password);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="form_element">
        {/* <label>Name: </label> */}

        <input
          type="text"
          name="fullname"
          placeholder="Enter name"
          onChange={changeHandler}
        />
        {data.errors.fullname.length > 0 ? (
          <p className="text-end text-danger"> *{data.errors.fullname}</p>
        ) : (
          ""
        )}
        <br />

        {/* <label>Email: </label> */}

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={changeHandler}
        />
        {data.errors.email.length > 0 ? (
          <p className="text-end text-danger"> *{data.errors.email}</p>
        ) : (
          ""
        )}
        <br />
        <br />

        {/* <label>Password: </label> */}

        <input
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={changeHandler}
        />
        <br />

        {/* <label>Confirm Password: </label> */}

        <input
          type="text"
          name="confirm_password"
          placeholder="Enter confirm password"
          onChange={changeHandler}
        />
        <br />
        <br />
        <select>
          <option value="indian">Indian</option>
          <option value="non-indian">Non-Indian</option>
        </select>
        <br />
        <br />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyForm2;
