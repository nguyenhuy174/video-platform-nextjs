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
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-yellow-500 text-2xl mb-4">
          Oops! Chức năng này vẫn đang phát triển
        </p>
        <p className="text-yellow-500 text-3xl font-bold">:&#60;</p>
      </div>
    </>
  );
};

export default Home;
