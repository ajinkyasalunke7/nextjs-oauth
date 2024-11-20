import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";

const Header = async () => {
  const session = await auth();
  return (
    <nav className="bg-white shadow-md rounded-full p-4 mx-4 mt-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-white font-bold text-lg p-2 rounded-full w-50">
          <Image width={100} height={40} alt="" src={"/next.svg"} />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="text-gray-700 text-lg hover:text-blue-500 transition duration-200 font-semibold"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray- text-lg hover:text-blue-500 transition duration-200 font-semibold"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-gray-700 text-lg hover:text-blue-500 transition duration-200 font-semibold"
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-gray-700 text-lg hover:text-blue-500 transition duration-200 font-semibold"
        >
          Contact
        </Link>
      </div>

      {/* Sign In Button */}
      <div>
        {!session?.user ? (
          <Link
            href="/sign-in"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </Link>
        ) : (
          <div className="flex items-center gap-x-4 text-base">
            <span className="text-md font-medium">{session.user.name}</span>
            {session.user.image && (
              <Image
                src={session.user.image}
                width={35}
                height={35}
                alt="user-image"
                className="rounded-full"
              />
            )}
            <Logout />
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="p-2 bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
