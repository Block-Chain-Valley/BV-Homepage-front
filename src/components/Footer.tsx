import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col  justify-center items-left h-40 bg-gray-200 p-5">
      <div className="flex flex-row justify-between">
        <Image
          src="/bv_logo_gray.png"
          width={120}
          height={30}
          alt="Picture of the author"
        />
        <div className="flex flex-row">
          <a href=" https://discord.gg/MdGKyzTJ">
            <Image
              className="ml-5"
              src="/discord.png"
              width={25}
              height={20}
              alt="Picture of the author"
            />
          </a>
          <a href="https://www.instagram.com/blockchain__valley/">
            <Image
              className="ml-5"
              src="/instagram.png"
              width={25}
              height={20}
              alt="Picture of the author"
            />
          </a>
          <a href="https://medium.com/blockchain-valley">
            <Image
              className="ml-5"
              src="/medium.png"
              width={25}
              height={20}
              alt="Picture of the author"
            />
          </a>
        </div>
      </div>
      <a
        href="mailto:blockchainvalley.kor@gmail.com"
        className="text-gray-500 text-sm mt-5"
      >
        blockchainvalley.kor@gmail.com
      </a>
      <div className="flex flex-row justify-between">
        <a
          href="http://kko.to/En-xxmhJh"
          target="_blank"
          className="text-gray-500 text-sm "
        >
          서울특별시 성북구 고려대로 24길 56 4층 블록체인밸리
        </a>
        <div className="text-gray-500 text-sm ">
          Copyright Blockchain Valley. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
