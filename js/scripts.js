var x = 0;
            
document.getElementById("num1").innerHTML = x;
function button1() {
    document.getElementById("num1").innerHTML = ++x;
}
function button2() {
    document.getElementById("num1").innerHTML = --x;
}
document.getElementById("num2").innerHTML = x;
function button3() {
    document.getElementById("num2").innerHTML = ++x;
}
function button4() {
    document.getElementById("num2").innerHTML = --x;
}
document.getElementById("num3").innerHTML = x;
function button5() {
    document.getElementById("num3").innerHTML = ++x;
}
function button6() {
    document.getElementById("num3").innerHTML = --x;
}
document.getElementById("num4").innerHTML = x;
function button7() {
    document.getElementById("num4").innerHTML = ++x;
}
function button8() {
    document.getElementById("num4").innerHTML = --x;
}
document.getElementById("num5").innerHTML = x;
function button9() {
    document.getElementById("num5").innerHTML = ++x;
}
function button10() {
    document.getElementById("num5").innerHTML = --x;
}
document.getElementById("num6").innerHTML = x;
function button11() {
    document.getElementById("num6").innerHTML = ++x;
}
function button12() {
    document.getElementById("num6").innerHTML = --x;
}
            
var y = 150;
document.getElementById("price").innerHTML = y;
            
var yogurt = 40;
var pudding = 60;
var water = 80;
            
var chicken = 100;
var fish = 80;
var pork = 120;
            
function orderConfirmed() {
    /*var span_text = document.getElementById("num1").innerText;
    y = y + (yogurt*span_text);
    document.getElementById("price").innerHTML = y;*/
    alert("Total is " + y)
}