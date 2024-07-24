const express = require("express")
const app = express()

const port = 3000 


const path = require("path")
const x = path.join(__dirname , '../public')
app.use(express.static(x))


////////////////////////////////////////////////////////////

app.set('view engine', 'hbs');

const viewsDirectory = path.join(__dirname , '../templet/views')
app.set("views" , viewsDirectory)

const hbs = require('hbs')
const partialsPast = path.join(__dirname , "../templet/partials")
hbs.registerPartials(partialsPast)



app.get('/' , (req,res) =>{
    res.render('index' , {
        title:"HOME",
        desc:"this is home page"
    })
})

app.get('/about' , (req,res) =>{
    res.render('about' , {
        title:"ABOUT",
        x :"Web developer",
        fname:"tarek",
        lname:"saad",
        city:"behira",
        age: 20
    })
})

app.get('/instructor' , (req,res) =>{
    res.render('instructor' , {
        title:"INSTRUCTOR",
        fname:"islam",
        lname:"mohamed",
        age: 28
    })
})

app.get('/content' , (req,res) =>{
    res.render('content' , {
        title:"CONTENT",
        email:"tarek.elmajeed@gmail.com",
        phone:"01062733250",
        city : "behira",
        age: 20
    })
})

app.get('/products' , (req,res) =>{
    res.render('products' , {
        title:"PRODUCTS",
        name : "iphone 13 pro max",
        price:"50000",
        discount : "3000",
        color : "gold"
    })
})

app.listen(port , ()=>{
    console.log('app is listening on port 3000')
})