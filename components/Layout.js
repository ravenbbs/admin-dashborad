import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { Roboto } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <Toaster />

        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white rounded-md px-4 py-2 font-semibold "
          >
            Ingresa Con Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        Test
      </button>
      <div className="bg-bgGray w-screen font-bold tracking-wide flex	">
        <Nav />
        <div className="bg-white flex-grow rounded-lg my-2 mr-2 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
