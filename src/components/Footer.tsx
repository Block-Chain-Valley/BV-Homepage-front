import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center h-40 bg-black text-white">
      <div>
        <Image
          src="/bv_logo_gray.png"
          width={118}
          height={28}
          alt="Picture of the author"
        />
      </div>
      <div>
        <a href="mailto: blockchainvalley.kor@gmail.com">
          blockchainvalley.kor@gmail.com
        </a>
      </div>
      <div className="flex">
        <div>
          <a href="http://kko.to/En-xxmhJh" target="_blank">
            서울특별시 성북구 고려대로 24길 56 4층 블록체인밸리
          </a>
        </div>
        <div>Copyright Blockchain Valley. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
