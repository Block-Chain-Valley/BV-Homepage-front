import { SetStateAction, useState } from "react";
import Image from "next/image";

function AboutTeams() {
  const buttonContents = ["개발팀", "리서치팀"];
  const imgs = ["/bv_logo_white.png", "/bv_logo_gray.png"];
  const Teams = [
    "블록체인밸리 개발팀 팀원들은 WEB3 관련 프로덕트들을 개발하고, 다양한 블록체인 관련 지식들을 습득하는 것을 목표로 삼습니다. 솔리디티를 기반으로 스마트 컨트랙트를 작성하는 컨트랙트 팀과, WEB3 생태계에서 백엔드보다 중요하게 여겨지는 프론트엔드 팀으로 구성되어 있습니다.",
    "블록체인밸리 리서치 팀은 학회원들이 블록체인 기본 지식을 습득하고 과거 및 현재 블록체인 생태계의 동향을 파악할 수 있는 능력 함양을 교육 목표로 삼고 있습니다. 아울러 빠르게 변화하는 블록체인 시장에 신속하게 조사 및 분석하며, 이를 기반으로 통찰력 있는 자료를 제공하고 블록체인 관련 학문적 욕구를 충족시키고자 합니다.",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {buttonContents.map((content, index) => (
          <button
            key={index}
            className={`my-2 px-4 py-2 rounded ${
              index === activeIndex ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => handleClick(index)}
          >
            {content}
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center max-w-md mt-4">
        <Image src={imgs[activeIndex]} width="150" height="150" alt="team" />
        {Teams[activeIndex]}
      </div>
    </div>
  );
}

export default AboutTeams;
