import './footer.css'
import logo from '../../assets/images/logo.svg'
const footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="FloodLev Logo" />
                    </div>
                    <div className="footer-links">
                        <a href="/">Главная</a>
                        <a href="/about">О проекте</a>
                        <a href="/contact">Контакты</a>
                    </div>
                    <div className="footer-socials">
                        <div className="info-collumn">
                            <h5>Связаться с нами:</h5>
                            <p>Email:</p>
                        </div>
                        <div className="contacts-column">
                            <a href='tel:+996222416854'>+996222416854</a>
                            <a href="mailto:fghf09647@gmail.com">fghf09647@gmail.com</a>
                        </div>
                        <div className="socials">
                            <div className="tg">

                            <p>Telegram:</p>
                            <a href="https://t.me/AlimbekovAbaijan" target="_blank" rel="noopener noreferrer">AquaNomad</a>
                            </div>
                            <p>Адрес: Бишкек ул Чынгыза Айтматова 66</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="under-footer">
                <p>© Created by Aqua Nomad in 2026</p>
            </div>
        </footer>
    )
}

export default footer;