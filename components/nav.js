import React from 'react';
import Link from 'next/link';

import CheckboxWithLabel from './CheckboxWithLabel';
import SwitchWithLabel from './SwitchWithLabel';
import MemoryStatus from './MemoryStatus';

const linkStyle = {
  marginRight: 8,
  marginLeft: 8
};

const links = [
  { href: 'https://github.com/alexander-dev-hub/react-next-motion', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({
  manualAnimation,
  toggleManualAnimation,
  checkManualAnimation
  }) => {
    return (
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a style={linkStyle}>Next.js &amp; Framer Motion</a>
            </Link>
            <Link href='/simple'>
              <a style={linkStyle}>Turned off Animation</a>
            </Link>
          </li>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <MemoryStatus />

          <div className='animation-setting'>
            <fieldset className='scheduler-border'>
              <legend className='scheduler-border'>Manual Animation Test</legend>
              <div className='control-group'>
                  <div className='controls bootstrap-timepicker'>
                      <SwitchWithLabel label='Animation is turn on? ' disabled={!manualAnimation} defaultChecked onChange={toggleManualAnimation} />
                      <CheckboxWithLabel label='Enable/Disable' toggle={checkManualAnimation} />
                  </div>
              </div>
            </fieldset>
          </div>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
            padding: 20px;
            background: #fafafa;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </nav>
    );
};

export default Nav;