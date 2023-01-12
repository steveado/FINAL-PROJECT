import React from "react";

const Login = () => {
  return (
    <form className="bg-white p-6 rounded-lg md:flex md:flex-wrap">
      <label className="block font-medium mb-2 w-full md:w-1/2 md:pr-2">
        Email
        <input
          type="email"
          className="form-input rounded-lg mt-1 block w-full"
        />
      </label>
      <label className="block font-medium mb-2 w-full md:w-1/2 md:pl-2">
        Password
        <input
          type="password"
          className="form-input rounded-lg mt-1 block w-full"
        />
      </label>
      <button className="bg-indigo-500 text-white rounded-lg py-2 px-4 hover:bg-indigo-600 w-full md:w-auto md:text-center">
        Submit
      </button>
    </form>
  );
};

export default Login;
