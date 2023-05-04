import axios from "axios";

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

const mediumAPI = {
  getPosts: async () => {
    // const username = process.env.NEXT_PUBLIC_USERNAME;
    // const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    // console.log(username, access_token);
    const response = await mediumAxois.get(
      `blockchainvalley/medium/${process.env.NEXT_PUBLIC_NOCODE_USERNAME}`,

      {
        withCredentials: true,
      }
    );
    console.log(response.data);

    return response.data;
  },
};

export default mediumAPI;
