(function(){ 
  "usestrict";
  
  let button = document.querySelector('.button');
  let inputValue = document.querySelector('.inputValue');
  let name = document.querySelector('.name');
  let desc = document.querySelector('.desc');
  let temp = document.querySelector('.temp');
  let sunrise = document.querySelector('.sunrise');
  const key = config.WEATHER_KEY;

  button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`)
    .then(response => response.json())
     .then(data => {
       console.log(data);
        var nameValue = data.name;
        var descValue = data['weather'][0]['description'];
        var tempValue = data['main']['temp'];
        var sunriseValue = convertUnixTime(data.sys.sunrise);
        name.textContent = nameValue;
        desc.textContent = descValue;
        temp.textContent = `${tempValue-273.15} °C`;
        sunrise.textContent = sunriseValue;
      }
    )

  .catch(err => alert('Wrong City'));
  });

  function convertUnixTime(unix_timestamp){
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    
  }

})();