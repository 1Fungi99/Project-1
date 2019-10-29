console.log("this is going to look like trash, im so sorry for anyone that has to read this, half our workforce is gone, and Jude and i are working as hard as we can to finish this and its currencly 3:00 in the morning and i need to go to bed, again i am so sorry... <3 JUSTIN :)                              ALSO HONORARY MEMBER: NICK")

$(document).ready(function () {
    const destinations = [
        {
            location: "amsterdam",
            language: "Dutch",
            overview: "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths.",
            travelGuide: "https://www.google.com/destination?dest_mid=/m/0k3p&dest_src",
        },
        {
            location: "athens",
            language: "Greek",
            overview: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire. The city is still dominated by 5th-century BC landmarks, including the Acropolis, a hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple. The Acropolis Museum, along with the National Archaeological Museum, preserves sculptures, vases, jewelry and more from Ancient Greece.",
            travelGuide: "https://www.google.com/destination?dest_mid=/m/0n2z&dest_src",
        },
        {
            location: "barcelona",
            language: "Spanish",
            overview: "Barcelona has some of the most unique and inspiring architecture in the world, so a tour of the city's parks, museums and churches is a must. Start your days off with tours of Antoni Gaudí's whimsical architecture, including Casa Batlló, La Sagrada Familia and Park Güell.",
            travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F01f62&dest_src",
        },
        {
            location: "berlin",
            language: "German",
            overview: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.",
            travelGuide: "https://www.google.com/destination?dest_mid=/m/0156q&dest_src",
        },
        {
            location: "iceland",
            language: "Icelandic",
            overview: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history.",
            travelGuide: "https://www.google.com/destination?dest_mid=/m/03rj0&dest_src",
        },
        {
            location: "madrid",
            language: "Spanish",
            overview: "Madrid is the largest city in Spain. It is the center of international business. If you walk through the streets of Madrid. You can hear the gentle melodies of the Spanish guitar, the swish of a flamenco dancer's skirt, and the happy laughter from a midday meal from the restaurants around.",
            travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F056_y&dest_src",
        },
        {
            location: "paris",
            language: "French",
            overview: "he City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassical-design architecture, further enhanced by cascading trees and glowing streetlamps.",
            travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F05qtj&dest_src",
        },
        {
            location: "rome",
            language: "Italian",
            overview: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter’s Basilica and the Vatican Museums, which house masterpieces such as Michelangelo’s Sistine Chapel frescoes.",
            travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F06c62&dest_src",
        },
        {
            location: "salzburg",
            language: "German",
            overview: "Salzburg is an Austrian city on the border of Germany, with views of the Eastern Alps. The city is divided by the Salzach River, with medieval and baroque buildings of the pedestrian Altstadt (Old City) on its left bank, facing the 19th-century Neustadt (New City) on its right. The Altstadt birthplace of famed composer Mozart is preserved as a museum displaying his childhood instruments.",
            travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F0b1mf&dest_src",
        },
        {
            location: "singapore",
            language: "Malay",
            overview: "Singapore is a miraculous sight, particularly for travelers familiar with modern Asian metropolises. The city maintains a remarkable balance of green space and skyscrapers, in addition to sustaining substantial ethnic enclaves like Little India and Chinatown.",
            travelGuide: "https://www.google.com/destination?dest_mid=/m/06t2t&dest_src",
        },
        {
            location: "tokyo",
            language: "Japanese",
            overview: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
            travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F07dfk&dest_src",
        },
    ];

    var book = false;

    $(".list-group-item").on("click", function () {
        console.log($(this).attr("data-index")); //works
        $(".help").empty();
        $(".sorry").empty().text("Overview:");
        var h6=$("<h7>").text(destinations[$(this).attr("data-index")].overview).attr({
            class: "text-center help"
        });
        var sorryMonica=$("<a>").text("Check this out!").attr({
            href: destinations[$(this).attr("data-index")].travelGuide
        });
        $("#info").append(h6,sorryMonica);

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
                "x-rapidapi-key": "bcd506b97bmsh96b21c686229107p1dfd40jsnc707c052eb7b",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                "from-type": initial.toUpperCase(),
                "to-type": final.toUpperCase(),
                "from-value": parseInt(rDate).toFixed(2)
            }
        }

        // currency to/currency from == xxx currency to = 1.00 currency from        IMPORTANT

        $.ajax(settings).done(function (response) {

            $("#book-view").empty();

            console.log(response);

            var newDiv = $("<h3>").attr({
                id: "converted"
            });
            var newDiv2 = $("<h3>").attr({
                id: "conversion"
            });
            $("#book-view").append(newDiv, newDiv2);

            $("#converted").text("You will have: " + response.result + "  " + final.toUpperCase());
            var eq = rDate / response.result;
            eq = eq.toFixed(2);
            $("#conversion").text("Conversion Rate is: " + eq + " " + final.toUpperCase() + " = 1 " + initial.toUpperCase());
        });
    });
});