import React from 'react'
import './Works.css'
import works from '../../assets/images/works.svg'
import worksmob from '../../assets/images/worksmob.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Works = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    })
  }, [])
  return (
    <div className='works'>
      <div className="container">
        <div className="works-info">
          <h1 data-aos="fade-up">Как это работает ?</h1>

     <picture data-aos="zoom-in">
        {/* для мобильных экранов */}
        <source srcSet={worksmob} media="(max-width: 576px)" />
        {/* по умолчанию десктоп */}
        <img src={works} alt="как это работает ?" />
      </picture>

          <p data-aos="fade-up" data-aos-delay="200">
            Мы объединяем датчики, сервер и веб-приложение в единую экосистему:
            данные поступают автоматически, отображаются в виде наглядных
            графиков и доступны с любого устройства. Это даёт возможность
            быстро реагировать, принимать точные решения и эффективно
            управлять водными ресурсами.
          </p>
        </div>

      </div>
    </div>
  )
}


export default Works