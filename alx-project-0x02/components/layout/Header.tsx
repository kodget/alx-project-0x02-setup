import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>This is the header section</h1>
      <div className="grid grid-cols-2 place-content-between">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
