import React from 'react'
import { useState } from 'react';

import Nav from '../components/nav';
import Layout from '../components/layout';

import AdaptivePostList from '../pages/AdaptivePostList';

const Home = () => {
  
  const [manualAnimation, checkManualAnimation] = useState(false);

  const checkManualAnimationTestHandler = flag => {
    checkManualAnimation(flag);
  };

  const [animation, setAnimation] = useState(true);

  const toggleManualAnimationTestHandler = checked => {
    setAnimation(checked);
  };

  return (
    <div>
      <Nav 
      manualAnimation={manualAnimation}
      checkManualAnimation={checkManualAnimationTestHandler}
      toggleManualAnimation={toggleManualAnimationTestHandler} />
    <Layout>

      <div className='container'>
        <h1 className='title'>Next.js &amp; Framer Motion</h1>
        <AdaptivePostList 
            manualAnimation={manualAnimation}
            animation={animation} />
      </div>
    </Layout>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
  );
  
};

export default Home;