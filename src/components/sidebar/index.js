import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/baratheon.jpg'
//import LogoS from '../../assets/images/bee.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav]=useState(false);
    return(
    < div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoS} alt="Logo" />
        </Link>
        <nav className={showNav ? 'mobile-show':''}>
            <NavLink onClick={()=> setShowNav(false)}
             exact="true" 
            activeclassname="active" 
            to="/"
            >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink onClick={()=> setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink onClick={()=> setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
            <FontAwesomeIcon 
            onClick={()=> setShowNav(false)}
             icon= {faClose}
             color='#ffd700'
             size="3x"
             className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href='https://www.linkedin.com/in/uday-bhanu-91b272240'>

                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                 rel="noreferrer" 
                 href='https://www.instagram.com/killuday/'>

                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                 rel="noreferrer" 
                 href='https://www.youtube.com/channel/UC3pVwWicshTmC_DW9-C8KGg'>

                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                 rel="noreferrer" 
                 href='https://www.facebook.com/whereismyorange.d'>

                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
        onClick={()=> setShowNav(true)}
        icon={faBars} 
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
        />
    </div>
)
}

export default Sidebar