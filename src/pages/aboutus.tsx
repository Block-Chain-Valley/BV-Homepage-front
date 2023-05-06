import AboutTeams from "@/components/Aboutus/AboutTeams";
import DetailCarousel from "@/components/common/DetailCarousel";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { SEO } from "@/seo/SEO";

const images = [
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
  "/bv_logo_red.png",
];

function AboutUs() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0),
    2: useScrollFadeIn("up", 1, 0.1),
    3: useScrollFadeIn("up", 1, 0.1),
    4: useScrollFadeIn("up", 1, 0.1),
    5: useScrollFadeIn("up", 1, 0.1),
    6: useScrollFadeIn("up", 1, 0.1),
  };
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-black text-white ">
        <SEO
          title="회사 소개 페이지"
          description="당사에 대한 소개를 확인할 수 있는 페이지입니다."
        />
        <div className="flex justify-center text-center items-center  m-20">
          <h1 className="text-7xl font-extrabold text-900 ">
            고려대학교 유일의 블록체인 학회,
            <br /> 블록체인 밸리를 소개합니다.
          </h1>
        </div>

        <div className="flex flex-col text-center m-20" {...animatedItem[0]}>
          <h1 className="text-7xl font-extrabold text-900 ">Who we are</h1>
          <div className=" font-bold text-2xl ">
            # 블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는
            블록체인 학회입니다.
          </div>
          <div className=" font-bold text-2xl">
            # WEB 3.0의 진정한 가치를 학습하는 공간이자, 블록체인을 통해 미래를
            위한 준비를 하는 공간입니다.
          </div>
          <div className=" font-bold text-2xl">
            # 구성원(node)간의 수평적 문화를 지향하며, 고려대학교 구성원 외에도
            나이, 소속, 출신에 제한 없이 누구나 함께 할 수 있습니다.
          </div>
        </div>

        <div className="flex flex-col m-20" {...animatedItem[1]}>
          <h1 className="text-7xl font-extrabold text-900 ">About Teams</h1>
          <AboutTeams />
        </div>

        <div className="flex flex-col m-20">
          <h1 className="text-7xl font-extrabold text-900 ">Archive</h1>
        </div>

        <div className="flex flex-col m-20">
          <h1 className="text-7xl font-extrabold text-900 ">Lounge</h1>
        </div>
        <DetailCarousel images={images} />
      </main>
    </>
  );
}

export default AboutUs;
