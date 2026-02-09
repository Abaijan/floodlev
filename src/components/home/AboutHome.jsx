import React, { useEffect, useRef, useState } from 'react'
import './aboutHome.css'

const AboutHome = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // анимация только один раз
          }
        })
      },
      { threshold: 0.3 } // срабатывает, когда 30% элемента видно
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`about-home ${isVisible ? 'animate' : ''}`} ref={ref}>
        <h1>О проекте</h1>
        <p>
          Мы — команда энтузиастов, которым не всё равно. FloodLev родился из простой идеи: технологии должны помогать людям чувствовать себя в безопасности. Мы видим, как наводнения и резкие подъёмы уровня воды каждый год наносят ущерб домам, инфраструктуре и жизням, и верим, что этого можно избежать с помощью своевременной информации.
          <br /><br />
          Наша миссия — предупреждать, а не реагировать постфактум. FloodLev отслеживает уровень воды в реальном времени и заранее сообщает об опасности, чтобы у людей и служб было время принять правильные решения.
          <br /><br />
          Мы создаём систему, которой можно доверять: понятную, надёжную и доступную. Для нас FloodLev — это не просто технология, а вклад в безопасность сообществ и защиту будущего.
        </p>
    </div>
  )
}

export default AboutHome
