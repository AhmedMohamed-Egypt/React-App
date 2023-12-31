import { useEffect, useState } from "react";

function FetchData(link) {
  const [currency,setCurrency] = useState([])
  const [meals, setMeals] = useState([]);
  
  const [error, setError] = useState("");
  const [isLoading,setIsloading] = useState(false)
  useEffect(() => {
    async function getData() {
      try {
        setIsloading(true)
        const res = await fetch(`${link}`);
        const data = await res.json();
        if (res.ok) {
          setMeals(data);
          setCurrency(data)
        } else {
          throw new Error("Error Conection");
        }
      } catch (error) {
        setError(error.message);
      }
      setIsloading(false)
    }
    getData();
  }, []);

  return { meals,currency , error,isLoading };
}
export { FetchData };