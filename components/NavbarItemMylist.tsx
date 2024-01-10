import React from "react";

import { useRouter } from "next/router";

interface NavbarItemMylistProps {
  label: string;
  active?: boolean;
}

const NavbarItemMylist: React.FC<NavbarItemMylistProps> = ({ label }) => {
  const router = useRouter();

  const handleLabelClick = () => {
    router.push("/favorites");
  };
  return (
    <div
      onClick={handleLabelClick}
      className="text-gray-200 hover:text-purple-400 cursor-pointer"
    >
      {label}
    </div>
  );
};

export default NavbarItemMylist;
