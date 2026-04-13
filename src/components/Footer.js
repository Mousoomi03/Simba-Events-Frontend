import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import SimbaLogo from '../images/simba-dark.png'; 

const footerContent = {
  terms: {
    title: 'Terms & Conditions',
    body: 'By using SIMBA Events, you agree to follow our terms and conditions. Tickets are subject to event-specific refund and cancellation policies, and users must provide accurate booking information. We reserve the right to suspend accounts or remove content if our terms are violated.',
  },
  privacy: {
    title: 'Privacy Policy',
    body: 'SIMBA Events collects personal data such as name, email, and booking preferences to provide a better experience. We protect your information using secure methods and do not sell it to third parties. Data may be shared with organizers only when necessary for processing bookings and providing support.',
  },
  contact: {
    title: 'Contact Us',
    body: 'Need help? Reach out to support@simbaevents.com or call +1 (800) 123-4567. For booking assistance, feedback, or technical issues, please include your name, event details, and request summary so we can respond quickly.',
  },
};

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((current) => (current === section ? null : section));
  };

  return (
<footer className={styles.footer}>
<div className={styles.footerContent}>
        {/* --- Top Section --- */}
<div className={styles.footerTop}>
          {/* Logo */}
<div className={styles.footerLogo}>
<img src={SimbaLogo} alt="SIMBA Events" />
<span>SIMBA Events</span>
</div>
          {/* Links */}
          <div className={styles.footerLinks}>
            <button type="button" onClick={() => toggleSection('terms')} className={`${styles.footerLinkButton} ${activeSection === 'terms' ? styles.footerLinkButtonActive : ''}`}>
              Terms & Conditions
            </button>
            <button type="button" onClick={() => toggleSection('privacy')} className={`${styles.footerLinkButton} ${activeSection === 'privacy' ? styles.footerLinkButtonActive : ''}`}>
              Privacy Policy
            </button>
            <button type="button" onClick={() => toggleSection('contact')} className={`${styles.footerLinkButton} ${activeSection === 'contact' ? styles.footerLinkButtonActive : ''}`}>
              Contact Us
            </button>
          </div>
        
        </div>

        {activeSection && (
          <div className={styles.footerInfoPanel}>
            <h4>{footerContent[activeSection].title}</h4>
            <p>{footerContent[activeSection].body}</p>
          </div>
        )}
        
        {/* --- Bottom Section --- */}
<div className={styles.footerBottom}>
<p className={styles.legalText}>
            © 2025 SIMBA Events. All rights reserved.
</p>
          {/* Updated Social Icons */}
          <div className={styles.socialIcons}>
            <Link to="/" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></Link>
            <Link to="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
            <Link to="/" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
            <Link to="/" aria-label="X (Twitter)"><i className="fab fa-x-twitter"></i></Link>
            <Link to="/" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;