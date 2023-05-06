import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const activated = (path: string) => {
    return router.pathname === path ? "text-white font-bold" : "text-white";
  };

  return (
    <header className="flex  items-center">
      <div className="block md:hidden mr-5 ">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className={`flex text-lg pr-2 md:flex  ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col md:flex-row max-md:fixed max-md:w-20 max-md:bg-black max-md:top-16 max-md:right-0  max-md:items-center max-md:justify-center ">
          <Link
            href="/"
            className={`flex md:inline-block md:mt-0 ${activated(
              "/"
            )} hover: m-2`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className={`flex md:inline-block md:mt-0  ${activated(
              "/aboutus"
            )} hover:  m-2 `}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`flex md:inline-block md:mt-0 ${activated(
              "/contact"
            )} hover: m-2`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/joinus"
            className={`flex md:inline-block md:mt-0 ${activated(
              "/joinus"
            )} hover:  m-2`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
