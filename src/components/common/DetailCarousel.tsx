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

export default function App({
  images,
  title,
  url,
}: {
  images: string[];
  title: string[];
  url: string[];
}) {
  const swiperStyle: SwiperProps["style"] = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    color: "black",
    "--swiper-pagination-color": "#991b1b",
    "--swiper-pagination-bullet-inactive-color": "grey",
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
            style={{ display: "flex flex-col" }}
            className="flex justify-center items-center mb-8 "
          >
            <div className="flex flex-col m-4 items-center">
              <a href={url[index]}>
                <Image
                  src={image}
                  alt="Picture of the author"
                  width={256}
                  height={256}
                />
              </a>

              <div className="max-md:hidden mt-4 text-center font-semibold">
                {title[index]}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
