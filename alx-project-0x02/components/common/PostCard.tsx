import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="rounded-lg border p-4 mt-6">
      <div className="flex flex-row items-center justify-between ">
        <p className="font-bold">{title}</p>
        <p className="py-2 px-4 rounded-full bg-green-700 text-base">
          {userId}
        </p>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default PostCard;
