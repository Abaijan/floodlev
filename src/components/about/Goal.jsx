import React, { useEffect } from 'react'
import './goal.css'
import goal from '../../assets/images/goal.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Goal = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        })
    }, [])

    return (
        <div className='goal'>
            <div className="container">
                <div className="goal-info">
                    <h1 data-aos="fade-up">Наша цель</h1>
                    <div className="line">
                        <div className="texts" data-aos="fade-right">
                            <p>
                                Наша цель — сделать контроль воды простым, доступным и
                                надёжным, сохраняя один из самых ценных ресурсов планеты.
                            </p>
                        </div>
                        <div className="banner-image" data-aos="fade-left">
                            <img src={goal} alt="goal" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal
