

$(document).ready(function() {
    $('#HotelSearch').click(function(event) {
        event.preventDefault();

        var price = $('#price').val(); // Grabs current price selected in dropdown.

        var myurl = "https://api.yelp.com/v3/businesses/search?term=hotel&location=San Jose";

        $.ajax({
           url: myurl,
           headers: {
            'Authorization':'Bearer zPrhArSQ32D_AxX3siNPykFx9dtzDnGZRu6iaKfeRMImzQznxnSUa8fWANQjECmNulLcZQI1yD6mGtJWbc3CAEUv9x_qOzJVP4kxy0v50iB3H8RWltf3xwTmpc_JXXYx',
        },
           method: 'GET',
           dataType: 'json',
           success: function(data){
               console.log('success: '+data);
           }
        });   


        
    })
});