import React from "react";
import Navbar from "@/components/Navbar";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

const Home = () => {
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pt-24">
      </div>
    </>
  );
};

export default Home;
