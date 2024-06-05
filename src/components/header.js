import React, {useState} from 'react';
import { Script } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"


const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  const modalStyle = {
    position: 'absolute',
    top: '65px',
    right: '0',
    overflow: 'hidden',
    transition: 'max-height 0.5s ease',
    maxHeight: isModalOpen ? '99em' : '0'
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
    if (document.body.classList.contains('mobile-open')) {
      document.body.classList.remove('mobile-open');
    } else {
      document.body.classList.add('mobile-open');
    }
  };
  return (
    <>
    <Script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" />
    <header className={'site-header site-header--lo'}  >
      <div className="site-header__content">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <img
              src='/images/getlogo.png'
              alt="Kwench"
              height="48"
            />
          </Link>
          <ul className={`navbar-nav ${isOpen? 'menu-open' : ''}`}>
            <li className="nav-item">
              <Link className="nav-link" to="/bookevents/">Explore Partnerships</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" target="_blank" to="https://view.flodesk.com/pages/6435cc5b71c069faf7824cc3">Our Newsletter</Link>
            </li>
              <li className="nav-item">
              <Link to="https://www.eventbrite.com/cc/events-3399219" className="nav-link">Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
          <div className="navbar-action">
            <div className="btn-group">
            <button className="btn" onClick={handleModal}>{isModalOpen ? 'Close Form' : 'Book a tour'}</button>
          </div>
          <button className="btn btn-icon btn-menu" onClick={toggleMobile}>
            {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
          </div>
        </nav>
      </div>
    </header>
    <div className="kw-modal" style={modalStyle}>
      <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/clubkwench/book-a-tour?embed=true"></div>
      <Script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" />
    </div>
  </>
  )
}

export default Header

