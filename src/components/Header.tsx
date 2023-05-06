import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

function Header() {
  return (
    <div className=" bg-black flex items-center justify-between p-1">
      <Link href="/">
          <Image
            src="/bv_logo_redwhite.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
