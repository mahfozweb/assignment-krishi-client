import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import photo1 from "../assets/E1.jpg";
import photo2 from "../assets/E2.jpg";
import photo3 from "../assets/E3.jpg";

const Tips = () => {
  const slides = [
    {
      id: 1,
      image: photo1,
      title: "Dr. Rakibul Islam",
      slogan: "Building a stronger agricultural community through connection.",
    },
    {
      id: 2,
      image: photo2,
      title: "Dr. Shafiqul Islam",
      slogan: "Plant Pathology",
    },
    {
      id: 3,
      image: photo3,
      title: "Engr. Mahmud Hasan",
      slogan: "Agro Technology & Innovation",
    },
  ];

  return (
    <>
      <h1 className="pt-10 text-5xl font-bold text-green-700">
        Expert Advice for Smarter Farming
      </h1>
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
    </>
  );
};

export default Tips;
