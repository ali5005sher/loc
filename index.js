const longitude = document.querySelector(".longitude");
const latitude = document.querySelector(".latitude");

// Check if the browser supports Geolocation
if (navigator.geolocation) {
  // Get the current location
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function (position) {
      console.log("Latitude: " + position.coords.latitude);
      latitude.textContent += position.coords.latitude;
      console.log("Longitude: " + position.coords.longitude);
      longitude.textContent += position.coords.latitude;
      //   console.log(coords);
    },
    // Error callback
    function (error) {
      console.error("Error getting location: " + error.message);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}
