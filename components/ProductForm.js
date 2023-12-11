import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    if (_id) {
      //update
      await axios.put("/api/products", {...data,_id});
      
    } else {
      //create
      await axios.post("/api/products", data);
    }      
    
     setGoToProducts(true);

  }
  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={saveProduct} className="pl-3">
      <label>Nombre del producto</label>
      <input
        type="text"
        placeholder="Escribe el nombre producto aqui..."
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      ></input>
      <label>Descripción</label>
      <textarea
        placeholder="Escribe la descripción de el producto aqui..."
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      ></textarea>
      <label>Precio USD</label>
      <input
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
        type="number"
        placeholder="Ingresa el precio en USD"
      ></input>
      <button type="submit" className="btn-primary">
        Guardar
      </button>
    </form>
  );
}
