$(document).ready(function () {

    $("#design").click(function () {
        $("#design-descr").toggle();
        $("#design").toggle();
    });
    $("#dev").click(function () {
        $("#dev-descr").toggle();
        $("#dev").toggle();
    });
    $("#product").click(function () {
        $("#prod-descr").toggle();
        $("#product").toggle();
    });
    $("#design-descr").click(function () {
        $("#design").toggle();
        $("#design-descr").toggle();
    });
    $("#dev-descr").click(function () {
        $("#dev").toggle();
        $("#dev-descr").toggle();
    });
    $("#prod-descr").click(function () {
        $("#product").toggle();
        $("#prod-descr").toggle();
    });

    $("#work4").mouseover(function () {
        $("#work4").css('opacity', '0.5');
        $("#dark1").show();
        $("#dark1").addClass("projects");
    });
    $("#work4").mouseleave(function () {
        $("#work4").css('opacity', '1');
        $("#dark1").hide();
    });

    $(".work3").mouseover(function () {
        $(".work3").css('opacity', '0.5');
        $(".ontario").show();
        $(".ontario").addClass("projects");
    });
    $(".work3").mouseleave(function () {
        $(".work3").css('opacity', '1');
        $(".ontario").hide();
    });

    $(".work2").mouseover(function () {
        $(".work2").css('opacity', '0.5');
        $(".polygon").show();
        $(".polygon").addClass("projects");
    });
    $(".work2").mouseleave(function () {
        $(".work2").css('opacity', '1');
        $(".polygon").hide();
    });

    $(".work1").mouseover(function () {
        $(".work1").css('opacity', '0.5');
        $(".jim").show();
        $(".jim").addClass("projects");
    });
    $(".work1").mouseleave(function () {
        $(".work1").css('opacity', '1');
        $(".jim").hide();
    });

    $(".work5").mouseover(function () {
        $(".work5").css('opacity', '0.5');
        $(".elena").show();
        $(".elena").addClass("projects");
    });
    $(".work5").mouseleave(function () {
        $(".work5").css('opacity', '1');
        $(".elena").hide();
    });

    $(".work6").mouseover(function () {
        $(".work6").css('opacity', '0.5');
        $(".form").show();
        $(".form").addClass("projects");
    });
    $(".work6").mouseleave(function () {
        $(".work6").css('opacity', '1');
        $(".form").hide();
    });

    $(".work7").mouseover(function () {
        $(".work7").css('opacity', '0.5');
        $(".burned").show();
        $(".burned").addClass("projects");
    });
    $(".work7").mouseleave(function () {
        $(".work7").css('opacity', '1');
        $(".burned").hide();
    });

    $(".work8").mouseover(function () {
        $(".work8").css('opacity', '0.5');
        $(".giraffe").show();
        $(".giraffe").addClass("projects");
    });
    $(".work8").mouseleave(function () {
        $(".work8").css('opacity', '1');
        $(".giraffe").hide();
    });

    $("#sendButton").click(function () {
        var names = $("#names").val();
        var email = $("#email").val();
        var message = $("#textArea").val();
        if ((names === "") || (email === "") || (message === "")) {
            alert("Please, fill the required fields!");
        }
        else {
            alert(names + ", we have received your message. Thank you for reaching out to us!");
        }

    });
});

