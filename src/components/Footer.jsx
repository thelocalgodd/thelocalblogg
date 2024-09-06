const Footer = () => {
  return (
    <footer className="text-sm flex justify-between border-t border-blue-400 pt-2">
      <div>
        <p>&copy; {new Date().getFullYear()} ~ thelocalgodd</p>
        <p>all rights not reserved.</p>
      </div>
      <div>
        <p className="flex flex-col text-right">
          source:{" "}
          <a
            className="underline text-red-400"
            href="https://github.com/thelocalgodd/thelocalblogg"
          >
            thelocalgodd/thelocalblogg
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
