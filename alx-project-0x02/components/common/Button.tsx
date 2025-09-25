import { type ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {
  return (
    <button className={`p-4 bg-green-800 text-white ${size} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
