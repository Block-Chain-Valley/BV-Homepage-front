import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./carousel.css";

// import required modules
import { Pagination } from "swiper";

const images = [
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex" }}
            className="flex justify-center items-center mb-8"
          >
            <Image
              src="/bv_logo_red.png"
              alt="Picture of the author"
              width={128}
              height={128}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
