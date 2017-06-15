

// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

//Trying out raw Javascript for city search
var searchTerm = document.getElementById("city-search");

searchTerm.addEventListener("input", function() {
    getWeather(searchTerm.value)
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
        //grab gif
         //graph gif
    
	       $.ajax({
             url: "//api.giphy.com/v1/gifs/search?q=" + weather.currently +  "&api_key=dc6zaTOxFJmzC",
                type: "GET",
                success: function(response) {
                    
                    
                    $('.geo #gif-1').attr('src', response.data["1"].images.original.url);
                    
                    $('.geo #gif-2').attr('src', response.data["2"].images.original.url);

                    $('.geo #gif-3').attr('src', response.data["3"].images.original.url);

                    $('.geo #gif-4').attr('src', response.data["4"].images.original.url);

                    $('.geo #gif-5').attr('src', response.data["5"].images.original.url);
                    
                    $('.geo #gif-6').attr('src', response.data["6"].images.original.url);
                    
                    $('.geo #gif-7').attr('src', response.data["7"].images.original.url);

                    $('.geo #gif-8').attr('src', response.data["8"].images.original.url);

                    $('.geo #gif-9').attr('src', response.data["9"].images.original.url);

                    $('.geo #gif-10').attr('src', response.data["10"].images.original.url);

                    console.log(response.data);
                },
               error: function (e) {
                   alert(e);
                }});
           
      $('.geo .temp').text(weather.temp + ' Degrees');
      $('.geo .city').text(weather.city);
       $('.geo .description').text(weather.currently);
      $('.geo .title').text(weather.title);    
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};