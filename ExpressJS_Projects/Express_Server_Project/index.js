import express from "express"; 
const app =express(); 
const port = 4000

//req: request 
//res: response
app.get("/", (req,res)=>{
    res.send("<h1>Hello World!</h1>"); 
}); 

app.get("/about",(req,res)=>{
    res.send("<h1>Hey My name is Zijun </h1>"); 
}); 

app.get("/contact",(req,res)=>{
    res.send("<h1>Please reach me through email: zye072@uottawa.ca </h1>"); 
}); 
// first parameter 3000 is port 
// second parameter call back 
app.listen(port,() =>{
    console.log(`Server runing on port ${port}.`); 
}); 