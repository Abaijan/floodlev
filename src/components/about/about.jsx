import React from 'react'
import logo from '../../assets/images/logo.svg'
import './about.css'
import  command from '../../assets/images/command.svg'
const AboutCommand = () => {
  return (
    <div className='about-main'>
        <div className="container">
            <div className="logo-about">
                <img src={logo} alt="logo-about" />
            </div>
            <div className="about-info">
                <div className="about-text">
                <h2>Наша команда</h2>
                <p>Мы-IT команда AQUA NOMAD. Разрабатываем Smart-системы мониторинга воды на базе IoT. Наша цель-безопасность ресурсов через точный анализ данных.</p>
               <br />
               <br />
               <p>Открыты к масштабированию и сотрудничеству.Напишите нам!</p>
                </div>
                <div className="command-image">
                    <img src={command} alt="command" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCommand;