const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3000;

const app =express();

app.use(bodyParser.json());
app.use(cors());

//test get method


app.get('/', (req:any, res:any) =>{
    res.send('Hello from node server')
  })

  app.post('/register',(req:any,res:any) => {
      console.log(req.body);
      res.status(200).send({"data":"Registered successfully"})
  })


app.listen(PORT,function(){
    console.log("Server Running on port",PORT);
})
