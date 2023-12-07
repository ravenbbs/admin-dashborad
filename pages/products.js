import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products(){
  return (
    <Layout>
      <Link className="bg-green-200 p-1 px-2 rounded-md" href={'/products/new'}>Agregar nuevo Producto</Link>

    </Layout>
  )
}