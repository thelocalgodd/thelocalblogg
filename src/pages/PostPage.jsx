import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";

function PostPage() {
  const { link } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const url = `http://localhost:3002/api/posts/${link}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error occurred in fetching post");
        }

        const data = await response.json();
        setPost(data.response);
      } catch (err) {
        console.error(err);
        setPost(null);
      }
    };

    fetchPost();
  }, [link]);

  return (
    <BaseLayout>
      {post ? (
        <div>
          <div className="mt-1 flex justify-between items-center">
            <div className="flex">
              <p className="font-semibold mr-2">{post.title}</p>
              <p>{"//" + post.author}</p>
            </div>
            <p className="text-sm text-gray-500">
              {new Date(post.date).toDateString()}
            </p>
          </div>
          <div className="my-2">{post.body}</div>
        </div>
      ) : (
        <p></p>
      )}
    </BaseLayout>
  );
}

export default PostPage;
