import Image from "next/image";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="bg-gray-800 flex items-center">
      <Image
        src="/logo.png"
        alt="Picture of the author"
        width={64}
        height={64}
      />
      <div className="m-auto">This is Template</div>
      <Navbar />
    </div>
  );
}

export default Header;
