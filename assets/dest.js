$(document).ready(function () {
    var book=false;

    $(".list-group-item").on("click", function () {
        $(".name").empty();
        $(".name").text("Your Chosen Destination:");
        $(".dest-img").attr("src", $(this).attr("img-src"));

        var APIKey = "51c573b404ffc88609ae9db9cfa7ea14";
        var q = $(this).attr('data-dest');
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + q + "&appid=" + APIKey;
        // Create an AJAX call to retrieve data Log the data in console
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $(".city").html("<h2>" + response.name + "</h2>");
            $('.wind').html("<h5>Wind Speed: " + response.wind.speed + " m/s </h5>");
            $('.humidity').html("<h5>Humidity: " + response.main.humidity + "%</h5>");
            temp = response.main.temp - 273.15;
            temp = temp.toFixed(0);
            //(32°F − 32) × 5/9 = 0°C
            tempf = temp * 9 / 5 + 32
            tempf = tempf.toFixed(0);
            $(".temp").html("<h5>Temperature: " + temp + "&#176;C (" + tempf + "&#176;F)</h5>");
            
            $("#city").text("Information on: " + response.name);

            $("#info-page").html();
        });

        // var queryURL2 =	"https://siddiq-such-flight-v1.p.rapidapi.com/search?return-date=2015-04-07&to=LHE&depart-date=2015-03-31&from=DXB",

        $(".col-sm-4").removeAttr("id");

        if (book==false){
            book=true;
        var div=$("<div>");
        $(div).attr("class","card-header");
        $("#book").append(div);
        $(div).attr("id","booking");
        $("#booking").text("Where are you coming from?");

        var div2=$("<div>");
        $(div2).attr("class","card-body");
        $(div2).attr("id","booking-view");
        $(div2).html('Local Airport (3 letter code):    <input type="text" name="iAirport" value="ex: DFW, LAX, etc."> <br> Destination Airport (3 letter code:    <input type="text" name="fAirport" value="ex: DFW, LAX, etc."> <br> <input type="submit" value="Submit">');
        $("#booking").append(div2);
        }

    });

});