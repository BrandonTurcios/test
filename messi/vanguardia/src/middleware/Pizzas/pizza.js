import axios, { all } from "axios";

const getValuesPizza=async(req,res)=>
{
    let allValues="";
    try
    {
        allValues =await axios.get("http://"+`${import.meta.env.VITE_APIURL}`)
        console.log(allValues)
        res.json({allValues})

    }
    catch(e){
        console.log(res);
       res.json({message:allValues.error})
        
    }
   
    
}
export default getValuesPizza;