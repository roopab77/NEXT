// $("#add-trip-btn").on("click", function () {

// })

$(document).ready(function () {
console.log("I made it to trips.js")

  $("#save-trip-btn").on("click", function () {
    console.log("made it to button click")
    event.preventDefault();
    var newTrip = {

      tripName: $("#tripName").val().trim(),
      tripStartDate: $("#tripStartDate").val(),
      tripEndDate: $("#tripEndDate").val()
      // dateFrom: $("#dateFrom"),
      // dateTo: $("#dateTo"),
      // country: $("destinationCountry"),
      // state: $("destinationState"),
      // city: $("destinationCity"),
    };
    $.ajax("/api/trips", {
      type: "POST",
      data: newTrip
    }).then(
      function () {
        console.log("created new trip");
        console.log(data);
        // Reload the page to get the updated list
        location.reload();
      });
  })
});