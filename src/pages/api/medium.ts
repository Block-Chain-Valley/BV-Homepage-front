import axios from "axios";

const PROXY = "/proxy";

const mediumAxois = axios.create({
  //baseURL: `https://api.medium.com/v1/users/`,
  baseURL: `${PROXY}/`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const mediumAPI = {
  getPosts: async () => {
    const username = process.env.NEXT_PUBLIC_USERNAME;
    const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    console.log(username, access_token);
    const response = await mediumAxois.get(`${username}/posts`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  },
};

export default mediumAPI;
