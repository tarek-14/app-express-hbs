const express = require("express")
const app = express()
const geocode = require("./data/geocode")
const forecast = require("./data/forecast")
const hbs = require('hbs')
const port = 3000 

const path = require("path")
const x = path.join(__dirname , '../public')
app.use(express.static(x))

app.set('view engine', 'hbs');
const viewsDirectory = path.join(__dirname , '../templet/views')
app.set("views" , viewsDirectory)
app.get('/' , (req,res) =>{
    res.render('index' , {
        title:"the weather",
        desc :"To know the weather, please enter the name of the country and press the button"
    })
})

app.get('/weather' , (req , res)=>{
    if(!req.query.address){
        return res.send({
            // لما يكون مفيش قيمه فى address 
            error : "you must provide address"
        })
    }
    geocode (req.query.address,(error , data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.longtitude , data.latitude , (error , forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast : forecastData,
                location : req.query.address
            })
        })
    })
})


app.get('*' , (req,res) =>{
    res.send("404 padg not found")
})

app.listen(port , ()=>{
    console.log('app is listening on port 3000')
})