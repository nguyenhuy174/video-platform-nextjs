import React from "react";
import { useRouter } from "next/router";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  const router = useRouter();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white cursor-pointer hover:text-purple-400">
          <a
            href="https://wutheringwaves.kurogames.com/en/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
        </div>
        <div className="px-3 text-center text-white cursor-pointer hover:text-purple-400">
          <a
            href="https://www.youtube.com/@wutheringwaves3352/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Youtube
          </a>
        </div>
        <div className="px-3 text-center text-white cursor-pointer hover:text-purple-400">
          <a
            href="https://x.com/Wuthering_Waves"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official X
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
