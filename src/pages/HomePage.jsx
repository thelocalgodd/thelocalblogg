import { useState, useEffect } from "react";
import BaseLayout from "../layout/BaseLayout";

const API_ENDPOINT = "https://thelocalblogg-api.onrender.com/api/";

export default function HomePage() {
  const [formData, setFormData] = useState({
    postId: "",
    author: "",
    title: "",
    body: "",
    genre: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [recentPosts, setRecentPosts] = useState([]);
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("recentPosts") || "[]");
    setRecentPosts(storedPosts);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenreChange = (e) => {
    const genres = e.target.value.split(",").map((genre) => genre.trim());
    setFormData((prevData) => ({ ...prevData, genre: genres }));
  };

  const handlePublish = async () => {
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${API_ENDPOINT}posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();

      console.log("Post created successfully!");
      console.log("Post details:", data.response);

      setSuccessMessage("New Post Created");
      setPostDetails(data.response);

      // Update recent posts
      const newPost = {
        title: data.response.title,
        author: data.response.author,
        postId: data.response.postId,
        date: data.response.date,
      };

      const updatedRecentPosts = [newPost, ...recentPosts.slice(0, 4)];
      setRecentPosts(updatedRecentPosts);
      localStorage.setItem("recentPosts", JSON.stringify(updatedRecentPosts));

      // Clear form
      setFormData({
        postId: "",
        author: "",
        title: "",
        body: "",
        genre: [],
      });
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.title && formData.body && formData.author;

  return (
    <BaseLayout>
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">create a new post</h1>
        <input
          type="text"
          name="title"
          placeholder="Add post title"
          className="border-none mb-2 bg-blue-300 dark:bg-green-700 dark:placeholder:text-white bg-opacity-50 dark:bg-opacity-80 placeholder:text-black w-full outline-none px-2 py-1 rounded"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="Write your post here..."
          className="border w-full h-[400px] mb-2 p-2 outline-none border-none bg-zinc-700 text-white rounded resize-none"
          value={formData.body}
          onChange={handleInputChange}
        ></textarea>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="w-full border-none outline-none px-2 py-1 bg-zinc-600 text-white rounded"
            value={formData.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="postId"
            placeholder="Custom postId (optional)"
            className="w-full border-none outline-none px-2 py-1 bg-zinc-600 text-white rounded"
            value={formData.postId}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="genre"
          placeholder="Genres (separate with commas)"
          className="w-full mb-2 border-none outline-none px-2 py-1 bg-zinc-600 text-white rounded"
          value={formData.genre.join(", ")}
          onChange={handleGenreChange}
        />
        <button
          className={`font-semibold border border-red-500 bg-red-500 w-full py-2 text-white rounded transition-opacity ${
            isFormValid && !isLoading
              ? "hover:bg-red-600"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={handlePublish}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "Publishing..." : "PUBLISH"}
        </button>
        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 rounded text-red-700">
            {error}
          </div>
        )}
        {successMessage && postDetails && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded text-green-700">
            <p>{successMessage}</p>
            <p>Post ID: {postDetails.postId}</p>
            <p>Title: {postDetails.title}</p>
            <p>Author: {postDetails.author}</p>
            <p>Genres: {postDetails.genre.join(", ")}</p>
            <p>Secret Code: {postDetails.secretCode}</p>
          </div>
        )}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
          {recentPosts.length > 0 ? (
            <ul className="space-y-2">
              {recentPosts.map((post, index) => (
                <li key={index} className="bg-gray-100 p-3 rounded">
                  <span className="text-blue-600">{post.title}</span>
                  <p className="text-sm text-gray-600">
                    By {post.author} | Post ID: {post.postId} |{" "}
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent posts yet.</p>
          )}
        </section>
      </main>
    </BaseLayout>
  );
}
