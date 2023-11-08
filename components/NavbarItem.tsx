import React from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
      {label}
    </div>
  );
};

export default NavbarItem;
