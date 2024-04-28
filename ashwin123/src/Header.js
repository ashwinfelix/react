import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    fontSize: '24px',
    textDecoration: 'none',
    color: '#fff',
  };

  const listItemStyle = {
    display: 'inline-block',
    marginRight: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const activeLinkStyle = {
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <a href="#" style={logoStyle}>Ash DEV</a>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={listItemStyle}><a href="play.html" style={linkStyle} className="active">Play</a></li>
        <li style={listItemStyle}><a href="#sec" style={linkStyle}>About</a></li>
        <li style={listItemStyle}><a href="#sec1" style={linkStyle}>Functionalities</a></li>
        <li style={listItemStyle}><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </header>
  );
}


export default Header;
