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

    $("#sendButton").click(function(event){
        var names=$("#names").val();
        var email=$("#email").val();
        var message=$("#textArea").val();
        if((names==="")||(email==="")||(message==="")){
            alert("Please, fill the required fields!");
        }
        else{
            alert(names+", we have received your message. Thank you for reaching out to us!");
        }
        
    });
    event.preventDefault();
});