$(document).ready(function(){
    $("#list").submit(function(event){

      var inputs = ["inputField1", "inputField2", "inputField3"];

      var groceryList = inputs.map(function(input) {
        return $("#" + input).val().toUpperCase();
      });

      console.log(groceryList);

      groceryList.sort().forEach(function(grocery) {

        $("#output").append("<li>" + grocery + "</li>");

        });
      event.preventDefault();
    });

});
