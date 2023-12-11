import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { Roboto } from "next/font/google";


export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-600 w-screen h-screen flex items-center">
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
    <div className="bg-blue-900 w-screen min-h-screen font-bold tracking-wide flex	">
      <Nav />
      <div className="bg-white flex-grow rounded-lg my-2 mr-2 p-4">
      {children}

      </div>
    </div>
  );
}