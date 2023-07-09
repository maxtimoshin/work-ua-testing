import { Post } from "./../../types/post";
import axios from "axios";

export async function getPosts() {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: 4,
      },
    }
  );
  return response.data;
}
