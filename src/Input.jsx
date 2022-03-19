import React from "react";

function Input({ type, value, onChange, placeholder }) {
  return (
    <div className="login__control">
      {/* <label>Username</label> */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
