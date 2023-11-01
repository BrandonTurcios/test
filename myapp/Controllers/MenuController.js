const AllMenu = require("../Models/MenuSchema")

const createMenu = (req,res) =>
{
    const menu = new AllMenu(
        {
            
            sku: req.body.sku,
            nombre : req.body.nombre,
            combo:req.body.combo,
            precio: req.body.precio,
           
        }
    );

    try{
        
        const createdMenu = menu.save();
        res.status(201).json(menu);
    }catch(error)
    {
        res.send(error)
    }
}

module.exports = {
    createMenu,
  };