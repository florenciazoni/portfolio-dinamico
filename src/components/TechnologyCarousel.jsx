import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const TechnologyCarousel = ({ technologies, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !Array.isArray(technologies) || technologies.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay tecnologías para mostrar
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        speed={800}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          480: { slidesPerView: 3, spaceBetween: 20 },
          640: { slidesPerView: 4, spaceBetween: 25 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
          1280: { slidesPerView: 6, spaceBetween: 35 }
        }}
        className="py-6"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-2 group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-white/5 rounded-lg backdrop-blur-sm">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="object-contain p-1.5"
                  style={{
                    width: '90%',
                    height: '90%',
                    maxWidth: 'clamp(40px, 5vw, 60px)',
                    filter: 'grayscale(50%) drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTI0IDI0SDBWMGgyNHYyNHpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bS0yLTIyaDJ2NGgtMlY0em0wIDRoMnY0aC0yVjh6bTAgNGgydjRoLTJ2LTR6Ii8+PC9zdmc+';
                    e.target.onerror = null;
                  }}
                />
              </div>
              <span className="mt-2 text-xs text-gray-300 font-medium opacity-75 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

TechnologyCarousel.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

TechnologyCarousel.defaultProps = {
  className: ''
};

export default TechnologyCarousel;