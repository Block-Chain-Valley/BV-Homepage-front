import { useEffect, useRef, useState } from "react";
import JoinAnimation from "@/components/Joinus/JoinAnimation";
const joinus = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-black text-white ">
      <JoinAnimation />
    </main>
  );
};

export default joinus;
