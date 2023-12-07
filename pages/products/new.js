import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
export default function NewProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  async function createProduct(ev){
    ev.preventDefault();
    const data = {title, description, price}
    await axios.post('/api/products', data)
    setGoToProducts(true)
  }
  if(goToProducts){
    router.push('/products')
  }
  

  return (
    <Layout>
      <form onSubmit={createProduct}>

      
      <h1>Nuevo Producto</h1>
      <label>Nombre del producto</label>
      <input
        type="text"
        placeholder="Escribe el nombre producto aqui..."
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      ></input>
      <label>Descripción</label>
      <textarea placeholder="Escribe la descripción de el producto aqui..."
      value={description}
      onChange={ev => setDescription(ev.target.value)}></textarea>
      <label>Precio USD</label>
      <input value={price}
        onChange={ev => setPrice(ev.target.value)} type="number" placeholder="Ingresa el precio en USD"></input>
      <button type="submit" className="btn-primary">Guardar</button>
      </form>
    </Layout>
  );
}
