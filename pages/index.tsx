import React from "react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import InfoModal from "@/components/InfoModal";
import useMovieList from "@/hooks/useMovieList";
import useInfoModal from "@/hooks/useInfoModal";
import Footer from "@/components/Footer";

const Home = () => {
  const { data: movies = [] } = useMovieList();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40 pt-10">
        <MovieList title="Wuthering Waves PV" data={movies} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
