import CardList from "@/components/common/CardList";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header />
      <h1>This is the Home page</h1>
      {/* When the add card button is clicked in the "Home" component, isModalOpen is set to true.  */}
      <button role="button" onClick={() => setIsModalOpen(true)}>
        Add user
      </button>
      <CardList />
      {/* When isModalOpen is set to true, the PostModal component shows up with a form */}
      {isModalOpen && (
        <PostModal
          addPerson={addPerson}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};
export default Home;


