import { useState, useEffect } from "react";
import axios from "axios";

function useCharacter(url, watchlist) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);
    const getData = () => {
        setLoading(true);
        axios
         .get(url)
         .then((response) => {
            setData(response.data.results);
            setLoading(false);
            
         })
         .catch((error)=>{
            setError(error);
            setLoading(false);
         })
    }

    useEffect(() => {
        getData();
    },[...watchlist]);
  return {data, loading, error};
}
export default useCharacter;