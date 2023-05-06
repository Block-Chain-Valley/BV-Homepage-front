import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import mediumAPI from "./api/medium";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { SEO } from "@/seo/SEO";
import DetailCarousel from "@/components/common/DetailCarousel";

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
    <main className="bg-black text-white ">
      <SEO
        title="Blockchain Valley"
        description="WEB 3.0의 진정한 가치를 학습하는 공간, 자신의 미래를 위해 준비를 하는 공간.
블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는 블록체인 학회입니다."
      />
      <div className=" h-screen w-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/backgroundImg.png')" ,height: "80vh"}}>
        <div className="animate-fadeIn text-center text-4xl font-semibold leading-relaxed">다가올 WEB 3.0의 미래를 <br></br>  함께 만들어 나갈 혁신가들의 공간</div>
      </div>
      <div className="text-3xl p-4">Medium</div>
      <div className="p-10">
        <DetailCarousel images={postImages} title={postTitles} url = {postUrls}/> 
      </div>
    </main>
  );
}

{/* {post.map((post, index) => (
          <div key={index}> */}
{/* <p>{post.link}</p> */ }

{/* <img className='h-300 w-200' src={post.imgSrc} alt="Post image" /> */ }
{/* <h2 className="p-10 text-2xl">{post.title}</h2> */ }
{/* </div>
        ))} */}