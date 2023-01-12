import React, { useState } from "react";
import TextInput from "../../components/UI/TextInput";
import Button from "../../components/UI/Button";
import { API_URL } from "../../apiConfig";

const Login = () => {
  const [loginData, setLoginData] = useState({
    "email": "",
    "password": "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;
    try {
      const response = await API_URL.post("user/signin", { email, password });
      console.log("testing: ", response);
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="">
      <p className="text-2xl font-bold text-center pb-5">Login</p>
      <form action="" className="space-y-2 text-center mx-3">
        <TextInput
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextInput
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button className="btn btnPrimary" onClick={(e) => handleSubmit(e)}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
