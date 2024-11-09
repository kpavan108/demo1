const express=require('express')
const app =express()
const port=5000

//adding middleware with some condition
//here the condition get true then the route can take the clients req and give result to the client
//if the condition false route doesn't get exicuted and pending
//we can create may middle ware conditions per each route

app.use((req, res, next) => {
    //if(10>20) this condition is false then the route will not give response
    if(10<20){
        next()
    }
})

app.get('/apple',(req,res)=>{
    res.send("Apple is red in color")
})
app.get('/home',(req,res)=>{
    res.send("Welcome to home page")
})
app.get('/about',(req,res)=>{
    res.send("Welcome to about page")
})
app.get('/contact',(req,res)=>{
    res.send("Welcome to contact page")
})


app.listen(port,()=>{
    console.log("Server start and running successfully")
})