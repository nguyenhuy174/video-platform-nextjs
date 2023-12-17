import React from "react";
import { useRouter } from "next/router";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  const router = useRouter();

  const handleHomeClick = () => {
    // Chuyển hướng đến trang chủ
    router.push("/");
  };

  const handleFavoriteClick = () => {
    // Chuyển hướng đến trang danh sách yêu thích
    router.push("/favorites");
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div
          className="px-3 text-center text-white hover:underline"
          onClick={handleHomeClick}
        >
          Trang chủ
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Phim bộ
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Phim lẻ
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Phim mới
        </div>
        <div
          className="px-3 text-center text-white hover:underline"
          onClick={handleFavoriteClick}
        >
          Danh sách yêu thích
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
