(function(){ 
  "usestrict";
  
  let button = document.querySelector('.button');
  let inputValue = document.querySelector('.inputValue');
  let name = document.querySelector('.name');
  let desc = document.querySelector('.desc');
  let temp = document.querySelector('.temp');
  const key = 'd8cbffb4fff02bdd85b50c90da1022a3'

  button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`)
    .then(response => response.json())
     .then(data => {
        var nameValue = data.name;
        var descValue = data['weather'][0]['description'];
        var tempValue = data['main']['temp'];
        name.textContent = nameValue;
        desc.textContent = descValue;
        temp.textContent = `${tempValue-273.15} °C`;
      }
    )

  .catch(err => alert('Wrong City'));
  })

})();