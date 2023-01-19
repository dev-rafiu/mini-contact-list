import React from "react";

function Input({ type, value, placeholder, className }) {
  return <input type={type} value={value} placeholder={placeholder} />;
}

export default Input;
