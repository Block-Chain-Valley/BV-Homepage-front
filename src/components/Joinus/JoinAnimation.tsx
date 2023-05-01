import React, { useEffect, useRef, useState } from "react";
//import { CSSTransition } from "react-transition-group";

const Wrapper = "flex flex-col items-center";
const Timeline = "h-70vh w-3 shadow-boxBlue";
const Circle = "w-30 h-30 text-darkblue rounded-full mx-5";
const CircleWrapper = "relative";
const MessageR =
  "absolute left-full top-0 font-bold text-lg w-96 transition-all duration-200 ease-in-out";
const MessageL =
  "absolute right-56 top-0 font-bold text-lg w-96 transition-all duration-800 ease-in-out";
const DetailMessage = "leading-10 text-white text-shadow-boxBlueLight";

function JoinAnimation() {
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
    <div className={Wrapper}>
      <div className={Timeline} id="timeline1" ref={timeline1} />
      <div className={CircleWrapper}>
        <div className={Circle} id="circle1" ref={circle1}></div>
        <div className={MessageR}>
          {/* <CSSTransition
          unmountOnExit
          timeout={400}
          classNames="moveR"
          in={message1}
        > */}
          <div className={DetailMessage}>{message1}</div>
        </div>
      </div>

      <div className={Timeline} id="timeline1" ref={timeline1} />
      <div className={CircleWrapper}>
        <div className={Circle} id="circle1" ref={circle1}></div>
        <div className={MessageR}>
          {/* <CSSTransition
          unmountOnExit
          timeout={400}
          classNames="moveR"
          in={message1}
        > */}
          <div className={DetailMessage}>{message2}</div>
        </div>
      </div>

      <div className={Timeline} id="timeline1" ref={timeline1} />
      <div className={CircleWrapper}>
        <div className={Circle} id="circle1" ref={circle1}></div>
        <div className={MessageR}>
          {/* <CSSTransition
          unmountOnExit
          timeout={400}
          classNames="moveR"
          in={message1}
        > */}
          <div className={DetailMessage}>{message3}</div>
        </div>
      </div>
    </div>
  );
}

export default JoinAnimation;
