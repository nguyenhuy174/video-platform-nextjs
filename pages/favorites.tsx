import React from "react";
import Navbar from "@/components/Navbar";
import InfoModal from "@/components/InfoModal";
import useMovieList from "@/hooks/useMovieList";
import useInfoModal from "@/hooks/useInfoModal";
import MovieList from "@/components/MovieList";

const Home = () => {
  const { isOpen, closeModal } = useInfoModal();
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pt-24">
        <MovieList title="Danh sách yêu thích" data={movies} />
      </div>
    </>
  );
};

export default Home;