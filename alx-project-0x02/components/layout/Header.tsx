import Link from "next/link";

const Header = () => {
  return (
    <div className="grid grid-cols-3 place-content-between p-6 bg-green-600 rounded-sm sticky top-0 z-50">
      <Link className="justify-self-start" href="/home">
        Home
      </Link>
      <Link className="justify-self-center" href="/about">
        About
      </Link>
      <Link className="justify-self-end" href="/posts">
        Posts
      </Link>
    </div>
  );
};

export default Header;
