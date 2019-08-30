function dtb() {
    var b = document.getElementById("txt-1").value;
    if (b == "") {
        document.getElementById("alert").innerHTML = "please enter a binary";
    }
    var dec_val = 0;
    var base = 1;
    while (b !== 0) {
        var right = b % 10;
        b = Math.floor(b / 10);
        dec_val = dec_val + right * base;
        base = base * 2;
    }
    document.getElementById("ans").innerHTML = dec_val;
}
//
function check(event) {
    let ascii = event.keyCode;

    if (ascii == 48 || ascii == 49) {
        //alert("please enter only 1 and 0");
        return true;
    } else {
        return false;
    }
}

function binaryConversion(ipu, sentFrom) {
    let n
    if (sentFrom == "letter") {
        n = ipu.keyCode;
    }
    if (sentFrom == "number") {
        const nValue = document.getElementById("txt-1").value;
        if (nValue < 1) {
            throwError("alert", "please enter a number higher than 1");
            return;
        }
        clear("alert");
        n = document.getElementById("txt-1").value;
    }
    const binary = convertToBinary(n);
    printBinary("ans", binary);
}
// /* helper functions
function convertToBinary(n) {
    let binary = [];
    while (n > 0) {
        binary[binary.length] = n % 2;
        n = n / 2;
        n = Math.floor(n);
    }
    let s = "";
    for (let i = binary.length - 1; i >= 0; --i) {
        s += binary[i] + " ";
    }
    return s;
}
//
function clear(control) {
    document.getElementById(control).innerHTML = "";
}
//
function throwError(control, message) {
    document.getElementById(control).innerHTML = message;
}
//
function printBinary(control, message) {
    document.getElementById(control).innerHTML = message;
}
// */