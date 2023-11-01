const express = require('express')
const app = express()
const port = 3000
const studentRouter=require("./Routes/StudentRoutes")
var mongoose = require("mongoose");
 require("dotenv").config();
app.use(express.json());

app.use("/students",studentRouter);

mongoose.connect(process.env.MONGOOSE_KEY, {
  useNewUrlParser: true,
});
//test
app.get('/', (req, res) => 
{
  console.log(process.env.MONGOOSE_KEY);
  res.send('Hello World!')
})

app.get('/hola2', (req, res) => {
    res.send('Hello World!')
  })
  
  app.get('/hola', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})