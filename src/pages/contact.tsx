import EmailBox from "@/components/Contact/EmailBox";
import { SEO } from "@/seo/SEO";
import { IoCall } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <main className="flex flex-col  items-center justify-center bg-black text-white ">
      <SEO
        title="문의 페이지"
        description="문의 사항을 보낼 수 있는 페이지입니다."
      />
      {/* <div className="absolute top-5 left-5 w-full bg-none flex items-center justify-between p-5">
        <Link href="/">
          <Image
            src="/bv_logo_white.png"
            alt="Picture of the author"
            width={230}
            height={150}
          />
        </Link>
        <Navbar />
      </div> */}

      <div
        className="flex flex-col items-center  mt-24 w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/contactback.jpg')", height: "100vh" }}
      >
        <div className="animate-fadeIn mt-24 text-4xl max-w-3xl font-bold  max-md:text-2xl max-md:text-center max-md:max-w-xl ">
          WEB3의 진정한 가치를 학습하는 공간
          <br />
          <span className="text-900">블록체인 밸리</span> 입니다
          <br />
          블록체인밸리와의 파트너십 및 협력 혹은 요청 사항이 있으시다면
          <br /> 언제든지 편하게 연락주세요
        </div>
      </div>

      <div className="flex flex-col w-full items-center ">
        <div className="flex flex-col mt-20 mb-10">
          <h1 className="text-4xl font-extrabold text-900 ">Email to us</h1>
        </div>
        <div className="flex flex-col items-center">
          <EmailBox />

          <div className="flex mt-10 max-md:flex-col mb-24 ">
            <div className="flex text-xl mr-4  justify-center items-center">
              <IoCall />
              010-8940-7209
            </div>
            <div className="flex text-xl  mr-4  justify-center items-center">
              <HiLocationMarker />
              서울특별시 성북구 고려대로 24길 56 4층
            </div>
            <div className="flex text-xl mr-4  justify-center items-center">
              <MdEmail />
              blockchainvalley.kor@gmail.com
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
