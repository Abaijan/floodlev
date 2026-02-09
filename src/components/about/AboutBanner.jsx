import React, { useEffect, useRef } from 'react'
import './aboutBanner.css'
import bannerImage from '../../assets/images/about-banner.svg'

const AboutBanner = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      },
      {
        threshold: 0.3,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-banner" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="banner-info">
            <h1>О нас</h1>
            <p>
              Мы — IT команда AQUA NOMAD. Разрабатываем Smart-системы мониторинга воды
              на базе IoT. Наша цель — безопасность ресурсов через точный анализ данных.
              Открыты к масштабированию и сотрудничеству. Напишите нам!
            </p>
          </div>

          <div className="why-image">
            <img src={bannerImage} alt="about-banner" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner
