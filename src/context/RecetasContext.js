import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [recetas, setRecetas] =useState([])
  const [consultar, guardarConsultar]= useState(false)

  useEffect(()=>{
    if(consultar){  
      const obtenerRecetas = async ()=>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;
        const recetas = await axios.get(url)
        setRecetas(recetas.data.drinks);
      }
      obtenerRecetas()
    }
    //eslint-disable-next-line
  },[busqueda])

  return ( 
    <RecetasContext.Provider
      value={{
        recetas,
        setBusqueda,
        guardarConsultar
      }}
    >
      {props.children}
    </RecetasContext.Provider>
   );
}
 
export default RecetasProvider;