// Your code here!
var date = new Date()
document.body.innerHTML = "<h1> The Date Today is " + (date.getMonth() + 1) + " / " + date.getDate() + " / " + date.getFullYear() + "</h1>"
function myFunction() {
    var date = new Date();
    document.body.innerHTML = "<h1> The Date Today is " + (date.getMonth() + 1) + " / " + date.getDate() + " / " + date.getFullYear() + "</h1>";
    alert("Hello");
}