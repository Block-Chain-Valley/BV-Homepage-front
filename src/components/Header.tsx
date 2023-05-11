import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

function Header() {
  return (
    <div className="absolute top-5 left-5 w-full bg-none flex items-center justify-between p-5">
      <Link href="/">
        <Image
          src="/bv_logo_white.png"
          alt="Picture of the author"
          width={200}
          height={200}
          className={`${"max-md:w-[100px]"}`}
        />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
