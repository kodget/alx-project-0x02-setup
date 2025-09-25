import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import { UserCardProps, UserProps } from "@/interfaces";
import UserCard from "@/components/common/PostCard";

const About: React.FC<UserCardProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div>This is the About page</div>
      <div className="flex flex-row justify-center items-center gap-4">
        <Button size="px-2 py-1 text-sm" shape="rounded-sm" title="small" />
        <Button size="px-4 py-2 text-base" shape="rounded-md" title="medium" />
        <Button size="px-6 py-3 text-lg" shape="rounded-full" title="large" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
        {posts?.map((user: UserProps) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default About;
