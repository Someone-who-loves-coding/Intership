let map;

async function initMap() {
  const position = { lat: -25.344, lng: 131.031 };
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "Uluru",
  });
}

initMap();



document.getElementById("addStopButton").addEventListener("click", function() {
  var newInput = document.createElement("input");
  newInput.className = "Black_Icon stop-input";
  newInput.type = "text";
  newInput.name = "stop[]";
  newInput.placeholder = "Add Stops";

  document.querySelector("form").appendChild(newInput);
});