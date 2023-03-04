var allItems = [];
var Day;

document.getElementById("search").addEventListener("keyup", a => {
    getData(a.target.value)
}
);

function getData(code) {
    var myHttp = new XMLHttpRequest();
    myHttp.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=cd34a45648d54e6997d203142232502&q=${code}&days=3`);
    myHttp.send();
    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            allItems = JSON.parse(myHttp.response);
            // console.log(allItems);
            display();

        }
    })
}

getData('alex');
function display() {
    let date = new Date(allItems.location.localtime);
    let month = date.toLocaleDateString('default', { month: 'long' });
    let dyname = date.toLocaleDateString('local', { weekday: 'long' })
    let day = date.getDate();
    let day2 = allItems.forecast.forecastday[1].date;
    let day2Date = new Date(day2)
    let day2Name = day2Date.toLocaleString('local', { weekday: 'long' })
    let day3 = allItems.forecast.forecastday[2].date;
    let day3Date = new Date(day3)
    let day3Name = day3Date.toLocaleString('local', { weekday: 'long' })
    document.getElementById('date').innerHTML = `${day} ${month}`
    document.getElementById('today').innerHTML = dyname
    document.getElementById('day2').innerHTML = day2Name
    document.getElementById('day3').innerHTML = day3Name



    document.getElementById("location").innerHTML = allItems.location.name;
    document.getElementById("degree").innerHTML = allItems.current.temp_c;
    document.getElementById("custom").innerHTML = allItems.current.condition.text;
    document.getElementById("humidity").innerHTML = allItems.current.humidity;
    document.getElementById("wind-degree").innerHTML = allItems.current.wind_degree;
    document.getElementById("wind-direction").innerHTML = allItems.current.wind_dir;
    document.getElementById("forecast-icon").src = allItems.current.condition.icon;
    document.getElementById("tom-max").innerHTML = allItems.forecast.forecastday[1].day.maxtemp_c;
    document.getElementById("tom-min").innerHTML = allItems.forecast.forecastday[1].day.mintemp_c;
    document.getElementById("tom-condition").innerHTML = allItems.forecast.forecastday[1].day.condition.text;
    document.getElementById("tom-icon").src = allItems.forecast.forecastday[1].day.condition.icon;
    document.getElementById("after-tom-max").innerHTML = allItems.forecast.forecastday[2].day.maxtemp_c;
    document.getElementById("after-tom-min").innerHTML = allItems.forecast.forecastday[2].day.mintemp_c;
    document.getElementById("after-tom-condition").innerHTML = allItems.forecast.forecastday[2].day.condition.text;
    document.getElementById("after-tom-icon").src = allItems.forecast.forecastday[2].day.condition.icon;
}

