import React, { useState } from 'react';
import { Menu, X, User, GraduationCap, Briefcase, Wrench, FolderOpen, Phone, MessageSquare } from 'lucide-react';

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <button onClick={toggleNavbar} className="toggle-button">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="profile-section">
          <div className="profile-image">
            <img src="../image/cat.jpg" alt="Profile" />
          </div>
          <h2 className="profile-name">Birmanov Nurbol</h2>
        </div>
        <ul className="nav-list">
          {[
            { icon: <User size={20} />, text: 'About' },
            { icon: <GraduationCap size={20} />, text: 'Education' },
            { icon: <Briefcase size={20} />, text: 'Experience' },
            { icon: <Wrench size={20} />, text: 'Skills' },
            { icon: <FolderOpen size={20} />, text: 'Portfolio' },
            { icon: <Phone size={20} />, text: 'Contacts' },
            { icon: <MessageSquare size={20} />, text: 'Feedbacks' },
          ].map((item, index) => (
            <li key={index} className="nav-item">
               <button onClick={() => scrollToSection(item.text)} className={`nav-link ${item.active ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span>{item.text}</span>
                </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className={`content ${isOpen ? 'shifted' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Navbar;