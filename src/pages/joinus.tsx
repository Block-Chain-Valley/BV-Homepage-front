import { useEffect, useRef, useState } from "react";
import JoinAnimation from "@/components/Joinus/JoinAnimation";
import { SEO } from "@/seo/SEO";
const joinus = () => {
  return (
    <div>
      <SEO
        title="입사 지원 페이지"
        description="당사에 입사 지원을 할 수 있는 페이지입니다."
      />
      <JoinAnimation />
    </div>
  );
};

export default joinus;
