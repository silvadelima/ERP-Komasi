import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Definindo o tipo para as imagens
interface CarouselImage {
  src: string;
  alt: string;
}

// Usando placeholders temporários até que as imagens locais sejam adicionadas
const images: CarouselImage[] = [
  { src: 'https://via.placeholder.com/1200x600/1a365d/ffffff?text=Lote+1', alt: 'Lote 1' },
  { src: 'https://via.placeholder.com/1200x600/2d3748/ffffff?text=Lote+2', alt: 'Lote 2' },
  { src: 'https://via.placeholder.com/1200x600/4a5568/ffffff?text=Lote+3', alt: 'Lote 3' },
  { src: 'https://via.placeholder.com/1200x600/718096/ffffff?text=Lote+4', alt: 'Lote 4' },
];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">{image.alt}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
