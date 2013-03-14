document.title = data['title'];
var t = document.getElementById("template").innerHTML;
document.getElementById("main").innerHTML = Mustache.render(t, data);