import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-950 flex justify-between">
        <h2>Bienvenido, {session?.user?.name}</h2>
        <div className="flex items-center gap-4 pr-2 bg-slate-200 rounded-md overflow-hidden border  ">
          <img
            src={session?.user?.image}
            alt="Avatar"
            className="w-8 h-8"
          ></img>{session?.user?.name}
        </div>
      </div>
    </Layout>
  );
}
