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

const updateMenu = async (req, res) => {
    const skuMenu = req.params.sku; 
    const updateData = req.body;
  
    try {
      const menu = await AllMenu.findOne({ sku: skuMenu});
  
      if (!menu) {
        return res.status(404).json({ error: "Menu no encontrado" });
      }

      if (updateData.sku) menu.sku = updateData.sku;
      if (updateData.nombre) menu.nombre = updateData.nombre;
      if (updateData.combo) menu.combo = updateData.combo;
      if (updateData.precio) menu.precio = updateData.precio;
      const updatedMenu = await menu.save();
  
      res.status(200).json(updatedMenu);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const deleteMenu = async (req, res) => {
    const skuMenu = req.params.sku; // Assuming you pass the SKU in the URL parameters
  
    try {
      const menu= await AllMenu.findOneAndDelete({ sku: skuMenu });
  
      if (!menu) {
        return res.status(404).json({ error: "Menu no encontrado" });
      }
  
      res.status(200).json({ message: "Menu eliminado con éxito" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getAllMenu = async (req, res) => {
    try {
    
      const menu = await AllMenu.find(); 
  
      if (!menu) {
        return res.status(404).json({ error: 'No se ha encontrado ningun menu' });
      }
  
      res.status(200).json(menu);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    createMenu,
    updateMenu,
    deleteMenu,
    getAllMenu
  };