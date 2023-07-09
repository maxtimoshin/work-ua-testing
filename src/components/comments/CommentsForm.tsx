import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../../services/api/posts";
import { useState } from "react";

const CommentsForm = ({
  setNewCommentAdded,
}: {
  setNewCommentAdded: (value: boolean) => void;
}) => {
  const [commentText, setCommentText] = useState<string>("");

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  function addComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    queryClient.setQueryData(
      ["posts"],
      [
        {
          userId: new Date().valueOf(),
          id: new Date().valueOf(),
          title: "Коментар",
          body: commentText,
        },
        ...(data || []),
      ]
    );
    setCommentText("");
    setNewCommentAdded(true);
    setTimeout(() => {
      setNewCommentAdded(false);
    }, 1000);
  }
  return (
    <form
      onSubmit={(e) => addComment(e)}
      className="px-[30px] py-[20px] flex items-center justify-between bg-[#fff] border-[#e9ebed] border shadow-[0px_-5px_10px_-5px_rgba(0,0,0,0.15)]"
    >
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Додайте коментар"
        className="max-w-[560px] w-full h-[40px] border text-[#000] text-[20px] font-normal placeholder:text-[#ABB2BA] text-[20px] font-normal border-[#abb2ba] transition focus:border-[#00A1F1] outline-none pl-2"
      />
      <button
        type="submit"
        className="h-[40px] px-[20px] bg-[#00A1F1] hover:bg-[#0074AD] transition rounded text-[#fff] text-[17px] font-bold cursor-pointer"
      >
        Додати
      </button>
    </form>
  );
};

export default CommentsForm;
