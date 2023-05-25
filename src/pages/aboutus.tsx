import AboutTeams from "@/components/Aboutus/AboutTeams";
import DetailCarousel from "@/components/common/DetailCarousel";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { SEO } from "@/seo/SEO";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const images = [
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
];

function AboutUs() {
  const [isHoveredCommon, setIsHoveredCommon] = useState(false);
  const [isHoveredResearch, setIsHoveredResearch] = useState(false);
  const [isHoveredDevelop, setIsHoveredDevelop] = useState(false);

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 0.5, 0),
    2: useScrollFadeIn("up", 0.5, 0),
    3: useScrollFadeIn("up", 1, 0),
    4: useScrollFadeIn("up", 1, 0),
    5: useScrollFadeIn("up", 1, 0),
    6: useScrollFadeIn("up", 1, 0),
  };

  return (
    <main className="flex flex-col items-center justify-center text-white bg-black ">
      <SEO
        title="About Us Page"
        description="블록체인 밸리는 고려대학교 유일의 블록체인 학회입니다. 블록체인과 크립토 그리고 WEB 3.0에 대한 관심과 열정이 있다면 블록체인 밸리의 노드가 될 수 있습니다."
      />

      {/* <div className="absolute top-5 left-5 w-full bg-none flex items-center justify-between p-5">
        <Link href="/">
          <img
            src="/bv_logo_white.png"
            alt="Picture of the author"
            width={230}
            height={150}
          />
        </Link>
        <Navbar />
      </div> */}

      <div
        style={{
          backgroundImage: "url('/korea_univ.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "65vh",
          flexDirection: "column",
          paddingTop: "350px",
        }}
      >
        <div className="m-10 text-left text-5xl font-extrabold">
          블록체인 밸리는 <br />
          <span className="text-900">고려대학교 유일의 블록체인 학회</span>
          입니다
        </div>

        <div className="flex-col text-left m-10" {...animatedItem[0]}>
          <div className="text-base text-lg ">
            블록체인 밸리는 WEB 3.0의 진정한 가치를 학습하는 공간이자,
            블록체인을 통해 자신의 미래를 위한 준비를 하는 공간이 되기를
            지향합니다. 구성원(node) 간의 수평적 문화를 지향하며, 고려대학교
            구성원 외에도 나이, 소속, 출신에 제한 없이 누구나 함께 할 수
            있습니다. 블록체인과 크립토 그리고 WEB 3.0에 대한 관심과 열정이
            있다면 블록체인 밸리의 노드가 될 수 있습니다.
          </div>
        </div>
      </div>

      <div className="w-full h-100">
        <div className="bg-white h-100 text-black text-center p-10 text-4xl font-extrabold">
          <span>Mission & Vision</span>
        </div>
        <div className="flex">
          <div className="bg-white p-5 text-black text-center flex-1 flex flex-col items-center">
            <img
              src="/ic_blockchain.png"
              alt="Icon"
              className="w-20 h-20 mb-8"
            />
            <span className="text-lg">
              Web 3.0의 진정한 가치를 학습하는 공간
            </span>
          </div>

          <div className="bg-white p-5 text-black text-center flex-1 flex flex-col items-center pb-20">
            <img src="/ic_network.png" alt="Icon" className="w-20 h-20 mb-8" />
            <span className="text-lg">
              Web 3.0를 통해 자신의 미래를 준비하는 공간
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full bg-gray-300 ">
          <div className="bg-gray-300 h-100 text-black text-center pt-20 text-4xl font-extrabold">
            <span>Activities</span>
          </div>
          <div className="bg-gray-300  h-100 pl-10 text-black text-center font-bold text-2xl p-10 ">
            2022.03 - 2022.08
          </div>
          <div className="flex justify-center mr-10 max-md:max-w-3xl">
            <div className="text-center bg-gray-300  max-md:pl-14 text-bold text-black text-lg pb-10 w-full leading-9">
              <li>10명의 개발팀과 9명의 리서치팀, 총 19명이 노드로 활동</li>
              <li>
                산업의 이해도를 높이기 위한 다양한 외부 기업과 강연, 리서치 등
                산학협력 진행
              </li>
              <li>
                고려대학교 주변 대학 소속 블록체인 학회들과의 연합 행사 주최
              </li>
              <li>
                타 학회 주관 세션 참여, KBW(Korea Blockchain Week) 등 컨퍼런스
                참여
              </li>
              <li>
                고려대학교 블록체인 대학원과 함께 진행한 아이코어 사업에 통과,
                미국 캘리포니아에서 창업 지원 교육을 이수
              </li>
            </div>
          </div>

          <div className="bg-gray-300  h-100 pl-10 text-black text-center font-bold text-2xl p-10 ">
            2022.08 - 2023.02
          </div>
          <div className="flex justify-center mr-10 max-md:max-w-3xl">
            <div className="text-center bg-gray-300  max-md:pl-14 text-bold text-black text-lg pb-10 w-full leading-9">
              <li>베인 x 쟁글 특별 공개 강연</li>
              <li>고연전 NFT 프로젝트 &apos;버미와 수리&apos; 진행</li>
              <li>
                드림플러스 블록체인 해커톤 메타마스크 Snap 활용 트랜잭션 보안
                서비스로 &apos;안랩블록체인컴퍼니상&apos; 수상
              </li>
              <li>Korea Blockchain Academy Conference(KOBAC) 주최 </li>
              <li>
                필로소피아벤처스와 업무협약 체결 - 안암 라운지 및 다양한 지원
                제공
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black  text-4xl font-extrabold p-10 text-center text-white">
        Our Teams
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-row w-full max-md:flex-col">
          <div className="flex flex-grow">
            <div
              className="text-center pl-10 pr-10 w-full h-full relative"
              style={{
                backgroundImage: isHoveredCommon
                  ? "url(/bv_common_0.5.png)"
                  : "url(/bv_common.jpg)",
                backgroundSize: "cover",
                height: "500px",
              }}
              onMouseEnter={() => setIsHoveredCommon(true)}
              onMouseLeave={() => setIsHoveredCommon(false)}
            >
              {isHoveredCommon ? (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="text-white text-thin p-10">
                    블록체인에 핵심적인 DeFi 및 NFT 생태계에 대한 이해를
                    넓혀가며, 외부 연사 초청을 통해 보다 심화된 지식을 탐구하는
                    것 목표로 삼습니다. 3월엔 리서치 / 개발 팀장들의 리드 하에
                    공통세션이 진행되며, 그 이후에는 현직자 및 알럼나이,
                    외부연사 분들의 강의가 예정되어 있습니다.{" "}
                  </span>
                </div>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="flex items-center justify-center h-full text-4xl font-bold">
                    공통
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-grow">
            <div
              className="text-center pl-10 pr-10 w-full h-full relative"
              style={{
                backgroundImage: isHoveredResearch
                  ? "url(/bv_research_0.5.png)"
                  : "url(/bv_research.jpeg)",
                backgroundSize: "cover",
                height: "500px",
              }}
              onMouseEnter={() => setIsHoveredResearch(true)}
              onMouseLeave={() => setIsHoveredResearch(false)}
            >
              {isHoveredResearch ? (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="text-white text-thin p-10 bg-opacity-75">
                    블록체인밸리 리서치 팀은 학회원들이 블록체인 기본 지식을
                    습득하고 과거 및 현재 블록체인 생태계의 동향을 파악할 수
                    있는 능력 함양을 교육 목표로 삼고 있습니다. 아울러 빠르게
                    변화하는 블록체인 시장에 신속하게 조사 및 분석하며, 이를
                    기반으로 통찰력 있는 자료를 제공하고 블록체인 관련 학문적
                    욕구를 충족시키고자 합니다.
                  </span>
                </div>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="flex items-center justify-center h-full text-4xl font-bold">
                    리서치
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-grow">
            <div
              className="text-center pl-10 pr-10 w-full h-full relative"
              style={{
                backgroundImage: isHoveredDevelop
                  ? "url(/bv_develop_0.5.png)"
                  : "url(/bv_develop.jpg)",
                backgroundSize: "cover",
                height: "500px",
              }}
              onMouseEnter={() => setIsHoveredDevelop(true)}
              onMouseLeave={() => setIsHoveredDevelop(false)}
            >
              {isHoveredDevelop ? (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="text-white text-thin p-10">
                    블록체인밸리 개발팀 팀원들은 WEB3 관련 프로덕트들을
                    개발하고, 다양한 블록체인 관련 지식들을 습득하는 것을 목표로
                    삼습니다. 솔리디티를 기반으로 스마트 컨트랙트를 작성하는
                    컨트랙트 팀과, WEB3 생태계에서 백엔드보다 중요하게 여겨지는
                    프론트엔드 팀으로 구성되어 있습니다.
                  </span>
                </div>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="flex items-center justify-center h-full text-4xl font-bold">
                    개발
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
