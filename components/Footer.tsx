import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row items-center justify-between p-4">
      <div className="mb-4 lg:mb-0 lg:mr-4">
        <img
          src="/images/footer-left.png"
          className="h-60 w-auto"
          alt="Footer Left Image"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/images/logo.png"
          className="h-10 w-auto"
          alt="Image Center"
        />
      </div>
      <div>
        <img
          src="/images/footer-right.png"
          className="h-60 w-auto"
          alt="Footer Right Image"
        />
      </div>
    </footer>
  );
};

export default Footer;
