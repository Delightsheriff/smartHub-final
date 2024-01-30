import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/img/logo/logo.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-center">
            <div className="nav-header">
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              <button className="nav-toggle" onClick={toggleLinks}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAANlBMVEX///8AAADFxcX6+vpjY2O1tbX19fXQ0NDn5+c/Pz86OjqOjo54eHjb29vk5OQ1NTW8vLyYmJjQgCwGAAAAnUlEQVRoge3YCQ7CMAwFUZvQdN/uf1lOQCvDRybSvAuM0iRVZDMAAAAAAPB/Sv8Q6Eu0u40uMQ6xbt01XfephsKdquvehcKzLjy3seI6qbrBPbYh6VTn3WMAAK4UgQ+yx/IUWI5oV/boij25bFV13ddQ+NSFzzbCaZ867XDlXSdL+4EAAPBW80PULdZliPoFhqg3GKICAAAAAIAfeAHghA5hPJbvWgAAAABJRU5ErkJggg=="
                  alt=""
                />
              </button>
            </div>
            <div className={`tog ${showLinks ? 'show-links' : ''}`}>
              <ul className="links">
                <li>
                  <NavLink to="/" activeclassname="active">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeclassname="active">
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classes" activeclassname="active">
                    CLASSES
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/page" activeclassname="active">
                    PAGE
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" activeclassname="active">
                    BLOG
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeclassname="active">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
              <div className="nav-btns">
                <Link to="/contact" className="thm-btn">
                  Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
