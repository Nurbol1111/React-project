import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="address-info">
      <h2 className="address-title">Address</h2>
      
      <div className="contact-item">
        <Phone className="icon" />
        <span>+7-(708)-6996752</span>
      </div>
      
      <div className="contact-item">
        <Mail className="icon" />
        <span>nurbol.birmanov@gmail.com</span>
      </div>
      
      <div className="contact-item">
        <MessageCircle className="icon" />
        <a href="https://twitter.com/wordpress" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      
      <div className="contact-item">
        <MessageCircle className="icon" />
        <a href="https://www.facebook.com/kirill.sdfsdgdsg/?locale=ru_RU" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </div>
  );
};

export default ContactInfo;