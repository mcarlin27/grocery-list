$(Document).ready(function(){
  $("form#list").submit(function() {
    event.preventDefault();

    var milk = ($("input#milk").val());
    var nuts = ($("input#nuts").val());
    var collards = ($("input:radio[name=collards]:checked").val());
    var kale = ($("input:radio[name=kale]:checked").val());
    var corn = ($("input:radio[name=corn]:checked").val());
    var eggplant = ($("input:radio[name=egglplant]:checked").val());
    var okra = ($("input:radio[name=okra]:checked").val());
    var sweet = ($("input:radio[name=sweet]:checked").val());
    var iceCream = ($("input#ice-cream").val());
    var bread = ($("input#bread").val());

    var userInput = [milk, nuts, collards, kale, corn, eggplant, okra, sweet, iceCream, bread];
    userInput.sort();

    // var groceries = userInput.map(function(grocery) {
    //   return grocery.toUpperCase();
    // });

    $("form#list").hide();
    $("#result").show();
    $("#grocery-list").append(groceries);


  });
});
