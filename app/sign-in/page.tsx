"use client";
import Loader from "@/components/Loader";
import LoginFacebook from "@/components/LoginFacebook";
import LoginGithub from "@/components/LoginGithub";
import LoginGoogle from "@/components/LoginGoogle";
import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // console.log(isLoading);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-full flex mt-20 justify-center">
      <div className="flex flex-col w-[400px]">
        <h1 className="text-4xl w-full text-center font-semibold mb-10">
          Sign In
        </h1>
        <LoginGoogle />
        <LoginGithub />
        <LoginFacebook />
      </div>
    </div>
  );
};

export default Page;
