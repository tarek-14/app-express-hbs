let form = document.getElementById('form1')
let input = document.getElementById('input1')
let locationf = document.getElementById('location')
let forecastf = document.getElementById('forecast')
let errorf = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(input.value)
    weatherFunction()
    form.reset()
})

let weatherFunction = async()=>{
    try {
        const res = await fetch ('http://localhost:3000/weather?address=' + input.value )
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorf.innerText = data.error
            locationf.innerText =''
            forecastf.innerText = ''
        }else{
            locationf.innerText = data.location
            forecastf.innerText = data.forecast
            errorf.innerText = ''
        }
    }
    catch(e){
        console.log(e)
    }
}

