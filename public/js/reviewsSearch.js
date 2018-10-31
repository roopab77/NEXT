$(document).ready(function () {

      $("#searchButton").on("click", function (event) {
            event.preventDefault();
           let searchedReview = $("#searchedPlace").val().trim();
           console.log("Searched Review")
           console.log(searchedReview);
          
           
           $.get("/reviews-searching/" + searchedReview, function (data){
            
            document.write(data);
           }

            )})});