import React from "react";

import { useRouter } from "next/router";

interface NavbarItemHomeProps {
  label: string;
  active?: boolean;
}

const NavbarItemHome: React.FC<NavbarItemHomeProps> = ({ label }) => {
  const router = useRouter();

  const handleLabelClick = () => {
    router.push("/");
  };
  return (
    <div
      onClick={handleLabelClick}
      className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
    >
      {label}
    </div>
  );
};

export default NavbarItemHome;
