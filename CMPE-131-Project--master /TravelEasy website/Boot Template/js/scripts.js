$(document).ready(function () {
    $('#HotelSearch').click(function (event) {
        event.preventDefault();

        $('#HotelTableBody').html("<tr></tr>");

        var price = $('#price').val(); // Grabs current price selected in dropdown.

        var location = $('#city').val(); // Grabs city typed in by user

        var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotel&location=" + location + "&price=" + price;

        $.ajax({
            url: myurl,
            headers: {
                'Authorization': 'Bearer zPrhArSQ32D_AxX3siNPykFx9dtzDnGZRu6iaKfeRMImzQznxnSUa8fWANQjECmNulLcZQI1yD6mGtJWbc3CAEUv9x_qOzJVP4kxy0v50iB3H8RWltf3xwTmpc_JXXYx',
            },
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                var count = 10;
                if (data.total < 10) {
                    count = data.total;
                }

                for (var i = 0; i < count; i++) {
                    console.log('success: ' + data.businesses[i].name);
                    $('#HotelTable tr:last').after('<tr><td><img class="thumbnails" src=' + data.businesses[i].image_url + '></td><td>' + data.businesses[i].location.city + '</td><td>' + data.businesses[i].name + '</td><td>' + data.businesses[i].rating + '</td><td>' + data.businesses[i].price + '</td><td><button>add</button></td></tr>');
                }
            }
        });

    })
});