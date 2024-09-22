import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import { IconButtons } from "../IconButtons";
import { ArrowLeft } from "@/app/icons/ArrowLeft";
import { ArrowRight1 } from "@/app/icons/ArrowRight1";

const ImageSlider = ({ children, setCount, count }) => {
  const swiperRef = useRef(null);

  const goToSlideOne = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0); // Navigate to the first slide
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = ".prev-arrow";
      swiperRef.current.swiper.params.navigation.nextEl = ".next-arrow";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  useEffect(() => {
    if (count >= 100) {
      swiperRef.current.swiper.slideNext();
    }
  }, [children]);

  return (
    <div className="w-[460px] text-black relative">
      <Swiper
        ref={swiperRef} // Attach Swiper instance to the ref
        modules={[Pagination, Navigation]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          type: "fraction",
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {children &&
          React.Children.map(children, (child) => (
            <SwiperSlide key={child.key}>{child}</SwiperSlide>
          ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex justify-center gap-2.5 relative flex-[0_0_auto] w-full pt-10">
        <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
          <div
            onClick={() => {
              swiperRef.current.swiper.slidePrev();
              setCount(0);
            }}
          >
            <IconButtons
              className="prev-arrow !border-primary-400 !h-8 !border-2 !border-solid !p-1.5 !flex !bg-[unset] !w-8 cursor-pointer"
              icon={
                <ArrowLeft
                  className="!relative !flex-1 !self-stretch !grow"
                  color="#32BAAE"
                />
              }
              state="default"
              type="primary"
            />
          </div>
          <div className="custom-pagination"></div>
          <div
            onClick={() => {
              swiperRef.current.swiper.slideNext();
              setCount(0);
            }}
          >
            <IconButtons
              className="next-arrow !border-primary-400 !h-8 !border-2 !border-solid !p-1.5 !flex !bg-[unset] !w-8 cursor-pointer"
              icon={
                <ArrowRight1
                  className="!relative !flex-1 !self-stretch !grow"
                  color="#32BAAE"
                />
              }
              state="default"
              type="primary"
            />
          </div>
        </div>
      </div>

      {/* <button
        onClick={goToSlideOne}
        className="bg-blue-500 text-white py-2 px-4"
      >
        Go to Slide 1
      </button> */}
    </div>
  );
};

export default ImageSlider;
