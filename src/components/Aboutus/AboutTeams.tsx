import { SetStateAction, useState } from "react";

function AboutTeams() {
  const buttonContents = ["개발팀", "리서치팀"];
  const Teams = ["개발팀", "리서치팀"];
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
      <div className="mt-4">내용 {Teams[activeIndex]}</div>
    </div>
  );
}

export default AboutTeams;
