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

module.exports = {
    createPizza,
  };