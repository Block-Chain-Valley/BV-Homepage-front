import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const activated = (path: string) => {
    return router.pathname === path ? "text-white font-bolder" : "text-white";
  };

  return (
    <header>
      <div className="block md:hidden ">
        <button
          className="flex items-left px-4 py-2 border rounded text-white border-white hover:text-white hover:border-white"
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
      <div
        className={`flex text-lg pr-10 md:flex  ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row max-md:absolute max-md:w-20 max-md:bg-none max-md:top-20 max-md:right-1  max-md:items-center max-md:justify-center space-y-5 md:space-y-0 md:space-x-20">
          <Link
            href="/"
            className={`flex md:inline-block md:mt-0 text-base ${activated(
              "/"
            )} hover:text-gray-400 text-white`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className={`flex md:inline-block md:mt-0 text-base ${activated(
              "/aboutus"
            )} hover:text-gray-400 text-white`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`flex md:inline-block md:mt-0 text-base ${activated(
              "/contact"
            )} hover:text-gray-400 text-white`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/joinus"
            className={`flex md:inline-block md:mt-0 text-base ${activated(
              "/joinus"
            )} hover:text-gray-400 text-white`}
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
