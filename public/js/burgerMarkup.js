// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".eatSubmit").on("click", function(event) {
    var id = $(this).data("id");

    var newEatState = {
      devoured: 1
    };
  
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed burger status to Eaten");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
   
    $(".replaceSubmit").on("click", function(event) {
    var id = $(this).data("id");

    var newEatState = {
      devoured: 0
    };    

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed burger status to replaced");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".createForm").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#name").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});


  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE",
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
