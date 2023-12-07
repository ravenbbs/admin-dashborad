import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";

export default function NewProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Layout>
      <h1>Nuevo Producto</h1>
      <label>Nombre del producto</label>
      <input
        type="text"
        placeholder="Escribe el nombre producto aqui..."
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      ></input>
      <label>Descripción</label>
      <textarea placeholder="Escribe la descripción de el producto aqui..."></textarea>
      <label>Precio USD</label>
      <input type="number" placeholder="Ingresa el precio en USD"></input>
      <button className="btn-primary">Guardar</button>
    </Layout>
  );
}
