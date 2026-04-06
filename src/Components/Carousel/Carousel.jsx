import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";

// Isme hum 'data' prop le rahe hain
const AnmolCarousel = ({ data }) => {
  return (
    <div className="w-full px-4 py-10 relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false ,pauseOnMouseEnter: true}}
        pagination={{ clickable: true ,bulletClass: "swiper-pagination-bullet !bg-white/30", bulletActiveClass: "swiper-pagination-bullet-active !bg-red-600"}}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="review-swiper !pb-12"
      >
        {data.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <div className="bg-white/10 rounded-xl w-full max-w-[27rem] min-h-[22rem] p-8 border-2 border-red-600/20 hover:border-red-600 transition-all duration-300 relative group">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-red-600"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-red-600 text-sm mb-4 font-medium uppercase tracking-wider">
                    {member.position}
                  </p>
                  {/* Agar review hai to dikhao, nahi to hide kar do */}
                  {member.review && (
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      "{member.review}"
                    </p>
                  )}
                </div>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
        <div className="swiper-button-next !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
      </Swiper>
    </div>
  );
};

export default AnmolCarousel;
