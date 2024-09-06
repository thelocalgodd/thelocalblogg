import { NavLink } from "react-router-dom";

const Header = () => {
  const active = "text-blue-500";
  const inactive = "";
  return (
    <header className="flex flex-col items-center md:flex-row justify-between border-b mb-1 border-blue-500 pb-1">
      <NavLink to="/" className="font-semibold mt-4">
        thelocalblogg
      </NavLink>
      <nav>
        <ul className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            home
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            all posts
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            about
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
