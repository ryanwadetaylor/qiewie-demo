
$(function () {

// logged-in users gauge
    $.get('http://localhost:3000/data').done(function(data){
        var users = data.loggedInUsers
        var g = new JustGage({
            id: "loggedInGauge",
            value: users,
            min: 0,
            max: 50000,
            title: "Logged in Users"
        });
    })    
 

// load map data
    $.get('http://localhost:3000/data').done(function(data){
        var locations = data.loc
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 36.1215, lng: 115.173},
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map
          });
        }; 
    })

    // load tweets
    $.get('http://localhost:3000/numTweets').done(function(tweets) {
        $('#tweets-data').html(tweets)
    })

    // load likes
    $.get('http://localhost:3000/numLikes').done(function(likes) {
        $('#facebook-data').html(likes)
    })

    // load new users
    $.get('http://localhost:3000/newUsers7Days').done(function(newUsers) {
        $('#new-users-data').html(newUsers)
    })

    // load premium subs sold data
    $.get('http://localhost:3000/premium').done(function(premium) {
        $('#premium-data').html(premium)
    })

    // load corporate subs sold data
    $.get('http://localhost:3000/corporate').done(function(corporate) {
        $('#corp-data').html(corporate)
    })

    // load municipal subs sold data
    $.get('http://localhost:3000/municipal').done(function(municipal) {
        $('#muni-data').html(municipal)
    })



})