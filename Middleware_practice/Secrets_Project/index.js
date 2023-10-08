//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// one plugin for the direct the page to the public index.html 
// one plugin for checking the input password have a correct input 
// plugin able jump to the secret.html 
app.use(bodyParser.urlencoded({extended:true})); //able to get the request body 

var userAuthorized = false; 
//customize module to check input password 
function passwordCheck(req, res,next){
    const inputPassword = req.body["password"]; 
    if(inputPassword == 'ILOVECODING'){
        userAuthorized = true;  
    }
    next(); //in order to move on 
}

app.use(passwordCheck); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(userAuthorized){
        res.sendFile(__dirname+"/public/secret.html"); 
    }else{
        res.sendFile(__dirname+"/public/index.html"); 

    }
    userAuthorized = false;
    
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

