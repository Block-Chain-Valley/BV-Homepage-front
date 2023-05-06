import AboutTeams from "@/components/Aboutus/AboutTeams";
import DetailCarousel from "@/components/common/DetailCarousel";
import { SEO } from "@/seo/SEO";

function AboutUs() {
  return (
    <>
      <main className="flex flex-col items-center justify-center ">
        <SEO
          title="회사 소개 페이지"
          description="당사에 대한 소개를 확인할 수 있는 페이지입니다."
        />
        <div>다가올 WEB 3.0의 미래를 함께 만들어나갈 혁신가들의 공간</div>

        <div>
          <div>
            # 블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는
            블록체인 학회입니다.
          </div>
          <div>
            # WEB 3.0의 진정한 가치를 학습하는 공간이자, 블록체인을 통해 미래를
            위한 준비를 하는 공간입니다.
          </div>
          <div>
            # 구성원(node)간의 수평적 문화를 지향하며, 고려대학교 구성원 외에도
            나이, 소속, 출신에 제한 없이 누구나 함께 할 수 있습니다.
          </div>
        </div>

        <div className="flex flex-row">
          <div>Lounge</div>
        </div>
      </main>
      <DetailCarousel />
      <AboutTeams />
    </>
  );
}

export default AboutUs;
