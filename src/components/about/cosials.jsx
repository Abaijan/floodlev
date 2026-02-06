import React from 'react';
import './socials.css';

export default function Socials() {
  return (
    <div className="socials">
      <div className="container">
        <h2>Как с нами связаться</h2>
        
        <div className="social-cards">
          <a 
            href="https://t.me/aquanomad" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-card telegram"
          >
            <div className="icon-wrapper">
              <img 
                src="https://e7.pngegg.com/pngimages/773/420/png-clipart-paper-plane-icon-telegram-logo-computer-icons-telegram-miscellaneous-blue.png" 
                alt="Telegram" 
                className="social-icon"
              />
            </div>
            <h3>Telegram</h3>
            <p>@aquanomad</p>
            <span className="link-hint">Написать →</span>
          </a>

          <a 
            href="https://wa.me/996XXXXXXXXX"  // ← замени на реальный номер
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-card whatsapp"
          >
            <div className="icon-wrapper">
              <img 
                src="https://e7.pngegg.com/pngimages/851/296/png-clipart-whatsapp-logo-whatsapp-computer-icons-whatsapp-text-logo.png" 
                alt="WhatsApp" 
                className="social-icon"
              />
            </div>
            <h3>WhatsApp</h3>
            <p>+996 (XX) XXX-XX-XX</p>  {/* ← замени на реальный */}
            <span className="link-hint">Написать →</span>
          </a>

          <a 
            href="https://instagram.com/aquanomad"  // ← замени на реальный ник
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-card instagram"
          >
            <div className="icon-wrapper">
              <img 
                src="https://img.freepik.com/free-vector/gradient-instagram-social-media-background_23-2150956638.jpg" 
                alt="Instagram" 
                className="social-icon"
              />
            </div>
            <h3>Instagram</h3>
            <p>@aquanomad</p>
            <span className="link-hint">Перейти →</span>
          </a>
        </div>
      </div>
    </div>
  );
};
