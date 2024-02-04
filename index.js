const longitude = document.querySelector(".longitude");
const latitude = document.querySelector(".latitude");
const data = document.querySelector(".data");
const button = document.querySelector("button");

// Check if the browser supports Geolocation
if (navigator.geolocation) {
  // Get the current location
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function (position) {
      console.log("Latitude: " + position.coords.latitude);
      latitude.textContent += position.coords.latitude;
      console.log("Longitude: " + position.coords.longitude);
      longitude.textContent += position.coords.longitude;
      data.value =
        "latitude: " +
        position.coords.latitude +
        " " +
        "longitude: " +
        position.coords.longitude;

      // Automatically submit the form
      submitForm();
    },
    // Error callback
    function (error) {
      console.error("Error getting location: " + error.message);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}

// Function to submit the form
function submitForm() {
  console.log(
    "Submitting form with Latitude: " +
      latitude.textContent +
      ", Longitude: " +
      longitude.textContent
  );
  button.click();
}
