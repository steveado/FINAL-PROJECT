import React, { useState } from "react";
import Button from "../../components/UI/Button";
import TextInput from "../../components/UI/TextInput";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    const { email, password } = signupData;
    console.log("state: ", signupData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/create",
        {
          email,
          password,
        }
      );
      console.log("response: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <p className="text-2xl font-bold text-center pb-5">Sign up</p>
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
