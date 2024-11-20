"use client";
import { useState } from "react";
import Loader from "./Loader";
import { logout } from "@/actions/auth";

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true); // Activate the loader
    setTimeout(() => {
      logout();
      console.log("Logged out successfully"); // Simulated logout logic
      setIsLoading(false); // Disable the loader
    }, 3000); // Simulate logout delay of 3000ms
  };

  // if (isLoading) {
  //   return <Loader />; // Show loader during simulated logout
  // }

  return (
    <div onClick={handleLogout}>
      <button
        type="submit"
        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-red-700 hover:bg-red-50 text-md font-medium"
        role="menuitem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        Logout
      </button>
    </div>
  );
};

export default Logout;
