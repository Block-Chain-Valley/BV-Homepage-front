import React, { useEffect, useRef, useState } from "react";
//import { CSSTransition } from "react-transition-group";

function JoinAnimation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback1 = () => {
    setMessage1("블록체인의 진정한 가치 학습이라는 비전에 공감하는 사람");
  };
  const someCallback2 = () => {
    setMessage2("1년 동안 함께 지속적으로 성장하고자 하는 사람");
  };
  const someCallback3 = () => {
    setMessage3(
      "매주 2번 3시간 씩 이루어지는 세션에 성실히 참여할 수 있는 사람"
    );
  };
  const someCallback4 = () => {
    setMessage4("실제로 가치가 있는 프로덕트를 만들고자 하는 개발팀");
  };
  const someCallback5 = () => {
    setMessage5("자신만의 관점을 통해 블록체인을 분석하는 리서치팀");
  };
  useEffect(() => {
    someCallback1();
    someCallback2();
    someCallback3();
  }, []);

  return (
    <div className="flex flex-col  justify-center items-center">
      <div
        className={`${
          scrollPosition > 100
            ? " transition delay-150 text-red-500 "
            : "transition delay-150 text-white"
        }
        flex flex-col  justify-center items-center h-[500px]`}
      >
        스크롤되면 색이 변합니다!
      </div>
      <div
        className={`${
          scrollPosition > 500
            ? " transition delay-150 text-red-500 "
            : "transition delay-150 text-white"
        }
        flex flex-col  justify-center items-center h-[500px]`}
      >
        스크롤되면 색이 변합니다!
      </div>
      <div
        className={`${
          scrollPosition > 1000
            ? " transition delay-150 text-red-500 "
            : "transition delay-150 text-white"
        }
        flex flex-col  justify-center items-center h-[500px]`}
      >
        스크롤되면 색이 변합니다!
      </div>
    </div>
  );
}

export default JoinAnimation;
