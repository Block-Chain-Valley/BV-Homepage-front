import axios from "axios";

type MediumPost = {
  title: string;
  link: string;
  imgSrc: string;
};

const PROXY = "/proxy";

const mediumAxois = axios.create({
  //baseURL: `https://v1.nocodeapi.com/`,
  baseURL: `${PROXY}/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const extractFirstImgLink = (str: string): string | null => {
  const imgTagRegex = /<img.+?src=["'](.+?)["']/;
  const match = str.match(imgTagRegex);
  return match ? match[1] : null;
};

const mediumAPI = {
  getPosts: async () => {
    const response = await mediumAxois.get(
      `blockchainvalley/medium/${process.env.NEXT_PUBLIC_NOCODE_USERNAME}`,

      {
        withCredentials: true,
      }
    );

    const posts: MediumPost[] = response.data.map((post: any) => {
      return {
        title: post.title,
        link: post.link,
        imgSrc: extractFirstImgLink(post.content),
      };
    });
    console.log(posts);

    return posts;
  },
};

export default mediumAPI;
