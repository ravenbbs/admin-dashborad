import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

export default function NewProducts() {
  return (
    <Layout>
      <h1>Nuevo Producto</h1>

      <ProductForm {...productInfo} />
    </Layout>
  );
}
