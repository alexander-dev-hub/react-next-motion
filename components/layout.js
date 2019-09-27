import Head from 'next/head';

import Nav from './nav';
import MemoryStatus from './MemoryStatus';

const layoutStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid #DDD'
};

const Layout = props => {
  const { manualAnimation, checkManualAnimation, toggleManualAnimation, ...rest } = props;
  return (
    <div style={layoutStyle}>
    <Head>
      <title>Home</title>
    </Head> 

    <Nav 
      manualAnimation={manualAnimation}
      checkManualAnimation={checkManualAnimation}
      toggleManualAnimation={toggleManualAnimation}/>
    <MemoryStatus />
    <div className="page-wrapper">
      <div className="content-wrapper">
        {props.children}
      </div>
      <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        background: #fff;
        color: #454545;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
          'Lucida Grande', sans-serif;
        text-rendering: optimizeLegibility;
      }
      a {
        color: #1b789e;
        text-decoration: none;
      }
      a:hover {
        color: #166281;
      }
      img {
        max-width: 100%;
      }
      .content-wrapper {
        max-width: 900px;
        text-align: center;
        margin: 0 auto;
        padding: 40px 0;
      }
      .container {
        overflow: hidden;
      }
    `}</style>
    </div>
  </div>
  );
};

export default Layout;