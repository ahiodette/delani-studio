$(document).ready(function(){

    $("#design").click(function(){
        $("#design-descr").toggle();
        $("#design").toggle();
    });
    $("#dev").click(function(){
        $("#dev-descr").toggle();
        $("#dev").toggle();
    });
    $("#product").click(function(){
        $("#prod-descr").toggle();
        $("#product").toggle();
    });
    $("#design-descr").click(function(){
        $("#design").toggle();
        $("#design-descr").toggle();
    });
    $("#dev-descr").click(function(){
        $("#dev").toggle();
        $("#dev-descr").toggle();
    });
    $("#prod-descr").click(function(){
        $("#product").toggle();
        $("#prod-descr").toggle();
    });
});

function mailUs(){
    var names = document.getElementById("names").value;
    alert(names+", we have received your message. Thank you for reaching out to us!");
}