import { useTheme } from "theme-context";
import CommentForm from "./CommentForm";

const CommentsBox = ({ post }) => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light"
          ? "comments-box bg-light d-flex flex-column gap-4 p-4 mb-4"
          : "comments-box bg-dark d-flex flex-column gap-4 p-4 mb-4"
      }
    >
      {!post ? null : (
        <>
          <CommentForm post={post} />
        </>
      )}
    </div>
  );
};

export default CommentsBox;
