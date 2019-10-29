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
            $("#booking").text("Currency Conversion");

            var div2 = $("<div>");
            $(div2).attr("class", "card-body");
            var local = $("<p>").text('Your Current Currency:').addClass('localA');
            var localAir = $("<input>").attr({
                type: "text",
                id: "currencyI",
                name: "currencyI",
                placeholder: "USD, GBP, EUR, etc."
            });
            var dest = $("<p>").text("Currency Converted To:").addClass('localA');
            var destAir = $("<input>").attr({
                type: "text",
                id: "currencyF",
                name: "currencyF",
                placeholder: "USD, GBP, EUR, etc."
            });
            var dateDepart = $("<p>").text("How Much Do You Want To Convert:").addClass('localA');
            var departInput = $("<input>").attr({
                type: "text",
                name: "convert",
                id: "convert",
                placeholder: "$ XX.XX"
            });
            var submit = $("<button>").attr("class", "submit localA").text("Submit");
            $(div2).append(local, localAir, dest, destAir, dateDepart, departInput, submit);
            $("#booking").append(div2);

            $("#book-view").html("<h2>'How Much Ya Need?'</h2>");
        }

    });

    $(document).on("click", '.submit', function (event) {
        event.preventDefault();
        console.log("fire");
        var initial = $("#currencyI").val().trim(); // initial
        var final = $("#currencyF").val().trim() // final
        var rDate = $("#convert").val().trim() // conversion

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://community-neutrino-currency-conversion.p.rapidapi.com/convert",
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
                "x-rapidapi-key": "665cad435fmshb30e267a05b4656p1b2f56jsn9be257d087d3",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                "from-type": initial.toUpperCase(),
                "to-type": final.toUpperCase(),
                "from-value": parseInt(rDate).toFixed(2)
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            var newDiv=$("<div>").attr({
                id: "book-title",
                
            });
            $("#book-view").empty();


        });





    });

});