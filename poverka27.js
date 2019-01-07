let u_7sv;
let u_10;
let u_70;
let u_700;
let u_3000;
let h_1;
let h_2;
let h_3;
let h_4;
let a1;
let a2;
let a3;
let b1;
let b2;
let b3;
let c1;
let c2;
let c3;
let d1;
let d2;
let d3;
let percent1;
let percent2;
let percent3;
let percent4;

function operation() {
/*
    var td1 = document.getElementById('table1').getElementsByTagName('td');
    var tr2 = document.getElementById('table1').getElementsByTagName('tr');

    var td2 = tr2.getElementsByTagName('td');
    var value = parseFloat(td2.innerHTML) / parseFloat(td1.innerHTML)
    td2.innerHTML = value;

    percent1 = 23;
*/

    var tr2 = document.getElementById('table1').getElementsByTagName('tr');

    var td2 = tr2.getElementsByTagName('td');
    var value = 100 / 5;
    td2.innerHTML = value;

    document.getElementById('percent1').value = "working!!!";
    // set_all_textview();
}

function settable() {
    var t = document.getElementById("table1");
    var trs = t.getElementsByTagName("tr");
    var tds = null;

    for (var i=0; i<trs.length; i++)
    {
        tds = trs[i].getElementsByTagName("td");
        for (var n=0; n<trs.length;n++)
        {
            tds[n].innerHTML = "<div>Hi!</div>"
        }
    }
}


function set_all_textview() {
    document.getElementById('percent1').value = percent1;
    document.getElementById('percent2').value = percent2;
    document.getElementById('percent3').value = percent3;
    document.getElementById('percent4').value = percent4;
}

function set_all_var() {
    u_7sv = parseFloat(document.getElementById('u_7sv').value);

    a1 = parseFloat(document.getElementById('a1').value);
    a2 = parseFloat(document.getElementById('a2').value);
    a3 = parseFloat(document.getElementById('a3').value);
    b1 = parseFloat(document.getElementById('b1').value);
    b2 = parseFloat(document.getElementById('b2').value);
    b3 = parseFloat(document.getElementById('b3').value);
    c1 = parseFloat(document.getElementById('c1').value);
    c2 = parseFloat(document.getElementById('c2').value);
    c3 = parseFloat(document.getElementById('c3').value);
    d1 = parseFloat(document.getElementById('d1').value);
    d2 = parseFloat(document.getElementById('d2').value);
    d3 = parseFloat(document.getElementById('d3').value);


}

function average_of_3(first, second, third) {
    return (first + second + third) / 3;
}

function okmessage() {
    document.getElementById('percent1').value = "working!!!";
}

function calc_bdkg27() {
    set_all_var();

    u_10 = 10 * u_7sv / 7;
    u_70 = u_7sv;
    u_700 = u_7sv;
    u_3000 = 30 * u_7sv / 7;

    h_1 = average_of_3(a1, a2, a3);
    h_2 = average_of_3(b1, b2, b3);
    h_3 = average_of_3(c1, c2, c3);
    h_4 = average_of_3(d1, d2, d3);

    percent1 = (10 - h_1) / 10 * 100;
    percent2 = (70 - h_2) / 70 * 100;
    percent3 = (700 - h_3) / 700 * 100;
    percent4 = (3000 - h_4) / 3000 * 100;

    set_all_textview();

}