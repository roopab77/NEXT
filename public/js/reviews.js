$(document).ready(function () {
  console.log("I made it to reviews.js")
  
    $("#save-review-btn").on("click", function () {
      console.log("made it to reviews button click")
      event.preventDefault();
      var newReview = {
  
        titleCategory: $("#category").val().trim(),
        rating: $("#rating").val(),
        review: $("#review-input").val()
       
      };
      $.ajax("/api/review", {
        type: "POST",
        data: newReview
      }).then(
        function () {
          console.log("created new review");
          //console.log(data);
          $("#message").text("review Added Succesfully");
          // Reload the page to get the updated list
          //location.reload();
        });
    })
  });