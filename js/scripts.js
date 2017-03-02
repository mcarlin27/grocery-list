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
    var ice-cream = ($("input#ice-cream").val());
    var bread = ($("input#bread").val());

    var userInput = [milk, nuts, collards, kale, corn, eggplant, okra, sweet, ice-cream, bread];

    $("#result").append(userInput);

  });
});
