import './Partners.css'
import Marquee from "react-fast-marquee";
import enactus from '../../assets/images/Rectangle 60.png'
import kstu from '../../assets/images/Rectangle 51.png'
import hpt from '../../assets/images/Rectangle 63.png'
import mchs from '../../assets/images/mchs.jpeg'
import { useRef, useEffect, useState } from 'react';

const Partners = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const logos = [enactus, kstu, hpt, mchs]

  return (
    <div className={`partners ${isVisible ? 'animate' : ''}`} ref={ref}>
      <h1>Наши партнеры</h1>
      <Marquee className='marq' pauseOnHover={false} gradient={false} speed={80}>
        {logos.map((logo, i) => (
          <div className="marq-item" key={i}>
            <img src={logo} alt={`Partner ${i}`} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Partners
