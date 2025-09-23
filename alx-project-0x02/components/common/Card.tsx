import { CardProps } from "@/interfaces";
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div>
      <h1>This is the {title} component</h1>
      <p>{content}</p>
    </div>
  );
};

export default Card;
