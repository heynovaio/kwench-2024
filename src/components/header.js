import React from 'react';

// const OptixWidget = () => {
// };

const Header = () => (
  <header className={'site-header site-header--lo'}  >
    <div className="site-header__content">
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <img
            src='/images/getlogo.png'
            alt="Kwench"
            height="48"
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://events.clubkwench.com/">Explore Partnerships</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://view.flodesk.com/pages/6435cc5b71c069faf7824cc3">Our Newsletter</a>
          </li>
          <li className="nav-item">
            <a gref="#contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
        <div className="navbar-action">
          <div className="btn-group">
            <a href="#" className="btn">Book a tour</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

export default Header

