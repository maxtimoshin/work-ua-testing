import { useQuery } from "@tanstack/react-query";
import { Post } from "../../types/post";
import { getPosts } from "../../services/api/posts";

const Feed = ({ newCommentAdded }: { newCommentAdded: boolean }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return "Is Loading";
  if (error) return "There is an error";
  
  return (
    <ul>
      {data?.map((post: Post) => (
        <li
          key={post.id}
          className={`px-[30px] py-[20px] flex flex-col gap-1 border-b border-[#e9ebed] transition ${
            newCommentAdded && post === data[0]
              ? "bg-[#BFEAFF]"
              : "bg-[#fff]"
          }`}
        >
          <span className="text-[17px] font-bold text-[#2C3F52]">{post.title}</span>
          <span className="text-[17px] font-normal">{post.body}</span>
        </li>
      ))}
    </ul>
  );
};

export default Feed;
