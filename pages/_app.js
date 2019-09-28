import React, { useState } from 'react';
import App from 'next/app';
import StateContext from '../components/StateContext';

class MyApp extends App {
  state = {
    manualEnabled: false,
    isAnimationOn: true
  };

  componentDidMount = () => {
    const manualEnabled = localStorage.getItem('manual-enabled');
    const isAnimationOn = localStorage.getItem('animation-on');
    
    if (!manualEnabled) {
      this.setState({
        manualEnabled: false,
        isAnimationOn: true
      });
    } else {
      this.setState({
        manualEnabled,
        isAnimationOn
      });
      localStorage.setItem('manual-enabled', this.state.manualEnabled);
      localStorage.setItem('animation-on', this.state.isAnimationOn);
    }
  };

  enableManualAnimationHandler = (flag) => {
    localStorage.setItem('manual-enabled', flag);
    localStorage.setItem('animation-on', this.state.isAnimationOn);
    this.setState(
      {
        manualEnabled: flag
      }
    );
  };

  toggleAnimationHandler = (event) => {
    localStorage.setItem('animation-on', event.target.checked);
    localStorage.setItem('manual-enabled', this.state.manualEnabled);
    this.setState(
      {
        isAnimationOn: event.target.checked
      }
    );
  };

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <StateContext.Provider value={{
        manualEnabled: this.state.manualEnabled,
        isAnimationOn: this.state.isAnimationOn,
        enableManualAnimationHandler: this.enableManualAnimationHandler,
        toggleAnimationHandler: this.toggleAnimationHandler}}>
          <Component {...pageProps} key={router.route} />
      </StateContext.Provider>
    );
  }
}

export default MyApp;
