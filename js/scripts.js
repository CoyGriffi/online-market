$(document).ready(function() {
  $("#customerInfo").submit(function() {
    event.preventDefault();
    const firstInput= $("input#first").val();
    const lastInput= $("input#last").val();
    const addressInput= $("input#address").val();

    $(".first").text(firstInput);
    $(".last").text(lastInput);
    $(".address").text(addressInput);

    $("#tytxt").show();
  });
});