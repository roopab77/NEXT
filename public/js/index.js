 
 $.ajax({
   type: "GET",
   url: "/loggedIn"
 }).then(
   function (data) {
     console.log("This is the UserName", data);
     if (data.id) {
       //alert("here");
       $("#sign-up-btn").attr("style", "display:none");
       $("#sign-in-btn").attr("style", "display:none");
     }
   });

 $("#saveTrip").on("click", function () {
       alert("I am here");
       var newtrip = {
         tripName: $("#tripName").val().trim(),
         completed: false,
         tripStartDate: $("#tripStartDate").val().trim(),

         tripEndDate: $("#tripEndDate").val().trim(),
       };
       $.ajax({
           method: "POST",
           url: "/trips",
           data: newtrip
         })
         .then(function () {
           alert("Trip added succesfully");
         });
     });
//Sign UP
$("#sign-up-btn").on("click",function(){
  
  
})
