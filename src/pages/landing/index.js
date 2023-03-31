import React, { useEffect, useState } from "react";
import Layout from "../../components/backbone";
import NavBar from "../../components/topbar";
import { getProducts } from "../../services/products";

export default function EntryPage() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Get books from API
  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getProducts().then((products) => {
      if (mounted) {
        setProducts(products);
        setIsLoading(false);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Layout>
      <NavBar />
      {isLoading ? <p>Loading ...</p> : <p>index</p>}
    </Layout>
  );
}
