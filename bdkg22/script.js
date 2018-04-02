function get_k() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);

/*
    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;
*/


    document.getElementById('result').value = (a - b/(2.6 * c)) * 100;
}
