function get_k() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    //Почему let вместо? var

    /*
        if (isNaN(a)==true) a=0;
        if (isNaN(b)==true) b=0;
    */


    document.getElementById('result').value = (a - b / (2.6 * c)) * 100;
}
