import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const useCustomReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        toast.error("Something went wrong!");
        setLoading(false);
      }
    })();
  }, [urlPath]); // Add urlPath to dependency array

  useEffect(() => {
    if (loading) {
      toast.loading("Loading data...");
    } else {
      toast.dismiss(); // Dismiss any active toasts when loading is finished
    }
  }, [loading]);

  return { products, error, loading }; // Return an array
};
