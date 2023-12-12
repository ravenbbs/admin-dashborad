import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function Categories(){
  const [name, setName] = useState('');
  async function saveCategory(ev){
    ev.preventDefault()
  await axios.post('/api/categories', {name});
  setName('');
  }
  return (
    <Layout>
      <h1>Categorías</h1>
      <label>Nueva Categoría </label>
      <form className="flex gap-2 items-center" onSubmit={saveCategory}>
      <input onChange={ev => setName(ev.target.value)} value={name} className="mb-0 py-2" type="text" placeholder="Ingresa el nombre de la categoría"></input>
      <button className="block btn-primary">Guardar</button>
      </form>
    </Layout>
  )
}