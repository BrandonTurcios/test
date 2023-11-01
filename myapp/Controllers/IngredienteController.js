const Ingrediente = require("../Models/IngredienteSchema")

const createIngrediente = (req,res) =>
{
    const ingrediente = new Ingrediente(
        {
          sku: req.body.sku,
          nombre: req.body.nombre,
          cantidad:req.body.cantidad,
          fecha_vencimiento:req.body.fecha_vencimiento,
          fecha_compra:req.body.fecha_compra,
          precio:req.body.precio,
          marca:req.body.marca
        }
    );

    try{
        
        const createdIngrediente= ingrediente.save();
        res.status(201).json(ingrediente);
    }catch(error)
    {
        res.send(error)
    }
}



const updateIngrediente = async (req, res) => {
  const skuIngrediente = req.params.sku; // Assuming you pass the SKU in the URL parameters
  const updateData = req.body;

  try {
    const ingrediente = await Ingrediente.findOne({ sku: skuIngrediente });

    if (!ingrediente) {
      return res.status(404).json({ error: "Ingrediente no encontrado" });
    }
    if (updateData.sku) ingrediente.sku = updateData.sku;
    if (updateData.nombre) ingrediente.nombre = updateData.nombre;
    if (updateData.cantidad) ingrediente.cantidad = updateData.cantidad;
    if (updateData.fecha_vencimiento) ingrediente.fecha_vencimiento = updateData.fecha_vencimiento;
    if (updateData.fecha_compra) ingrediente.fecha_compra = updateData.fecha_compra;
    if (updateData.precio) ingrediente.precio = updateData.precio;
    if (updateData.marca) ingrediente.marca = updateData.marca;

    // Save the updated ingredient
    const updatedIngrediente = await ingrediente.save();

    res.status(200).json(updatedIngrediente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteIngrediente = async (req, res) => {
  const skuIngrediente = req.params.sku; // Assuming you pass the SKU in the URL parameters

  try {
    const ingrediente = await Ingrediente.findOneAndDelete({ sku: skuIngrediente });

    if (!ingrediente) {
      return res.status(404).json({ error: "Ingrediente no encontrado" });
    }

    res.status(200).json({ message: "Ingrediente eliminado con éxito" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
    createIngrediente, 
    updateIngrediente,
    deleteIngrediente
  };