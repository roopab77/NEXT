
$(document).ready(function (){
  $.ajax("/destinations/countries", {
    type: "GET"
  }).then(function(data){
    var countriestag = $("#countries");
    renderitems(data,countriestag);
  });


  $("#add-destination").on("click",function(){
    var tripID = sessionStorage.getItem('tripID');
    console.log(tripID);
    var newDestination = {
      destinationCountry: $("#countries option:selected").text(),
      destinationState: $("#states option:selected").text(),
      destinationCity: $("#cities option:selected").text(),
      dateFrom: $("#dateFrom").val(),
      dataTO :  $("#dateTo").val()

    };
    console.log(newDestination);
    $.ajax("/destinations", {
      type: "POST",
      data: newDestination
    }).then(
      function (response) {
        console.log("created new destination");
        console.log(response);
      });
  });
});

function getStates(selectedID)
{
  
  const url = "/destinations/states/" + selectedID;

  $.ajax(url, {
    type: "GET"
  }).then(function(data){
    var statesstag = $("#states");
    renderitems(data,statesstag);
  });

}

function getCities(selectedID)
{
  
  const url = "/destinations/cities/" + selectedID;

  $.ajax(url, {
    type: "GET"
  }).then(function(data){
    var citiestag = $("#cities");
    renderitems(data,citiestag);
  });

}

function renderitems(data,htmlitem) {
  var SelectedItem = htmlitem;
  if (!data.length) {
    //window.location.href = "/authors";
  }
  $(".hidden").removeClass("hidden");
  var rowsToAdd = [];
  for (var i = 0; i < data.length; i++) {
    rowsToAdd.push(createRow(data[i]));
  }
  SelectedItem.empty();
  SelectedItem.append(rowsToAdd);
  SelectedItem.val();
}

function createRow(item) {
  var listOption = $("<option>");
  listOption.attr("value", item.id);
  listOption.text(item.name);
  return listOption;
}

