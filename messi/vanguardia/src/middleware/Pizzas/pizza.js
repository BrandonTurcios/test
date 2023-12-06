import axios from "axios";

const getValuesPizza = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_URLAPI);
    console.log(response.data); // Muestra los datos en la consola para verificar
    return response.data; // Devuelve directamente los datos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Lanza el error para que el componente Pizzas pueda manejarlo
  }
};

export default getValuesPizza;
