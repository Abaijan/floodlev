import React, { useRef, useEffect, useState } from 'react';
import './socials.css';

export default function Socials() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`socials ${isVisible ? 'animate' : ''}`} ref={ref}>
        <h2>Как с нами связаться</h2>
        
        <div className="social-cards">
          <a 
            href="https://t.me/AlimbekovAbaijan" 
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
            <p>@AlimbekovAbaijan</p>
            <span className="link-hint">Написать →</span>
          </a>

          <a 
            href="https://wa.me/996222416854" 
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
            <p>+996 222416854</p>
            <span className="link-hint">Написать →</span>
          </a>

          <a 
            href="https://instagram.com/aquanomad" 
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
  );
}
