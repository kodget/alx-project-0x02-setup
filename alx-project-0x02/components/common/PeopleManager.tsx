import { useState } from "react";
import PostModal from "./PostModal";
import { Person } from "@/interfaces";

const PeopleManager: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPerson = (newPerson: Person) =>
    setPeople((prev) => [...prev, newPerson]);
  const removePerson = (id: string) =>
    setPeople((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add Person
      </button>

      <PostModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        addPerson={addPerson}
      />

      <ul className="space-y-2">
        {people.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between p-2 bg-gray-100 rounded"
          >
            <div>
              <div className={`font-medium ${p.initColor}`}>{p.name}</div>
              <div className="text-sm">{p.description}</div>
            </div>
            <button
              onClick={() => removePerson(p.id)}
              className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleManager;
