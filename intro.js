var name = "Rachel";
var num = 1;
var colors = ["red", "blue", "green"];
var color_map = {
    "#ff0000": "red",
    "#00ff00": "blue",
    "#0000ff": "green"
};

for (var i = 0; i < 10; i++) {
    num++;
}

while (num < 10) {
    num--;
}

console.log("testing");

var print_name = function(name) {
    console.log("My name is " + name);
}