import React from "react";

const TextInput = ({ value, placeholder, onChange, className, name }) => {
  return (
    <div>
      <input
        type="text"
        name={name}
        className="inputField"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
