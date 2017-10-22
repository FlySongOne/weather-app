$(document).ready(function(){

var $submit1 = $('#submit1');
var $submit2 = $('#submit2');
var $top = $('.top');

// if search button is clicked, call show function and gets data from open weather API
$submit2.click(show);

// if a user presses enter key, it calls show function
$submit1.on("keydown",function(event) {
  if(event.keyCode === 13){
    show();
  }
});

// function show checks whether input value is number value or not
// if it is a number, it fetches open weather api data with zipcode from user
// and then call getData function and changeDom function
function show(){
  if(!isNaN($submit1.val()) ){
     var zipCode = $submit1.val();
     var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&appid=43d65fe9b47fff323e627f38fbfdf76c";

     $.getJSON(weatherAPI,function(data){
        getData(data);   // fetched data is an augument to getData function
        changeDom();     // the function shows .center element to the screen.
     });
  }
}

// getData functions take data as paramenter and get necessary data from it, such as
// city name, temperatures, description, lattitude, longitude, windspeed, and humidity.
// at the end, it calls manipulate dom function so that dom elements are changed accordingly.
var getData = function(data){
   // location name
   var name = data.name;
   // temperature from open weather api is kelvin temp
   var kelvinTemp = data.main.temp;
   // turns kelvin into farenheit
   var farenheit = (kelvinTemp*9/5 -459.67).toFixed(0);
   // kelvin_minimum temperature
   var kelTemp_min = data.main.temp_min;
   // farenheit minimum temperature
   var farTemp_min = (kelTemp_min*9/5 - 459.67).toFixed(0);
   var kelTemp_max = data.main.temp_max;
   var farTemp_max = (kelTemp_max*9/5 - 459.67).toFixed(0);
   // changes first letter of description to upper case
   var description = data.weather[0].description;
   var upperCaseDes = description[0].toUpperCase() + description.slice(1);
   // latitude and longitude
   var lat = data.coord.lat;
   var long = data.coord.lon;
   var humidity = data.main.humidity;

   var windSpeed = data.wind.speed;
   // change windSpeed data to MPH
   windSpeed = (2.237 * windSpeed).toFixed(1);

   manipulateDom(name,farenheit,upperCaseDes,farTemp_min,farTemp_max,windSpeed,humidity,lat,long);
}
// manipulateDom function changes elements' html that are necessary on the screen,
// so users can read data from the screen.
var manipulateDom = function(name,temperature,description,temp_min,temp_max,windSpeed,humidity,lat,long){
   $('#description').html(description);
   $('#name').html(name);
   $('#temp').html(temperature + "&#176");
   $('#min').html(temp_min + "&#176");
   $('#max').html(temp_max + "&#176");
   $('#wind').html(windSpeed + " mph");
   $('#humid').html(humidity);
   $('#lat').html(lat.toFixed(2));
   $('#long').html(long.toFixed(2));
   // if temperature is less than 40, change temp color to blue, if
   // 90 or more, change it to red
   if(temperature < 40 ){
      $('#temp').css('color','blue');
   }else if(temperature > 90){
      $('#temp').css('color','red');
   }

}

// change dom function make section center appear
var changeDom = function(){
     $('.center').css('display','block');
}

});
