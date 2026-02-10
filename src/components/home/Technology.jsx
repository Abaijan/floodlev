import './technology.css'
import Gallery from "./Gallery";
import { useRef, useState, useEffect } from 'react';

const Technology = () => {
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

  return (
    <div className={`technology ${isVisible ? 'animate' : ''}`} ref={ref}>
            <h1>Технология наших датчиков :</h1>
            <div className="gallery">
                <Gallery />
        </div>
    </div>
  )
}

export default Technology
