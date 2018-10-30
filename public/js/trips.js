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
     
    };
    $.ajax("/api/trips", {
      type: "POST",
      data: newTrip
    }).then(
      function () {
        console.log("created new trip");
        //console.log(data);
        $("#message").text("Trip Added Succesfully");
        $("#add-destination-btn").attr("style", "display:block");
        $("#save-trip-btn").attr("style", "display:none");
        $("#add-destination").attr("style", "display:block");
        // Reload the page to get the updated list
        //location.reload();
      });
  })

  $("#add-destination-btn").on("click", function(){
   alert("ok");
    $.ajax("/destinations/countries",{
      type: "GET"
    }).then(renderCountries);

  });
  function renderCountries(data) {
    var countrySelect = $("#countries");
    if (!data.length) {
      window.location.href = "/authors";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createAuthorRow(data[i]));
    }
    countrySelect.empty(); 
    countrySelect.append(rowsToAdd);
    countrySelect.val();
  }
  
  // Creates the author options in the dropdown
  function createAuthorRow(country) {
    var listOption = $("<option>");
    listOption.attr("value", country.id);
    listOption.text(country.name);
    return listOption;
  }
});


