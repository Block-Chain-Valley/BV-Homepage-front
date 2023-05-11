import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import mediumAPI from "./api/medium";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { SEO } from "@/seo/SEO";
import DetailCarousel from "@/components/common/DetailCarousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";

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
      const posts = await mediumAPI.getPosts();
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

<div className="animate-fadeIn text-center text-5xl leading-relaxed font-">
          다가올 Web 3.0의 미래를 <br/>함께 만들어 나갈 혁신가들의 공간

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
