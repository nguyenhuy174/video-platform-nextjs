import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  BellIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import AccountMenu from "@/components/AccountMenu";
import MobileMenu from "@/components/MobileMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const goToHomePage = useCallback(() => {
    router.push("/");
    router.reload();
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img
          src="/images/logo.png"
          className="h-7 lg:h-10 cursor-pointer transition"
          alt="Logo"
          onClick={goToHomePage}
        />
        <div className="text-xl flex-row ml-16 gap-7 hidden lg:flex">
          <a
            href="https://wutheringwaves.kurogames.com/en/main"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-400 cursor-pointer transition"
          >
            Official Website
          </a>
          <a
            href="https://www.youtube.com/@wutheringwaves3352/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-400 cursor-pointer transition"
          >
            Official Youtube
          </a>
          <a
            href="https://x.com/Wuthering_Waves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-400 cursor-pointer transition"
          >
            Official X
          </a>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <Bars3Icon
            className={`w-7 text-white fill-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-purple-400 cursor-pointer transition">
            <BellIcon className="w-6" />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default.png" alt="" />
            </div>
            <ChevronDownIcon
              className={`w-5 text-white fill-white transition hover:text-purple-400 ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
