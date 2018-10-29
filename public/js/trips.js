// $("#add-trip-btn").on("click", function () {

// })

$(document).ready(function () {
console.log("I made it to trips.js")

  $("#save-trip-btn").on("click", function () {
    console.log("made it to button click")
    event.preventDefault();
    var newTrip = {
      tripName: $("#tripName"),
      tripStartDate: $("#tripStartDate"),
      tripEndDate: $("#tripEndDate")
      // dateFrom: $("#dateFrom"),
      // dateTo: $("#dateTo"),
      // country: $("destinationCountry"),
      // state: $("destinationState"),
      // city: $("destinationCity"),
    };
    $.ajax("/api/trips", {
      type: "POST",
      data: JSON.stringify(newTrip)
    }).then(
      function () {
        console.log("created new trip");
        console.log(data);
        // Reload the page to get the updated list
        location.reload();
      });
  })
});