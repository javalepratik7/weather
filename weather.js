const API_KEY = "0443cbee180a474089a54409240802";
const url = "http://api.weatherapi.com/v1/current.json?key=";
"http://api.weatherapi.com/v1/current.json?key=&q=pune&aqi=no0443cbee180a474089a54409240802"
pune("pune")
async function pune(query)
{
    const res = await fetch(`${url}${API_KEY}&q=${query}&aqi=no`);
    const allinformation = await res.json();
    console.log(allinformation)

    let humidity=allinformation.current.humidity
    let Latitude=allinformation.location.lat
    let Longitude=allinformation.location.lon
    let temp=allinformation.current.temp_c
    let Wind_Degree=allinformation.current.wind_degree
    let Wind_Speed=allinformation.current.wind_kph

    document.getElementById("Humidity_pune").innerHTML=humidity
    document.getElementById("min_temp_pune").innerHTML=Latitude
    document.getElementById("max_temp_pune").innerHTML=Longitude
    document.getElementById("temp_pune").innerHTML=temp
    document.getElementById("sunrise_pune").innerHTML=Wind_Degree
    document.getElementById("sunset_pune").innerHTML=Wind_Speed

}
mumbai("mumbai")
async function mumbai(query)
{
    const res = await fetch(`${url}${API_KEY}&q=${query}&aqi=no`);
    const allinformation = await res.json();

    let humidity=allinformation.current.humidity
    let Latitude=allinformation.location.lat
    let Longitude=allinformation.location.lon
    let temp=allinformation.current.temp_c
    let Wind_Degree=allinformation.current.wind_degree
    let Wind_Speed=allinformation.current.wind_kph

    document.getElementById("Humidity_mumbai").innerHTML=humidity
    document.getElementById("min_temp_mumbai").innerHTML=Latitude
    document.getElementById("max_temp_mumbai").innerHTML=Longitude
    document.getElementById("temp_mumbai").innerHTML=temp
    document.getElementById("sunrise_mumbai").innerHTML=Wind_Degree
    document.getElementById("sunset_mumbai").innerHTML=Wind_Speed

}
delhi("bangalore")
async function delhi(query)
{
    const res = await fetch(`${url}${API_KEY}&q=${query}&aqi=no`);
    const allinformation = await res.json();

    let humidity=allinformation.current.humidity
    let Latitude=allinformation.location.lat
    let Longitude=allinformation.location.lon
    let temp=allinformation.current.temp_c
    let Wind_Degree=allinformation.current.wind_degree
    let Wind_Speed=allinformation.current.wind_kph

    document.getElementById("Humidity_delhi").innerHTML=humidity
    document.getElementById("min_temp_delhi").innerHTML=Latitude
    document.getElementById("max_temp_delhi").innerHTML=Longitude
    document.getElementById("temp_delhi").innerHTML=temp
    document.getElementById("sunrise_delhi").innerHTML=Wind_Degree
    document.getElementById("sunset_delhi").innerHTML=Wind_Speed
}
locationed("Ichalkaranji");
function search(){
    const searchText = document.getElementById("input");
    const values=searchText.value
    locationed(values);
    console.log(typeof values)
    console.log(values)
}


async function locationed(query) 
{
const res = await fetch(`${url}${API_KEY}&q=${query}&aqi=no`);
const allinformation = await res.json();
console.log(query)

    let temp=allinformation.current.temp_c
    let temp_f=allinformation.current.temp_f
    let humidity=allinformation.current.humidity
    let state=allinformation.location.region
    let Latitude=allinformation.location.lat
    let Longitude=allinformation.location.lon
    let Wind_Speed=allinformation.current.wind_kph
    let Wind_Degree=allinformation.current.wind_degree
    let Wind_direction=allinformation.current.wind_dir
    let image=allinformation.current.condition.icon

    document.getElementById("temp_deg").innerHTML=temp
    document.getElementById("temp_fah").innerHTML=temp_f
    document.getElementById("Humidity").innerHTML=humidity
    document.getElementById("state").innerHTML=state
    document.getElementById("Latitude").innerHTML=Latitude
    document.getElementById("Longitude").innerHTML=Longitude
    document.getElementById("w_speed").innerHTML=Wind_Speed
    document.getElementById("w_degree").innerHTML=Wind_Degree
    document.getElementById("w_direction").innerHTML=Wind_direction
    document.getElementById("heading").innerHTML=query
    // document.getElementById("images").src=image
}