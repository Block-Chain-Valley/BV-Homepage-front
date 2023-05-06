import EmailBox from "@/components/Contact/EmailBox";
import { SEO } from "@/seo/SEO";
import { IoCall } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <main className="flex flex-col items-center justify-center bg-black text-white ">
      <SEO
        title="문의 페이지"
        description="문의 사항을 보낼 수 있는 페이지입니다."
      />
      <div className="flex flex-col m-20">
        <h1 className="text-7xl font-extrabold text-900 ">Contact</h1>
      </div>
      <div className="text-4xl max-w-3xl text-center font-bold text-800">
        WEB3의 진정한 가치를 학습하는 공간 블록체인밸리입니다. <br />
        블록체인밸리와의 파트너십 및 협력 혹은 요청 사항이 있으시다면
        <br /> 언제든지 편하게 연락주세요.
      </div>

      <div className="flex flex-col mt-20 mb-10">
        <h1 className="text-5xl font-extrabold text-900 ">Email to us</h1>
      </div>
      <EmailBox />

      <div className="flex mt-10">
        <div className="flex justify-center items-center">
          <IoCall />
          010-8940-7209
        </div>
        <div className="flex justify-center items-center">
          <HiLocationMarker />
          서울특별시 성북구 고려대로 24길 56 4층
        </div>
        <div className="flex justify-center items-center">
          <MdEmail />
          blockchainvalley.kor@gmail.com
        </div>
      </div>
    </main>
  );
}

export default Contact;
