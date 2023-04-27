import Image from "next/image";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className=" bg-black flex items-center">
      <Image
        src="/bv_logo_red.png"
        alt="Picture of the author"
        width={64}
        height={64}
      />
      <div className="m-auto text-white">This is Template</div>
      <Navbar />
    </div>
  );
}

export default Header;
