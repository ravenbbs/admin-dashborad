import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [category, setCategory] = useState(assignedCategory || "");
  const [productProperties, setProductProperties] = useState(
    assignedProperties || {}
  );
  const [images, setImages] = useState(existingImages || []);
  const [categories, setCategories] = useState([]);
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  useEffect(() => {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
      console.log(result.data)
    });
  }, []);

  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
      images,
      category,
      properties: productProperties,
    };
    console.log(data.productProperties)
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
    const savingPromise = new Promise(async (resolve, reject) => {
      try {
        const files = ev.target?.files;
        if (files?.length > 0) {
          const data = new FormData();
          for (const file of files) {
            data.append("file", file);
          }
          const res = await axios.post("/api/upload", data);
          setImages((oldImages) => {
            return [...oldImages, ...res.data.links];
          });
          resolve();
        } else {
          reject(new Error("No files selected"));
        }
      } catch (error) {
        reject(error);
      }
    });
    await toast.promise(savingPromise, {
      loading: "Cargando ..",
      success: "Archivo subido con éxito!!",
      error: "Ocurrió un error intente mas tarde",
    });
  }

  function updateImagesOrder(images) {
    setImages(images);
  }

  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({_id}) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while(catInfo?.parent?._id) {
      const parentCat = categories.find(
        ({_id}) => _id === catInfo?.parent?._id);
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
    <form onSubmit={saveProduct} className="pl-3">
      <Toaster />
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
      <label>Categoría</label>
      <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
        <option value={""}>Sin Categoría</option>
        {categories.length > 0 && categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
      </select>

      {propertiesToFill.length > 0 &&
        propertiesToFill.map((p) => (
          <div className="" key={p.name} >
            <label>{p.name[0].toUpperCase() + p.name.substring(1)}</label>
            <div>
              <select
                value={productProperties[p.name]}
                onChange={(ev) => setProductProp(p.name, ev.target.value)}
              >
                {p.values.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
        
      <label>Fotos</label>
      <div>
        <ReactSortable
          className="mb-4 flex flex-wrap gap-3"
          list={images}
          setList={updateImagesOrder}
        >
          {!!images?.length &&
            images.map((link) => (
              <div key={link}>
                <img
                  className="rounded-md h-24"
                  src={link}
                  alt="Product Image"
                />
              </div>
            ))}
        </ReactSortable>
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
          <input
            type="file"
            className="hidden"
            multiple
            onChange={uploadImage}
          ></input>
        </label>
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
