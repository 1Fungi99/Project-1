$(document).ready(function () {
    $(".list-group-item").on("click", function () {
        $(".name").empty();
        $(".name").text("Your Chosen Destination:");
        $(".dest-img").attr("src",$(this).attr("img-src"));

        var APIKey = "51c573b404ffc88609ae9db9cfa7ea14";
        var q=$(this).attr('data-dest');
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + q +"&appid=" + APIKey;
        // Create an AJAX call to retrieve data Log the data in console
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(queryURL);
          console.log(response);
          $(".city").html("<h2>"+response.name+"</h2>");
          $('.wind').html("<h5>Wind Speed: "+response.wind.speed + " m/s </h5>");
          $('.humidity').html("<h5>Humidity: "+ response.main.humidity + "%</h5>");
          temp=response.main.temp-273.15;
          temp=temp.toFixed(2);
          //(32°F − 32) × 5/9 = 0°C
          tempf=temp * 9/5 + 32
          tempf=tempf.toFixed(2);
          $(".temp").html("<h5>Temperature: " + response.main.temp + " K or " + temp +" C (" + tempf +" F)</h5>");
          $(".Victory").html("<h5>Ushindi!</h5>");
        });
    



    });

});