
function change() {
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
console.log(thergb,document.bloc.style.background);
document.body.style.background=thergb;
}
function change() {
var x = Math.floor(Math.random() * 256); // range is 0-255
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
console.log(thergb,document.bloc.style.background);
document.body.style.background=thergb;)