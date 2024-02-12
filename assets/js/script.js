const url='https://api.openweathermap.org/data/2.5/'
const urlgeo='http://api.openweathermap.org/geo/1.0/'
const key='6f3dcef125e66145b2a25af35be9fc40'

const getResult=(cityName)=>{
    let query=`${urlgeo}direct?q=${cityName}&limit=${1}&appid=${key}`
    fetch(query)
    .then(location=>{
        return location.json()
    })

    .then(displayResult)
}

const displayResult=(result)=>{
    console.log(result)
    let lat=`${result[0].lat}`
    let lon=`${result[0].lon}`
    console.log(lat)
    let query2=`${url}weather?lat=${lat}&lon=${lon}&appid=${key}`
    fetch(query2)
    .then(location=>{
        return location.json()
    })
    .then(displayShow)

}
const displayShow=(alfa)=>{
    console.log(alfa)
    let city=document.querySelector('.city')
    city.innerText=`${alfa.name}, ${alfa.sys.country}`

    let temp=document.querySelector('.temp')
    temp.innerText=`${Math.round(alfa.main.temp- 273,15)}°C`

    let desc=document.querySelector('.desc')
    desc.innerText=`${alfa.weather[0].main}`

    let minMax=document.querySelector('.minMax')
    minMax.innerText=`${Math.round(alfa.main.temp_min-273,15)}°c / ${Math.round(alfa.main.temp_max- 273,15)}°c`
}

const setQuery=(e)=>{
    if(e.keyCode==13){
        getResult(searchBar.value)
    }
}

const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)


