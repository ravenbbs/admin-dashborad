import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

export default function Products(){

  useEffect(() => {
    axios.get('/products').then(response =>{
      console.log(response.data);
    })
  })

  return (
    <Layout>
      <Link className="bg-green-200 p-1 px-2 rounded-md" href={'/products/new'}>Agregar nuevo Producto</Link>

    </Layout>
  )
}