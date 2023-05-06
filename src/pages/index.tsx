import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import mediumAPI from "./api/medium";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { SEO } from "@/seo/SEO";


const PostsPage = ({ posts }: { posts: any }) => {
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.subtitle}</p>
          <p>Reactions: {post.virtuals.totalClapCount}</p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const animatedItem = useScrollFadeIn("up", 1, 0);
  const getPosts = async () => {
    try {
      const posts = await mediumAPI.getPosts();
      setPosts(posts);
    } catch (error) {
      // 에러 처리 코드 추가
    }
  };
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className="bg-black text-white animate-fadeIn ">
    <SEO
        title="Blockchain Valley"
        description="WEB 3.0의 진정한 가치를 학습하는 공간, 자신의 미래를 위해 준비를 하는 공간.
블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는 블록체인 학회입니다."
      />
          <div className="animate-fadeIn h-screen w-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/backgroundImg.png')" }}>
        <div className="text-center text-3xl">다가올 WEB 3.0의 미래를 함께 만들어나갈 <br></br> 혁신가들의 공간</div>
      </div>
      <div>최근 블로그</div>
      <div>medium api 따서 올리기</div>
    </main>
  );
}


{/* <div>
              블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는
              블록체인 학회입니다. 블록체인밸리는 WEB3의 진정한 가치를 학습하는
              공간이자, 블록체인을 통해 자신의 미래를 위해 준비를 하는 공간이 되길
              희망합니다. “블록체인”이라는 키워드에서 뻗어, 자유롭게 생각을 나누고
              대화를 하며 가치있는 네트워크의 형성을 꿈꿉니다.
            </div> */}
            // </div>
            // <div>
            //   <div>Our activities</div>
            //   <div>
            //     현재 18명의 리서치팀과 19명의 개발팀으로 구성되어 있으며, 총 37명이
            //     노드로 활동하고 있습니다.
            //   </div>
            // </div>
            // <div>
            //   <div>Join us</div>
            //   <div>
            //     우리는 혼자 할 수 없고,함께해야만 할 수 있다는 것을 확신합니다.
            //   </div>
            //   <div>
            //     WEB 3.0이라는 거대한 물결에 함께 올라탈 예비 노드 여러분의 지원을
            //     기다립니다.
            //   </div>
            //   <button>지원하기</button>
          //   <div>
          //   <div className="flex flex-col justify-center items-center h-[1000px]">
          //     <div {...animatedItem}>
          //       <Image
          //         src="/bv_logo_red.png"
          //         alt="Picture of the author"
          //         width={500}
          //         height={500}
          //       />
          //     </div>
          //   </div>
          // </div>