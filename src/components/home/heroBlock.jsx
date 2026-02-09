
import './hero.css'
import logo from '../../assets/images/logo.svg'
import heroVideo from '../../assets/video//4K ULTRA HD Rough mountain river Ambient Nature Atmosphere - 4К ULTRA HD Бурная горная река.mp4'
const HeroBlock = () => {
    return (
        <div className="hero ">
            <video className="hero-video" src={heroVideo} autoPlay loop muted />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>
                    FLOODLEV — мониторинг, который защищает жизнь. <br />Одна капля данных может изменить будущее.</h1>
            </div>
        </div>
    );
}

export default HeroBlock