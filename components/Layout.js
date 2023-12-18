import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Layout({ children }) {
const [showNav, setShowNav] = useState(false)

  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-bgGray flex items-center">
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
      <button onClick={() => setShowNav(true)} className="mt-4 ml-4 md:absolute md:invisible ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        
      </button>
      <div className="bg-bgGray font-bold tracking-wide flex	">
        <Nav show={showNav} />
        <div className="bg-white flex-grow rounded-lg my-2 mr-2 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
