import { useEffect, useState } from "react";
import PostComponent from "../components/PostComponent";
import BaseLayout from "../layout/BaseLayout";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = "https://thelocalblogg-api.onrender.com/api/posts";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error occurred in fetching posts");
        }
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error(err);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <BaseLayout>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostComponent
              key={post._id}
              title={post.title}
              link={post.postId || post._id}
              date={new Date(post.date).toDateString()}
            />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </BaseLayout>
  );
};

export default PostsPage;
