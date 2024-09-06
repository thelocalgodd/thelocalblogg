import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="w-full h-screen items-center">
      <p className="text-center"> oops {":-("}</p>
      <p className="text-center">page not found</p>
      <div className="text-center underline">
        <Link to="/" className="text-red-300 items-center">
          home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
