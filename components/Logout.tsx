"use client";
import { useState } from "react";
import Loader from "./Loader";

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true); // Activate the loader
    setTimeout(() => {
      console.log("Logged out successfully"); // Simulated logout logic
      setIsLoading(false); // Disable the loader
    }, 3000); // Simulate logout delay of 3000ms
  };

  if (isLoading) {
    return <Loader />; // Show loader during simulated logout
  }

  return (
    <div
      onClick={handleLogout}
      className="bg-gray-600 text-white text-sm px-4 py-2 rounded-md cursor-pointer"
    >
      Logout
    </div>
  );
};

export default Logout;
