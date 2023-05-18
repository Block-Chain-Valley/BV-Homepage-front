import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import mediumAPI from "./api/medium";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { SEO } from "@/seo/SEO";
import DetailCarousel from "@/components/common/DetailCarousel";

const dummyposts = [
  {
    id: 1,
    title: "블록체인밸리 2021년 1학기 활동보고서",
    content: {
      subtitle: "블록체인밸리 2021년 1학기 활동보고서",
    },
    virtuals: {
      totalClapCount: 10,
    },
    imgSrc: "/bv_common.jpg",
    link: "https://medium.com/blockchain-valley/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EB%B0%B8%EB%A6%AC-2021%EB%85%84-1%ED%95%99%EA%B8%B0-%ED%99%9C%EB%8F%99%EB%B3%B4%EA%B3%A0%EC%84%9C-1f5b0b0b3e0c",
  },
  {
    id: 2,
    title: "블록체인밸리 2021년 1학기 활동보고서",
    content: {
      subtitle: "블록체인밸리 2021년 1학기 활동보고서",
    },
    virtuals: {
      totalClapCount: 10,
    },
    imgSrc: "/bv_common.jpg",
    link: "https://medium.com/blockchain-valley/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EB%B0%B8%EB%A6%AC-2021%EB%85%84-1%ED%95%99%EA%B8%B0-%ED%99%9C%EB%8F%99%EB%B3%B4%EA%B3%A0%EC%84%9C-1f5b0b0b3e0c",
  },
  {
    id: 3,
    title: "블록체인밸리 2021년 1학기 활동보고서",
    content: {
      subtitle: "블록체인밸리 2021년 1학기 활동보고서",
    },
    virtuals: {
      totalClapCount: 10,
    },
    imgSrc: "/bv_common.jpg",
    link: "https://medium.com/blockchain-valley/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EB%B0%B8%EB%A6%AC-2021%EB%85%84-1%ED%95%99%EA%B8%B0-%ED%99%9C%EB%8F%99%EB%B3%B4%EA%B3%A0%EC%84%9C-1f5b0b0b3e0c",
  },
  {
    id: 4,
    title: "블록체인밸리 2021년 1학기 활동보고서",
    content: {
      subtitle: "블록체인밸리 2021년 1학기 활동보고서",
    },
    virtuals: {
      totalClapCount: 10,
    },
    imgSrc: "/bv_common.jpg",
    link: "https://medium.com/blockchain-valley/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EB%B0%B8%EB%A6%AC-2021%EB%85%84-1%ED%95%99%EA%B8%B0-%ED%99%9C%EB%8F%99%EB%B3%B4%EA%B3%A0%EC%84%9C-1f5b0b0b3e0c",
  },
];

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
  const [post, setPost] = useState<any[]>([]);
  const [postImages, setPostImages] = useState<string[]>([]);
  const [postTitles, setPostTitles] = useState<string[]>([]);
  const [postUrls, setPostUrls] = useState<string[]>([]);

  const getPosts = async () => {
    try {
      // const posts = await mediumAPI.getPosts();
      const posts = dummyposts;
      setPost(posts);
      setPostImages(posts.map((post) => post.imgSrc));
      setPostTitles(posts.map((post) => post.title));
      setPostUrls(posts.map((post) => post.link));
      console.log(postImages);
    } catch (error) {
      // 에러 처리 코드 추가
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className="bg-white text-white ">
      <SEO
        title="Blockchain Valley"
        description="WEB 3.0의 진정한 가치를 학습하는 공간, 자신의 미래를 위해 준비를 하는 공간.
블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는 블록체인 학회입니다."
      />

      <div
        className="flex flex-col h-screen w-screen bg-cover bg-center justify-center items-center"
        style={{ backgroundImage: "url('/bv_back.png')", height: "100vh" }}
      >
        {/* <div className="animate-fadeIn text-center text-6xl font-semibold leading-relaxed ">
          Be Our Nodes</div> */}

        <div className="animate-fadeIn text-center text-5xl max-md:text-3xl leading-relaxed font-">
          다가올 Web 3.0의 미래를 <br />
          함께 만들어 나갈 혁신가들의 공간
        </div>
      </div>
      <div>A</div>
      <div>B</div>
      <div>
        <div className="text-black text-3xl p-4">Medium</div>
        <div className="p-10">
          <DetailCarousel
            images={postImages}
            title={postTitles}
            url={postUrls}
          />
        </div>
      </div>
    </main>
  );
}
