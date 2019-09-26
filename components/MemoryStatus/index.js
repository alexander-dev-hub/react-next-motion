
import React from 'react';

import { useMemoryStatus } from '../../utils/hooks';

const MemoryStatus = () => {

  const memoryStatus = useMemoryStatus();

  if (!memoryStatus) return <p>Loading...</p>;

  const {
    totalJSHeapSize,
    usedJSHeapSize,
    jsHeapSizeLimit,
    deviceMemory,
    overLoaded,
    unsupportMessage
  } = memoryStatus;

  return (    
    
    <div>
      { unsupportMessage ? (
        <p>{unsupportMessage}</p>
      ) : (
        <div className='animation-setting'>
          <fieldset className='scheduler-border'>
            <legend className='scheduler-border'>MemoryHeapSize</legend>
            <div className='control-group'>
                <div className='controls bootstrap-timepicker'>
                  <span>Total - {totalJSHeapSize}Byte</span>
                  <span>Used - {usedJSHeapSize}Byte</span>
                  <span>Limit - {jsHeapSizeLimit}Byte</span>
                  <span>DeviceMemory - {deviceMemory}GByte</span>
                  <span>Is Memory overLoaded? {overLoaded ? 'Yes' : 'No'}</span>
                </div>
            </div>
          </fieldset>
        </div>
      ) }
    </div>
  );
};

export default MemoryStatus;