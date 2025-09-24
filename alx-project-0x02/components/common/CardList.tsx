import { CARDLIST } from "@/constants";
import Card from "./Card";

export default function CardList() {
  return (
    <>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-[600px]:grid-cols-1 gap-6 p-6">
        {CARDLIST.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
}
