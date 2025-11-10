import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import photo1 from "../assets/1.avif";
import photo2 from "../assets/2.avif";
import photo3 from "../assets/3.avif";
import photo4 from "../assets/4.avif";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: photo4,
      title: "Grow Together",
      slogan: "Building a stronger agricultural community through connection.",
    },
    {
      id: 2,
      image: photo3,
      title: "Your Crop, Your Network",
      slogan: "Share, collaborate, and find new market opportunities.",
    },
    {
      id: 3,
      image: photo2,
      title: "Farmer First",
      slogan: "Empowering every farmer with access, visibility, and support",
    },
    {
      id: 4,
      image: photo1,
      title: "Digital Bridge for Agriculture",
      slogan: "Where farmers, traders, and consumers meet and grow together.",
    },
  ];

  return (
    <div className="py-10">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex justify-center items-center">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] object-cover rounded-xl"
              />

              {/* Overlay with slogan */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-6 rounded-b-xl">
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <p className="text-sm mt-2 opacity-90">{slide.slogan}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
