import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const MEDIUM_USER_ID = "blockchain-valley";
const MEDIUM_API_URL = `https://medium.com/@${MEDIUM_USER_ID}/latest?format=json`;

const getMediumPosts = async () => {
  const res = await fetch(MEDIUM_API_URL);
  const json = await res.text();
  const posts = JSON.parse(json.slice(16)).payload.posts;

  return posts;
};

const getStaticProps = async () => {
  const posts = await getMediumPosts();

  return {
    props: { posts },
    revalidate: 60 * 60, // 한 시간마다 데이터를 재생성합니다.
  };
};

const PostsPage = ({ posts }: { posts: any }) => {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <a href={`https://medium.com/p/${post.uniqueSlug}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="bg-black text-white">
      <div>다가올 WEB 3.0의 미래를 함께 만들어나갈 혁신가들의 공간</div>
      <div>
        <div>Our vision</div>
        <div>
          WEB 3.0의 진정한 가치를 학습하는 공간, 자신의 미래를 위해 준비를 하는
          공간.
        </div>
        <div>
          블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는
          블록체인 학회입니다. 블록체인밸리는 WEB3의 진정한 가치를 학습하는
          공간이자, 블록체인을 통해 자신의 미래를 위해 준비를 하는 공간이 되길
          희망합니다. “블록체인”이라는 키워드에서 뻗어, 자유롭게 생각을 나누고
          대화를 하며 가치있는 네트워크의 형성을 꿈꿉니다.
        </div>
      </div>
      <div>
        <div>Our activities</div>
        <div>
          현재 18명의 리서치팀과 19명의 개발팀으로 구성되어 있으며, 총 37명이
          노드로 활동하고 있습니다.
        </div>
      </div>
      <div>
        <div>Join us</div>
        <div>
          우리는 혼자 할 수 없고,함께해야만 할 수 있다는 것을 확신합니다.
        </div>
        <div>
          WEB 3.0이라는 거대한 물결에 함께 올라탈 예비 노드 여러분의 지원을
          기다립니다.
        </div>
        <button>지원하기</button>
      </div>
      <div>
        <div>최근 블로그</div>
        <div>medium api 따서 올리기</div>
        <div>
          <PostsPage posts={posts} />
        </div>
      </div>
    </main>
  );
}
