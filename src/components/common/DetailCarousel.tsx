import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./carousel.css";

// import required modules
import { Pagination } from "swiper";

interface SwiperProps {
  // Define other props here
  style?: React.CSSProperties & {
    "--swiper-pagination-color"?: string;
    "--swiper-pagination-bullet-inactive-color"?: string;
    "--swiper-pagination-bullet-inactive-opacity"?: string;
    "--swiper-pagination-bullet-size"?: string;
    "--swiper-pagination-bullet-horizontal-gap"?: string;
  };
}

export default function App({ images }: { images: string[] }) {
  const swiperStyle: SwiperProps["style"] = {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    color: "white",
    "--swiper-pagination-color": "red",
    "--swiper-pagination-bullet-inactive-color": "green",
    "--swiper-pagination-bullet-inactive-opacity": "0.5",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "5px",
  };

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
        style={swiperStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", backgroundColor: "black" }}
            className="flex justify-center items-center mb-8 bg-black"
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
