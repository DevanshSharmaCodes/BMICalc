//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(request,response){
    response.sendFile(__dirname+"/bmiCalculator.html");
});//__dirname(2 underscores) gives the directory name of the computer on which server is created.
app.post("/",function(request,response){
    var w=Number(request.body.weight);
    var h=Number(request.body.height);
    var result=Math.floor(w/(h*h));
    response.send("Your BMI is: "+result);
});
app.listen(8000,function(){
    console.log("Server started on port 8000.");
});
