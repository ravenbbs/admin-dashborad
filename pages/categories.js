import Layout from "@/components/Layout";
import { Category } from "@/lib/models/Category";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function Categories({ swal }) {
  const [name, setName] = useState("");
  const [editedCategory, setEditedCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }

  async function saveCategory(ev) {
    ev.preventDefault();
    const data = {
      name,
      parentCategory,
      properties: properties.map((p) => ({
        name: p.name,
        values: p.values.split(","),
      })),
    };

    if (editedCategory) {
      data._id = editedCategory._id;
      await axios.put("/api/categories", data);
      setEditedCategory(null);
    } else {
      await axios.post("/api/categories", { ...data });
    }
    setName("");
    setParentCategory("");
    setProperties("");
    fetchCategories();
  }

  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
    setProperties(
      category.properties.map(({ name, values }) => ({
        name,
        values: values.join(","),
      }))
    );
  }
  function deleteCategory(category) {
    swal
      .fire({
        title: "Estas seguro?",
        text: `Quieres eliminar ${category.name}?`,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, eliminar!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { _id } = category;
          await axios.delete("/api/categories?_id=" + _id);
          fetchCategories();
        }
      });
  }
  function addProperty() {
    setProperties((prev) => {
      return [...prev, { name: "", values: "" }];
    });
  }
  function handlePropertyNameChange(index, property, newName) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].name = newName;
      return properties;
    });
  }
  function handlePropertyValuesChange(index, property, newValues) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].values = newValues;
      return properties;
    });
  }
  function removeProperty(indexToRemove) {
    setProperties((prev) => {
      return [...prev].filter((p, pIndex) => {
        return pIndex !== indexToRemove;
      });
    });
  }

  return (
    <Layout>
      <h1>Categorías</h1>
      <label>
        {editedCategory
          ? `Editar categoría ${editedCategory.name}`
          : "Nueva Categoría"}
      </label>
      <form onSubmit={saveCategory}>
        <div className="flex gap-2">
          <input
            onChange={(ev) => setName(ev.target.value)}
            value={name}
            className="mb-0 py-2"
            type="text"
            placeholder="Ingresa el nombre de la categoría"
            required
          ></input>
          <select
            className="mb-0 py-2"
            onChange={(ev) => setParentCategory(ev.target.value)}
            value={parentCategory}
          >
            <option value>Categoría principal </option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Propiedades</label>
          <button type="button" onClick={addProperty} className="btn-primary">
            Agregar
          </button>
          {properties &&
            properties.map((property, index) => (
              <div className="flex gap-2 mb-4" key={index}>
                <input
                  className="mb-0"
                  type="text"
                  onChange={(ev) =>
                    handlePropertyNameChange(index, property, ev.target.value)
                  }
                  value={property.name}
                  placeholder="Nombre propiedad"
                />
                <input
                  className="mb-0"
                  onChange={(ev) =>
                    handlePropertyValuesChange(index, property, ev.target.value)
                  }
                  type="text"
                  value={property.values}
                  placeholder="Valores, separados por coma"
                />
                <button
                  type="button"
                  onClick={() => removeProperty(index)}
                  className="bg-red-600 text-white px-2 rounded-md"
                >
                  Eliminar
                </button>
              </div>
            ))}
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          {editedCategory && (
            <button
              type="button"
              onClick={() => {
                setEditedCategory(null);
                setName("");
                setParentCategory("");
                setProperties([])
              }}
              className="btn-red"
            >
              Cancelar{" "}
            </button>
          )}

          <button type="submit" className="btn-default">
            Guardar
          </button>
        </div>
      </form>
      <hr />
      {!editedCategory && (
        <table className="basic mt-4">
          <thead>
            <tr>
              <td>Categorías Existentes</td>
              <td>Categoría Principal</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.name}>
                <td>{category.name}</td>
                <td>{category?.parent?.name}</td>
                <td className="flex gap-2">
                  <button
                    className="btn-default flex gap-1"
                    onClick={() => editCategory(category)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Editar
                  </button>
                  <button
                    onClick={() => deleteCategory(category)}
                    className="btn-red flex gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }, ref) => <Categories swal={swal} />);
