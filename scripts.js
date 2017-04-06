// input
var input1 = document.getElementById('t1');
var input2 = document.getElementById('t2');
var input3 = document.getElementById('t3');
var input4 = document.getElementById('t4');
var inputX1 = document.getElementById('x1');
var inputX2 = document.getElementById('x2');
var x1, x2;

// output
var input5 = document.getElementById('t5');
var input6 = document.getElementById('t6');

var compareForecase = function(t, f) {
    console.log(x)
    var r;
    if(t === f) return f;
    Math.max(t, f) === t ? r = (f + (f * x)) * .6 + f * .4 : r = (f - (f * x)) * .6 + f * .4;
    return r;
}

var result = function() {
    var t1 = parseFloat(input1.value);
    var t2 = parseFloat(input2.value);
    var t3 = parseFloat(input3.value);
    var t4 = parseFloat(input4.value);
    var t5, t6;
    var f1, f2, f3, f4, f5, f6;

    var T1, T2; // trung binh t2 -> t4;
    var F1, F2; // trung binh f2 -> f4

    f1 = t1;
    f2 = f1 * .4 + t2 * .6;
    f3 = f2 * .4 + t3 * .6;
    f4 = f3 * .4 + t4 * .6;
    
    T1 = (t2 + t3 + t4) / 3;
    F1 = (f2 + f3 + f4) / 3;
    x1 = T1 - F1;

    t5 = f4 + x1;
    f5 = t5 * .6 + f4 * .4

    T2 = (t2 + t3 + t4 + t5) / 4;
    F2 = (f2 + f3 + f4 + f5) / 4;
    x2 = T2 - F2;

    t6 = f5 + x2

    console.log(T1, T2, F1, F2)

    inputX1.innerHTML = x1;
    inputX2.innerHTML = x2;
    input5.innerHTML = t5;
    input6.innerHTML = t6;
}

document.getElementById('submit').addEventListener('click', result)