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
  const ingredientId = req.params.id;
  const updateData = req.body; 

  try {
    const ingredient = await Ingrediente.findById(ingredientId);

    if (!ingredient) {
      return res.status(404).json({ error: "Ingredient not found" });
    }


    if (updateData.sku) ingredient.sku = updateData.sku;
    if (updateData.nombre) ingredient.nombre = updateData.nombre;
    if (updateData.cantidad) ingredient.cantidad = updateData.cantidad;
    if (updateData.fecha_vencimiento) ingredient.fecha_vencimiento = updateData.fecha_vencimiento;
    if (updateData.fecha_compra) ingredient.fecha_compra = updateData.fecha_compra;
    if (updateData.precio) ingredient.precio = updateData.precio;
    if (updateData.marca) ingredient.marca = updateData.marca;

    const updatedIngredient = await ingredient.save();

    res.status(200).json(updatedIngredient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
    createIngrediente,
    updateIngrediente
  };