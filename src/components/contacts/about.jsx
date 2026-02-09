import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.svg'
import './about.css'
import command from '../../assets/images/command.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutCommand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className='about-main'>
      <div className="container">
    
        <div className="about-info">
          <div className="about-text" data-aos="fade-right">
            <h2>Наша команда</h2>
            <p>
              Мы — IT команда AQUA NOMAD. Разрабатываем Smart-системы мониторинга воды на базе IoT. 
              Наша цель — безопасность ресурсов через точный анализ данных.
            </p>
            <p>
              Открыты к масштабированию и сотрудничеству. Напишите нам!
            </p>
          </div>
          <div className="command-image" data-aos="fade-left">
            <img src={command} alt="command" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCommand
