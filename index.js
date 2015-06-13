$(document).ready(function() {

    $("h1").css("color", "blue");

    $("#name-btn").click(function() {
        $("#name").text("David");
    });

    $("#hide-btn").click(function() {
        $("#hide").hide();
    });

    $('#print-btn').click(function() {
        var name_input = $("#name-input").val();
        name_input += " Goofball";
        $("#name").text(name_input);
    });

    $('#name-input').on("keydown", function(event) {
        if (event.keyCode == 13) {
            var name_input = $("#name-input").val();
            name_input += " Goofball";
            $("#name").text(name_input);
        }
    });


});

