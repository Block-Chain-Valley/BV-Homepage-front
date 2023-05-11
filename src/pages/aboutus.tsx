import AboutTeams from "@/components/Aboutus/AboutTeams";
import DetailCarousel from "@/components/common/DetailCarousel";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { SEO } from "@/seo/SEO";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const images = [
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
];

function AboutUs() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0),
    2: useScrollFadeIn("up", 1, 0),
    3: useScrollFadeIn("up", 1, 0),
    4: useScrollFadeIn("up", 1, 0),
    5: useScrollFadeIn("up", 1, 0),
    6: useScrollFadeIn("up", 1, 0),
  };

  return (
    <main className="flex flex-col items-center justify-center bg-black text-white ">
      <SEO
        title="회사 소개 페이지"
        description="당사에 대한 소개를 확인할 수 있는 페이지입니다."
      />

      {/* <div className="absolute top-5 left-5 w-full bg-none flex items-center justify-between p-5">
        <Link href="/">
          <img
            src="/bv_logo_white.png"
            alt="Picture of the author"
            width={230}
            height={150}
          />
        </Link>
        <Navbar />
      </div> */}

      <div>
        <div className=" m-10 text-left pt-80 text-5xl font-extrabold ">
          블록체인 밸리는 <br />
          <span className="text-900">고려대학교 유일의 블록체인 학회</span>
          입니다
        </div>

        <div className="flex-col text-left m-10" {...animatedItem[0]}>
          <div className="text-base ">
            블록체인 밸리는 WEB 3.0의 진정한 가치를 학습하는 공간이자,
            블록체인을 통해 자신의 미래를 위한 준비를 하는 공간이 되기를
            지향합니다. 구성원(node) 간의 수평적 문화를 지향하며, 고려대학교
            구성원 외에도 나이, 소속, 출신에 제한 없이 누구나 함께 할 수
            있습니다. 블록체인과 크립토 그리고 WEB 3.0에 대한 관심과 열정이
            있다면 블록체인 밸리의 노드가 될 수 있습니다.
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row h-500">
          <div className="bg-red-200 flex-grow border-r border-gray-400 h-full">
            사진
          </div>
          <div className="bg-red-400 flex-grow border-l border-gray-400 h-full">
            설명
          </div>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center h-300 w-full">
        <div className="flex flex-row w-full h-full">
          <div className="text-center text-black bg-red-200 h-full flex-grow  pl-10 pr-10 w-1/3">
            공통 세션
          </div>
          <div className="text-center text-black bg-blue-200 h-full flex-grow  pl-10 pr-10 w-1/3">
            리서치 세션
          </div>
          <div className="text-center text-black bg-green-200 h-full flex-grow  pl-10 pr-10 w-1/3">
            개발 세션
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col m-20" {...animatedItem[1]}>
        <h1 className="text-7xl font-extrabold text-900 ">About Teams</h1>
        <AboutTeams />
      </div>

      <div className="flex flex-col m-20">
        <h1 className="text-7xl font-extrabold text-900 ">Archive</h1>
      </div>

      <div className="flex flex-col m-20">
        <h1 className="text-7xl font-extrabold text-900 ">Lounge</h1>
      </div> */}
      {/* <DetailCarousel images={images} /> */}
    </main>
  );
}

export default AboutUs;
