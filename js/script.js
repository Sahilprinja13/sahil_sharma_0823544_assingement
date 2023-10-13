/*
    Assignment #4
    name sahil sharma
    id 0823544
*/

$(function () {
    // your code here
    
function compareLocations(location1, location2) {
    
}



$(document).ready(function() {
    if (!navigator.geolocation) {
        $('#content').append('<p>Geolocation is not supported by your browser</p>');
        return;
    }
// to set the position

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;

        const currentLocationStr = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`;
        $('#locationhere').text(currentLocationStr);

        const previousLocation = localStorage.getItem('location');

        if (previousLocation) {
            const previousLocationObj = JSON.parse(previousLocation);
            let distance = compareLocations(previousLocationObj, {latitude, longitude});
            distance = isNaN(distance) ? 0 : distance;
            const distanceInKm = (distance / 1000).toFixed(2);
            $('#content').append('<div id="previousLocation">Previous Location: ' + previousLocation + '</div>');
            $('#content').append('<h3>Welcome back! to my app</h3>');
            $('#content').append('<p>You\'ve traveled ' + distanceInKm + ' km since your last visit.</p>');
        } else {
            $('#content').append('<h3>Welcome for the first time! on my app</h3>');
        }

        localStorage.setItem('location', JSON.stringify({latitude, longitude}));
    }


// to display error
    function error() {
        $('#content').append('<p>You must allow geolocation in order to use this feature.</p>');
    }


    navigator.geolocation.getCurrentPosition(success, error);
});




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


