import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>This is the header section</h1>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Header;
