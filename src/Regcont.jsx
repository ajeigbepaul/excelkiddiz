import React from "react";

function Regcont({ datas, name, value, handleChange }) {
  return (
    <div className="register__cont">
      <select name={name} value={value} onChange={handleChange}>
        <option>Choose subclass</option>
        {datas.map((sbc) => (
          <option>{sbc}</option>
        ))}
      </select>
    </div>
  );
}

export default Regcont;
