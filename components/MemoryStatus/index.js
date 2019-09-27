
import React, { Fragment } from 'react';

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
        <div>
          <div className="posts">
            <div key={1} className="post">
              <div className='statistic-content'>{totalJSHeapSize} Byte</div>
              <div className='statistic-title'>Total JSHeapSize</div>
            </div>
            <div key={2} className="post">
              <div className='statistic-content'>{usedJSHeapSize} Byte</div>
              <div className='statistic-title'>Used JSHeapSize</div>
            </div>
            <div key={3} className="post">
              <div className='statistic-content'>{jsHeapSizeLimit} Byte</div>
              <div className='statistic-title'>JSHeapSizeLimit</div>
            </div>
            <div key={4} className="post">
              <div className='statistic-content'>{deviceMemory} GByte</div>
              <div className='statistic-title'>DeviceMemory</div>
            </div>
            <div key={5} className="post">
              <div className='statistic-content'>{overLoaded ? 'Yes' : 'No'}</div>
              <div className='statistic-title'>Memory overLoaded?</div>
          </div>
          <style jsx>{`
            .posts {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .post {
              width: 20%;
              min-width: 120px;
              padding: 10px;
            }
            @media (max-width: 700px) {
              .post {
                width: auto;
              }
            }
            .statistic-title {
              margin-bottom: 4px;
              color: rgba(0,0,0,0.45);
              font-size: 14px;
            }
            .statistic-content {
              color: rgba(0,0,0,0.85);
              font-size: 16px;
              font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
            }
          `}</style>
        </div>
      </div>
      ) }
    </div>
  );
};

export default MemoryStatus;