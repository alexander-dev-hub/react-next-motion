import React, { Fragment } from 'react';
import { Switch } from 'antd';

const SwitchWithLabel = ({ label, ...rest }) => {

  return (
      <Fragment>
        <span className='label'>{label}</span>
        <Switch className='switch' {...rest} />
      </Fragment>
  );
};

export default SwitchWithLabel