import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="border-b border-gray-300 bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link href={"/"} className="font-semibold">
          Home
        </Link>
        <div className="flex items-center gap-x-5">
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/add-new"}>Add New</Link>
        </div>
        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link href={"/sign-in"}>
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                Sign In
              </div>
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-x-4 text-base">
                {session.user.name}
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    width={35}
                    height={35}
                    alt="user-image"
                    className="rounded-full"
                  />
                )}
              </div>
              <Logout />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
