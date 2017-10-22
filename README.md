### Weather App
  The weather app shows the current weather, including the current temperature,
min, max temperatures, city name, description, latitude, longitude, humidity, 
and wind speed.  

![horizontalview](./weather/weather/images/weatherapp-horizontal.png)
![verticalview](./weather/weather/images/weatherapp-vertical.png)

## features:
- An input field for a user to enter a zip code
- A submit button
- When the submit button is clicked:
    - A GET request fetches the weather data from the open weather API
    - The following data are rendered on the page:
        - City name
        - Current temperature
        - Weather description
        - Min temp
        - Max temp
        - The latitude and longitude, humidity, and wind speed
- The temperature turn blue if under 40, and red if above 90.
- The app is styled by using flex box

#Technology Used
- JavaScript
- jQuery
- HTML/CSS
- Open Weather API




