import Header from "@/components/layout/Header";
import { PostCardProps, PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC<PostCardProps> = ({ posts }) => {
  return (
    <>
      <div>
        <Header />
        <h1>This is the Posts page</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-[600px]:grid-cols-1 gap-4">
          {posts.map((post, key) => (
            <PostCard
              title={post.title}
              content={post.content}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
    id: post.id,
  }));

  return {
    props: { posts },
  };
}

export default Posts;
