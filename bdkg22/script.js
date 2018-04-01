function get_k() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);

/*
    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;
*/

    var d = a + b + c;

    document.getElementById('result').value = d;
}
