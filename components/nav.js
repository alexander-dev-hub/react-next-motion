import React from 'react'
import Link from 'next/link'

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

const Nav = () => (
  <nav>
    <ul>
      <li>
        {/* <Link href='/'>
          <a style={linkStyle}>Home</a>
        </Link> */}
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

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
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

export default Nav;