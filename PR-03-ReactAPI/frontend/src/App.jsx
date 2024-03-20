import { Toaster } from "react-hot-toast";
import "./App.css";
// import { useCustomReactQuery } from "./hooks/hooks";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function App() {
  // const { products } = useCustomReactQuery("/api/products"); // Use array destructuring
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request cancelled", error.message);
          return;
        }
        setError(true);
        toast.error("Something went wrong!");
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]); // Add urlPath to dependency array

  useEffect(() => {
    if (loading) {
      toast.loading("Loading data...");
    } else {
      toast.dismiss(); // Dismiss any active toasts when loading is finished
    }
  }, [loading]);

  return (
    <>
      <h2>API</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Total products are : {products.length}</p>
      <Toaster />
    </>
  );
}

export default App;
