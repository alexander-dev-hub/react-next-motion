import React, { Fragment } from "react";

const CheckboxWithLabel = ({ label, toggle }) => {

  const toggleHandler = event => {
    toggle(event.target.checked);
  };

  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" onChange={toggleHandler}/>
        {label}
      </label>
      <style jsx global>{`      
        div.checkbox {
          margin-left: 20px;
        }
      `}</style>
    </div>
  )
};

export default CheckboxWithLabel;