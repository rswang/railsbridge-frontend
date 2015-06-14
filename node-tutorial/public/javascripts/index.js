$(document).ready(function() {
    $("#go-btn").click(function() {
        $.ajax({
            type: "POST",
            url: "/person",
            data: {
                name: $("#name").val(),
                age: $("#age").val()
            },
            success: function(data) {
                    $("ul").append("<li>" + data.name + "</li>");
               
            }
        });
    });

    $("#get-btn").click(function() {
        $.ajax({
            type: "GET",
            url: "/person",
            success: function(people) {
                for (var i = 0; i < people.length; i++) {
                    $("ul").append("<li>" + people[i].name + "</li>");
                }
            }
        });
    });

})