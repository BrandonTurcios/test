const AllPizza = require("../Models/PizzaSchema")

const createPizza = (req,res) =>
{
    const pizza = new AllPizza(
        {
            nombre : req.body.nombre,
            precio: req.body.precio,
            sku: req.body.sku,
            ingredientes: req.body.ingredientes,
            tamaño: req.body.tamaño
        }
    );

    try{
        
        const createdPizza = pizza.save();
        res.status(201).json(pizza);
    }catch(error)
    {
        res.send(error)
    }
}

const updatePizza = async (req, res) => {
    const skuPizza = req.params.sku; // Assuming you pass the SKU in the URL parameters
    const updateData = req.body;
  
    try {
      const pizza = await AllPizza.findOne({ sku: skuPizza});
  
      if (!pizza) {
        return res.status(404).json({ error: "Pizza no encontrada" });
      }
      if (updateData.nombre) pizza.nombre = updateData.nombre;
      if (updateData.precio) pizza.precio = updateData.precio;
      if (updateData.ingredientes) pizza.ingredientes = updateData.ingredientes;
      if (updateData.sku) pizza.sku = updateData.sku;
      if (updateData.tamaño) pizza.tamaño = updateData.tamaño;
  
      // Save the updated ingredient
      const updatedPizza = await pizza.save();
  
      res.status(200).json(updatedPizza);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const deletePizza = async (req, res) => {
    const skuPizza = req.params.sku; // Assuming you pass the SKU in the URL parameters
  
    try {
      const pizza = await AllPizza.findOneAndDelete({ sku: skuPizza });
  
      if (!pizza) {
        return res.status(404).json({ error: "Pizza no encontrada" });
      }
  
      res.status(200).json({ message: "Pizza eliminada con éxito" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getAllPizza = async (req, res) => {
    try {
    
      const pizza = await AllPizza.find(); 
  
      if (!pizza) {
        return res.status(404).json({ error: 'No se ha encontrado ninguna pizza' });
      }
  
      res.status(200).json(pizza);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    createPizza,
    updatePizza,
    deletePizza,
    getAllPizza
  };