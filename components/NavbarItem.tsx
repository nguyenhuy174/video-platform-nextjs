import React from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition border border-transparent hover:border-gray-300 rounded-md">
      {label}
    </div>
  );
};

export default NavbarItem;
