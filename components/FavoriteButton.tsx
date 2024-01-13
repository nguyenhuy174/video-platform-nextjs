import React, { useState } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const Icon = isFavorite ? CheckIcon : PlusIcon;

  const toggleFavorites = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div
      onClick={toggleFavorites}
      className="
        cursor-pointer 
        group/item 
        w-6 
        h-6 
        lg:w-10 
        lg:h-10 
        border-white 
        border-2 
        rounded-full 
        flex 
        justify-center 
        items-center 
        transition 
        hover:border-purple-400"
    >
      <Icon className="text-white group-hover/item:text-purple-400 w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
