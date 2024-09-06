import BaseLayout from "../layout/BaseLayout";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <BaseLayout>
      <div>
        <img
          src="/thelocalblogg.svg"
          alt=""
          className="bg-slate-400 rounded-lg p-4 mt-4"
        />
      </div>
      <div className="my-2">
        <p>simple blogging site ~ thelocalblogg</p>
        <div>
          <p className="text-red-300 mt-2">how to use</p>
          <p>
            1. head to{" "}
            <Link to="/" className="underline">
              homepage
            </Link>
            . <br />
            2. type in some text and create a new post. <br />
            3. You will get your post link and a code to edit/delete the post if
            neccessary
          </p>
        </div>
        <div>
          <p className="text-red-300 mt-2">viewing all posts</p>
          <p>
            * all posts can be viewed at the{" "}
            <Link to="/posts" className="underline">
              posts
            </Link>{" "}
            section
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
