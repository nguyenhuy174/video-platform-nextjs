import React from "react";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const IconSearch: React.FC = () => {
  const router = useRouter();

  const handleLabelClick = () => {
    router.push("/search-result");
  };
  return (
    <div
      onClick={handleLabelClick}
      className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
    >
      <MagnifyingGlassIcon className="w-6" />
    </div>
  );
};

export default IconSearch;
