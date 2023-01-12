import React, { useState } from "react";
import Button from "../../components/UI/Button";
import TextInput from "../../components/UI/TextInput";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("state: ", signupData);
  };

  return (
    <div className="">
      <form action="" className="space-y-2 text-center mx-3">
        <TextInput
          name="fullName"
          placeholder="Full name"
          value={signupData.fullName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextInput
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextInput
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextInput
          name="confirmPassword"
          placeholder="Confirm password"
          value={signupData.confirmPassword}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button className="btn btnPrimary" onClick={(e) => handleSubmit(e)}>
          Signup
        </Button>
      </form>
    </div>
  );
};

export default Signup;
