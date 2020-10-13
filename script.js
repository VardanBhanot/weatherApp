(function(){ 
  "usestrict";
  
  let button = document.querySelector('.button');
  let inputValue = document.querySelector('#inputValue');
  console.log(inputValue)
  let name = document.querySelector('.name');
  let desc = document.querySelector('.desc');
  let temp = document.querySelector('.temp');
  let sunrise = document.querySelector('.sunrise');
  let sunset = document.querySelector('.sunset');
  let wind = document.querySelector('.wind');
  const key = 'd8cbffb4fff02bdd85b50c90da1022a3';
  let contentBox=document.querySelector(".content-box");


  button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`)
    .then(response => response.json())
     .then(data => {
       console.log(data);
        const  nameValue = data.name;
        const  descValue = data['weather'][0]['description'];
        const tempValue = data['main']['temp'];
        const windValue = data['wind']['speed'];
        const sunriseValue = convertUnixTime(data.sys.sunrise);
        const sunsetValue = convertUnixTime(data.sys.sunset);
        const tempCelsius =  Number.parseFloat(tempValue-273.15).toFixed(2);
        name.textContent = nameValue;
        desc.textContent = descValue;
        temp.textContent = `${tempCelsius} °C`;
        wind.textContent = windValue;
        sunrise.textContent = sunriseValue;
        sunset.textContent = sunsetValue;
         contentBox.style.display="block";

      }
    )

  .catch(err => console.log(err));
  });

  function convertUnixTime(unix_timestamp){
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    
  }

})();