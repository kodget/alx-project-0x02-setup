import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({
  title,
  content,
  initColor,
  hoverColor,
}) => {
  return (
    <div className="rounded-lg bg-amber-50 shadow-[0_4px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_15px_rgba(0,0,0,0.25)] transition-all suration-300">
      <h1
        className={`p-6 ${initColor} m-auto  text-lg ${hoverColor} transition-all duration-300 uppercase text-white font-bold`}
      >
        {title}
      </h1>
      <p className="p-6 font-medium text-neutral-800 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default Card;
