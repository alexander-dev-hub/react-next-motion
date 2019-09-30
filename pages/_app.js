
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useMemoryStatus } from '../utils/hooks';
import AnimationEmulationContext from '../components/AnimationEmulationContext';

const MyApp = ({ Component, pageProps, router }) => {

  const [manualEnabled, setManualEnabled] = useState(false);
  const [isAnimationOn, setIsAnimationOn] = useState(true);
  let isAnimation = true;
  let overLoaded = useMemoryStatus();
  if (!overLoaded)
    overLoaded = false;

  useEffect(() => {
    const manualEnabledValue = localStorage.getItem('manual-enabled');
    const isAnimationOnValue = localStorage.getItem('is-animation-on');

    if (manualEnabledValue) {
      setManualEnabled(manualEnabledValue);
    }

    if (isAnimationOnValue) {
      setIsAnimationOn(isAnimationOnValue);
    }
  }, []);

  const enableManualAnimationHandler = flag => {
    localStorage.setItem('manual-enabled', flag);
    setManualEnabled(flag);
  };

  const toggleAnimationHandler = event => {
    const { checked } = event.target.checked;
    localStorage.setItem('is-animation-on', checked);
    setIsAnimationOn(checked);
  };

  if (manualEnabled) {
    isAnimation = isAnimationOn;
  } else {
    isAnimation = !overLoaded;
  }

  if (isAnimation) {
    return (
      <AnimationEmulationContext.Provider
        value={{
          manualEnabled: manualEnabled,
          isAnimationOn: isAnimationOn,
          enableManualAnimationHandler: enableManualAnimationHandler,
          toggleAnimationHandler: toggleAnimationHandler
        }}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimationEmulationContext.Provider>
    );
  } else {
    return (
      <AnimationEmulationContext.Provider
        value={{
          manualEnabled,
          isAnimationOn,
          enableManualAnimationHandler: enableManualAnimationHandler,
          toggleAnimationHandler: toggleAnimationHandler
        }}>
        <Component {...pageProps} key={router.route} />
      </AnimationEmulationContext.Provider>
    );
  }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {};
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {pageProps};
}

export default MyApp;
