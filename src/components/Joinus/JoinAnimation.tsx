import React, { useEffect, useRef, useState } from "react";
//import { CSSTransition } from "react-transition-group";

const JoinText = ({
  scrollPosition,
  position,
  text,
}: {
  scrollPosition: number;
  position: number;
  text: string;
}) => {
  return (
    <div
      className={`${
        scrollPosition > position
          ? " transition delay-150 text-red-800 "
          : "transition delay-150 text-white"
      }
        mt-48 mr-12 ml-12 flex flex-col text-center text-4xl justify-center items-center h-[500px] text-shadow-50px rgba(6, 61, 285, 0.8)`}
      style={{
        textShadow: "0 0 100px rgba(255, 0, 0, 1.0)",
      }}
    >
      {text}
    </div>
  );
};

function JoinAnimation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="flex flex-col  justify-center items-center">
      <div
        className={`${
          scrollPosition > 30
            ? " transition delay-150 text-red-800 "
            : "transition delay-150 text-white"
        }
        mt-48 flex flex-col text-center text-4xl justify-center items-center h-[500px] text-shadow-50px rgba(6, 61, 285, 0.8)`}
        style={{
          textShadow: "0 0 100px rgba(255, 0, 0, 1.0)",
        }}
      >
        다가오는 WEB 3의 미래를
        <br /> 블록체인 밸리에서
        <br /> 함께 만들어갈 신입 node를
        <br />
        모집합니다!
      </div>

      <JoinText
        scrollPosition={scrollPosition}
        position={500}
        text={"블록체인의 진정한 가치 학습이라는 비전에 공감하는 사람"}
      />

      <JoinText
        scrollPosition={scrollPosition}
        position={1200}
        text={" 1년 동안 함께 지속적으로 성장하고자 하는 사람 "}
      />

      <JoinText
        scrollPosition={scrollPosition}
        position={1800}
        text={
          "     매주 2번 3시간 씩 이루어지는 세션에 성실히 참여할 수 있는 사람"
        }
      />

      <JoinText
        scrollPosition={scrollPosition}
        position={2800}
        text={"  실제로 가치가 있는 프로덕트를 만들고자 하는 개발팀"}
      />

      <JoinText
        scrollPosition={scrollPosition}
        position={3600}
        text={"  자신만의 관점을 통해 블록체인을 분석하는 리서치팀 "}
      />
    </div>
  );
}

export default JoinAnimation;
