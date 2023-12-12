import Layout from "@/components/Layout";
import { Category } from "@/lib/models/Category";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories(){
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('/api/categories').then(result => {
      setCategories(result.data)
    })
  }, [])
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
      <input onChange={ev => setName(ev.target.value)} value={name} className="mb-0 py-2" type="text" placeholder="Ingresa el nombre de la categoría" required></input>
      <button className="block btn-primary">Guardar</button>
      </form>
      <table className="basic mt-4">
        <thead >
          <tr>
            <td>Categorías Existentes</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.name}>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}