import { useEffect, useRef, useState } from "react";
import JoinAnimation from "@/components/Joinus/JoinAnimation";
import Navbar from "../components/Navbar";
import Link from "next/link";

const joinus = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-black text-white">
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
      <JoinAnimation />
      <div className="flex flex-col justify-center items-center h-96 w-full ">
        <div
          className=" text-4xl max-w-3xl font-bold text-800 max-md:text-2xl text-center max-md:text-center max-md:max-w-xl "
          style={{
            textShadow: "0 0 100px rgba(255, 0, 0, 1.0)",
          }}
        >
          블록체인밸리와 함께 할 <br /> 노드를 모집합니다
        </div>
        <button
          className="mt-10 bg-white text-800 text-2xl font-bold p-4 rounded-md mb-48"
          style={{
            textShadow: "0 0 100px rgba(255, 0, 0, 1.0)",
          }}
          onClick={() => {
            alert("지금은 지원기간이 아닙니다!");
          }}
        >
          지원하기
        </button>
      </div>
    </main>
  );
};

export default joinus;
