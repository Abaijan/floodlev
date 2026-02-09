import './Why.css'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import banner from '../../assets/images/why.svg'
const Why = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        })
    }, [])
    return (
        <div className='why'>
            <div className="container">
                <div className="why-info">
                    <h1 data-aos="fade-up">Зачем это нужно ?</h1>

                    <div className="line">
                        <div className="texts" data-aos="fade-right">
                            <p>
                                Система мониторинга уровня воды нужна для того, чтобы заранее
                                обнаруживать опасные изменения и предотвращать аварийные ситуации.
                            </p>
                            <p>
                                Проще говоря, система превращает «ручной контроль» в умный и непрерывный
                                мониторинг, который работает 24/7 и может спасти имущество и жизни.
                            </p>
                        </div>

                        <div className="banner-image" data-aos="fade-left">
                            <img src={banner} alt="why" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Why