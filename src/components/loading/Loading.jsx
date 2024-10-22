import React from "react";
import appLogo from "../../assets/logo-icon.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="relative flex items-center justify-center">
        {/* Spinning circular border */}
        <div className="w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 border-t-2 md:border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin absolute"></div>

        {/* App Logo in the center */}
        <img
          src={appLogo}
          alt="Loading..."
          className="w-12 h-12 md:w-16 md:h-16 z-10"
        />
      </div>
    </div>
  );
};

export default Loading;
