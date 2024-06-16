// frontend/src/redux/actions.ts
import axios from "axios";

export const fetchData =async (dataType) =>{
  const response = await axios.get(`http://localhost:3000/api/data/${dataType}`);
  console.log("fetched "+`FETCH_${dataType.toUpperCase()}`,response.data)

  // await dispatch({ type: `FETCH_${dataType.toUpperCase()}`, payload: response.data });
  return response.data;
};
