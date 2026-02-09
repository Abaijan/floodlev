import React, { useEffect, useRef, useState } from 'react'
import systm from '../../assets/images/Rectangle.png'
import datch from '../../assets/images/Rectangle 40.png'
import analytyc from '../../assets/images/Rectangle 42.png'
import phone from '../../assets/images/Rectangle 53.png'
import server from '../../assets/images/система.png'
import monitoring from '../../assets/images/monitoring.png'
import './howworks.css'

const HowWorks = () => {
  const cardsRef = useRef([])
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setVisibleCards((prev) => [...prev, index])
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const cards = [
    { img: datch, text: 'Датчик измеряет уровень воды' },
    { img: systm, text: 'Данные передаются в систему' },
    { img: analytyc, text: 'Происходит анализ' },
    { img: server, text: 'Данные передаются на сайт', width: 100 },
    { img: monitoring, text: 'Администратор мониторит и принимает решения', width: 100 },
    { img: phone, text: 'Пользователь получает уведомление' },
  ]

  return (
    <div className="how-works">
      <h1>Как это работает ?</h1>
      <div className="how-cards">
        {cards.map((card, index) => (
          <div
            className={`how-card ${visibleCards.includes(index) ? 'animate' : ''}`}
            key={index}
            data-index={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={card.img} alt="" width={card.width || 80} />
            <p className="desc">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowWorks
