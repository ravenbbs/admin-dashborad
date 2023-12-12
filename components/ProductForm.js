import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";


export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images,
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
      await axios.put("/api/products", { ...data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }

    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }

  async function uploadImage(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append('file', file);
      }
      const res = await axios.post('/api/upload', data);
      // const res = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: data,
      // });
      console.log(res);
    }
  }

  return (
    <form onSubmit={saveProduct} className="pl-3" >
      <label>Nombre del producto</label>
      <input
        type="text"
        placeholder="Escribe el nombre producto aqui..."
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        required={true}
      ></input>
      <label>Descripción</label>
      <textarea
        required={true}
        placeholder="Escribe la descripción de el producto aqui..."
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      ></textarea>
      <label>Fotos</label>
      <div className="mb-4">
        <label className="cursor-pointer text-gray-500 bg-gray-100 border rounded-md w-24 h-24 flex justify-center items-center flex-col gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <input type="file" className="hidden" onChange={uploadImage}></input>
        </label>
        {!images?.length && "Este producto no tiene fotos"}
      </div>
      <label>Precio USD</label>
      <input
        required={true}
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
