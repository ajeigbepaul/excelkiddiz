import React from "react";

function Button({ onClick, name, className }) {
  return (
    <button className={className} type="submit" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
