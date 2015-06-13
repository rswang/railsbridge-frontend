$(document).ready(function() {
    
    $("#go-btn").click(function() {

        var username = $("#username-input").val();

        $.ajax({
            type: "GET",
            url: "https://api.github.com/users/" + username,
            success: function(data) {
                $("#response").show();
                $("#error").text("");
                if (!data.name) {
                    $("#name").text(data.login);
                } else {
                    $("#name").text(data.name);
                }
                $("#avatar").attr("src", data.avatar_url);
                $("#public-repos").text(data.public_repos);
                $("#username").text(data.login);

                console.log(data.name);
                console.log(data.avatar_url);
                console.log(data.public_repos);
                console.log(data.login);
            },
            error: function(jqXHR, textStatus, error) {
                if (error == "Not Found") {
                    $("#response").hide();
                    $("#error").text("Username not found");
                }
            }
        })
    })

})