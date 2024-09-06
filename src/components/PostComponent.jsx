/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function PostComponent({ title, link, date }) {
  return (
    <Link
      to={`/posts/${link}`}
      className="flex justify-between px-2 bg-blue-300 dark:bg-zinc-700 my-1"
    >
      <p>{title}</p>
      <p>{date}</p>
    </Link>
  );
}

export default PostComponent;
