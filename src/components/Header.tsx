import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

function Header() {
  return (
    <div className=" flex items-center justify-between p-1">
      <Link href="/">
          <Image
            src="/bv_logo_white.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
