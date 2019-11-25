$(document).ready(function () {
  $('input:checkbox').click(function () {
    $('input:checkbox').not(this).prop('checked', false);
  });
});

function myFunction(name) {
  document.getElementById("main-h2").innerHTML = "FIND A SUITABLE " + name + " IN YOUR LOCATION";
  document.getElementById("btn-search").innerHTML = name + " Search";
  document.getElementById("doc").innerHTML = name + " in Mumbai";
  document.getElementById("doc2").innerHTML = name + " in Mumbai";
  document.getElementById("doc3").innerHTML = name + " in Mumbai";
  document.getElementById("doc4").innerHTML = name + " in Mumbai";

}