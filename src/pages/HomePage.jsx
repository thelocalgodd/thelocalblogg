import { useState } from "react";
import BaseLayout from "../layout/BaseLayout";

export default function HomePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [backlink, setBacklink] = useState("");
  const [tags, setTags] = useState("");
  const [postLink, setPostLink] = useState("");
  const [editDeleteCode, setEditDeleteCode] = useState("");

  const handlePublish = () => {
    // Here you would typically make an API call to create the post
    // For this example, we'll simulate it with a random link and code
    const newPostLink = `https://thelocalblogg.com/posts/${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    const newEditDeleteCode = Math.random()
      .toString(36)
      .substr(2, 6)
      .toUpperCase();

    setPostLink(newPostLink);
    setEditDeleteCode(newEditDeleteCode);
  };

  return (
    <BaseLayout>
      <main>
        <p className="text-lg mb-1">create a new post</p>
        <input
          type="text"
          placeholder="add post title"
          className="border-none mb-1 bg-blue-300 dark:bg-green-700 dark:placeholder:text-white bg-opacity-50 dark:bg-opacity-80 placeholder:text-black w-full outline-none px-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="blog-post"
          id="blog-post"
          placeholder="body"
          className="border w-full h-[400px] my-0.5 p-2 outline-none border-none bg-zinc-700 mx-auto"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div className="flex gap-0.5">
          <input
            type="text"
            placeholder="author"
            className="w-full border-none my-0.5 outline-none px-2 bg-zinc-600"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="custom backlink"
            className="w-full border-none my-0.5 outline-none px-2 bg-zinc-600"
            value={backlink}
            onChange={(e) => setBacklink(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-0.5 md:mb-1">
          <input
            type="text"
            placeholder="tags, (separate with commas)"
            className="w-full my-0.5 border-none outline-none px-2 bg-zinc-600"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button
            className="font-semibold border border-red-500 bg-red-500 w-[100%] md:w-[50%] my-0.5 mb-2 md:mb-1 md:my-1 text-white"
            onClick={handlePublish}
          >
            PUBLISH
          </button>
        </div>
        {postLink && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
            <p>Your post has been published!</p>
            <p>
              Post link:{" "}
              <a href={postLink} className="text-blue-600 hover:underline">
                {postLink}
              </a>
            </p>
            <p>
              Edit/Delete Code:{" "}
              <span className="font-mono bg-gray-200 px-1">
                {editDeleteCode}
              </span>
            </p>
          </div>
        )}
      </main>
    </BaseLayout>
  );
}
