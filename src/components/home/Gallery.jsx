import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./galery.css";
import img1 from "../../assets/images/esp.jpg";
import img2 from "../../assets/images/datch.jpg";
import img3 from "../../assets/images/gsm.png";
import img4 from "../../assets/images/панель.webp";

const slides = [
  { img: img1, title: "ESP32", desc: "Микроконтроллер, который собирает данные с датчиков и передаёт их в систему" },
  { img: img2, title: "Датчик уровня воды", desc: "Измеряет уровень воды в реальном времени" },
  { img: img3, title: "GSM-модуль", desc: "Передаёт данные на сервер и отправляет уведомления" },
  { img: img4, title: "Солнечная панель", desc: "Обеспечивает автономное питание устройства" }
];

export default function Gallery() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      centeredSlides
      loop
      speed={1000}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      className="arc-swiper"
      breakpoints={{
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="slide-wrap">
            <img src={slide.img} alt={slide.title} />
            <div className="slide-caption">
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
