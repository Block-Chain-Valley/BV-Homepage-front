import { useEffect, useRef, useState } from "react";
import JoinAnimation from "@/components/Joinus/JoinAnimation";
import Navbar from "../components/Navbar";
import Link from "next/link";

const joinus = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-black text-white ">
      <div className="absolute top-5 left-5 w-full bg-none flex items-center justify-between p-5">
        <Link href="/">
          <img
            src="/bv_logo_white.png"
            alt="Picture of the author"
            width={230}
              height={150}
          />
        </Link>
        <Navbar />
      </div>
      <JoinAnimation />
    </main>
  );
};

export default joinus;
