// Initialize the Google Maps API
function initMap() {
    // Set the default location and zoom level
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 10,
    });

    // Define function to calculate distance between two points
    function calculateDistance() {
        const source = document.getElementById("source").value;
        const destination = document.getElementById("destination").value;

        // Create a DirectionsService object to use the route method and get distance
        const directionsService = new google.maps.DirectionsService();

        // Define request object for directions
        const request = {
            origin: source,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
        };

        // Call route method of DirectionsService to get distance
        directionsService.route(request, function(result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                // Display the distance in the console
                console.log("Distance:", result.routes[0].legs[0].distance.text);

                // Draw the route on the map
                const directionsRenderer = new google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map);
                directionsRenderer.setDirections(result);
            } else {
                console.error("Error:", status);
            }
        });
    }

    // Add event listener to the button for calculating distance
    document.getElementById("calculateDistance").addEventListener("click", calculateDistance);
}
