import React, { Fragment } from "react";
import { Checkbox } from "antd";

const CheckboxWithLabel = ({ label, toggle }) => {

  const toggleHandler = event => {
    toggle(event.target.checked);
  };

  return (
    <Fragment>
      <span className='label'>{label}</span>
      <Checkbox onChange={toggleHandler} />
    </Fragment>
    // <div className="checkbox">
    //   <span className='label'>{label}</span>
    //   <input type="checkbox" onChange={toggleHandler} />
    // </div>
  )
};

export default CheckboxWithLabel;