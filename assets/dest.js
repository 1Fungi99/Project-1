$(document).ready(function () {
    var book = false;

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
            console.log(tempf + " temp")
            $("#temp").html("<h5>Temperature: " + temp + "&#176;C (" + tempf + "&#176;F)</h5>");
        });
        $(".col-sm-4").removeAttr("id");

        if (book == false) {
            book = true;
            var div = $("<div>");
            $(div).attr("class", "card-header");
            $("#book").append(div);
            $(div).attr("id", "booking");
            $("#booking").text("Where are you coming from?");

            var div2 = $("<div>");
            $(div2).attr("class", "card-body");
            var local=$("<p>").text('Local Airport (3 letter code):').addClass('localA'); 
            var localAir=$("<input>").attr({
                type:"text",
                id: "iAirport",
                name: "iAirport",
                placeholder: "ex: DFW, LAX, etc."
            });
            var dest=$("<p>").text("Destination Airport (3 letter code):").addClass('localA');
            var destAir=$("<input>").attr({
                type:"text",
                id: "fAirport",
                name: "fAirport",
                placeholder: "ex: DFW, LAX, etc."
            });
            var dateDepart=$("<p>").text("Date of Departure:").addClass('localA');
            var departInput=$("<input>").attr({
                type:"text",
                name:"date",
                id: "depart",
                placeholder:"YYYY-MM-DD"
            });
            var dateReturn=$("<p>").text("Date of Return:").addClass('localA');
            var returnInput=$("<input>").attr({
                type:"text",
                name:"date",
                id: "return",
                placeholder:"YYYY-MM-DD"
            });
            var submit=$("<button>").attr("class", "submit localA").text("Submit");
            $(div2).append(local,localAir,dest,destAir,dateDepart,departInput,dateReturn, returnInput,submit);
            $("#booking").append(div2);
        }

    });

    $(document).on("click",'.submit', function(event) {
        event.preventDefault();
        console.log("fire");
        var initial = document.getElementById("iAirport"); // departure airport
        var final = document.getElementById("fAirport"); // destination airport
        var rDate= document.getElementById("return"); //return date
        var dDate=document.getElementById("depart"); //departure date
        // var queryURL2 = "https://siddiq-such-flight-v1.p.rapidapi.com/search?return-date="+rDate+"&to="+final+"&depart-date="+dDate+"&from="+initial;

        // var settings = {
        //     async: true,
        //     crossDomain: true,
        //     url:"https://siddiq-such-flight-v1.p.rapidapi.com/search?return-date="+rDate+"&to="+final+"&depart-date="+dDate+"&from="+initial,
        //     "url": "https://siddiq-such-flight-v1.p.rapidapi.com/search?return-date=2015-04-07&to=LHE&depart-date=2015-03-31&from=DXB",
        //     method: "GET",
        //     headers: {
        //         "x-rapidapi-host": "siddiq-such-flight-v1.p.rapidapi.com",
        //         "x-rapidapi-key": "665cad435fmshb30e267a05b4656p1b2f56jsn9be257d087d3"}}
        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://siddiq-such-flight-v1.p.rapidapi.com/search?return-date=2015-04-07&to=LHE&depart-date=2015-03-31&from=DXB",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "siddiq-such-flight-v1.p.rapidapi.com",
                "x-rapidapi-key": "665cad435fmshb30e267a05b4656p1b2f56jsn9be257d087d3"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
        




    });

});