function button1() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num1").innerHTML;
    let newValue = parseInt(value) + 1;
    document.getElementById("num1").innerHTML = newValue;
    document.getElementById("price").innerHTML = priceInt + yogurt;
}

function button2() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num1").innerHTML;
    if (valueValidation(parseInt(value))) {
        let newValue = parseInt(value) - 1;
        document.getElementById("num1").innerHTML = newValue;
        document.getElementById("price").innerHTML = priceInt - yogurt;
    }
}

function button3() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num2").innerHTML;
    let newValue = parseInt(value) + 1;
    document.getElementById("num2").innerHTML = newValue;
    document.getElementById("price").innerHTML = priceInt + pudding;
}

function button4() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num2").innerHTML;
    if (valueValidation(parseInt(value))) {
        let newValue = parseInt(value) - 1;
        document.getElementById("num2").innerHTML = newValue;
        document.getElementById("price").innerHTML = priceInt - pudding;
    }
}

function button5() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num3").innerHTML;
    let newValue = parseInt(value) + 1;
    document.getElementById("num3").innerHTML = newValue;
    document.getElementById("price").innerHTML = priceInt + water;
}

function button6() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num3").innerHTML;
    if (valueValidation(parseInt(value))) {
        let newValue = parseInt(value) - 1;
        document.getElementById("num3").innerHTML = newValue;
        document.getElementById("price").innerHTML = priceInt - water;
    }
}

function button7() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num4").innerHTML;
    let newValue = parseInt(value) + 1;
    document.getElementById("num4").innerHTML = newValue;
    document.getElementById("price").innerHTML = priceInt + chicken;
}

function button8() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num4").innerHTML;
    if (valueValidation(parseInt(value))) {
        let newValue = parseInt(value) - 1;
        document.getElementById("num4").innerHTML = newValue;
        document.getElementById("price").innerHTML = priceInt - chicken;
    }
}

function button9() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num5").innerHTML;
    let newValue = parseInt(value) + 1;
    document.getElementById("num5").innerHTML = newValue;
    document.getElementById("price").innerHTML = priceInt + fish;
}

function button10() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num5").innerHTML;
    if (valueValidation(parseInt(value))) {
        let newValue = parseInt(value) - 1;
        document.getElementById("num5").innerHTML = newValue;
        document.getElementById("price").innerHTML = priceInt - fish;
    }
}

function button11() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num6").innerHTML;
    let newValue = parseInt(value) + 1;
    document.getElementById("num6").innerHTML = newValue;
    document.getElementById("price").innerHTML = priceInt + pork;
}

function button12() {
    let price = document.getElementById("price").innerHTML;
    let priceInt = parseInt(price);
    let value = document.getElementById("num6").innerHTML;
    if (valueValidation(parseInt(value))) {
        let newValue = parseInt(value) - 1;
        document.getElementById("num6").innerHTML = newValue;
        document.getElementById("price").innerHTML = priceInt - pork;
    }
}

var yogurt = 40;
var pudding = 60;
var water = 80;

var chicken = 100;
var fish = 80;
var pork = 120;

function orderConfirmed() {
    var total = document.getElementById("price").innerHTML;
    Swal.fire({
        title: 'Place Order?',
        text: `Total is ${total}!`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
            resetValues();
        }
      });
}

function resetValues() {
    document.getElementById("num1").innerHTML = 0;
    document.getElementById("num2").innerHTML = 0;
    document.getElementById("num3").innerHTML = 0;
    document.getElementById("num4").innerHTML = 0;
    document.getElementById("num5").innerHTML = 0;
    document.getElementById("num6").innerHTML = 0;
    document.getElementById("price").innerHTML = 150;
}

function valueValidation(value) {
    if (value > 0) {
        return true;
    }
    else {
        return false;
    }
}