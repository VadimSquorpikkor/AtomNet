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


/*
function settable_old() {
    var t = document.getElementById("table1");
    var trs = t.getElementsByTagName("tr");
    var tds = null;

    for (var i = 0; i < trs.length; i++) {
        tds = trs[i].getElementsByTagName("td");
        for (var n = 0; n < trs.length; n++) {
            tds[n].innerHTML = "<div>Hi!</div>"
        }
    }
}
*/
/*
function set_all_textview() {
    document.getElementById('percent1').value = percent1;
    document.getElementById('percent2').value = percent2;
    document.getElementById('percent3').value = percent3;
    document.getElementById('percent4').value = percent4;
}*/

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

/*function okmessage() {
    document.getElementById('percent1').value = "working!!!";
}*/

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

    //set_all_textview();

    document.getElementById('u_10').value = u_10.toFixed(2);
    document.getElementById('u_70').value = u_70.toFixed(2);
    document.getElementById('u_700').value = u_700.toFixed(2);
    document.getElementById('u_3000').value = u_3000.toFixed(2);

    settable();

}

function settable() {
    let t = document.getElementById("table1");
    let trs = t.getElementsByTagName("tr");

    let tds = trs[1].getElementsByTagName("td");
    {
        tds[2].innerHTML = u_10.toFixed(2);
        tds[3].innerHTML = h_1.toFixed(2);
        tds[4].innerHTML = percent1.toFixed(2);
    }
    tds = trs[2].getElementsByTagName("td");
    {
        tds[2].innerHTML = u_70.toFixed(2);
        tds[3].innerHTML = h_2.toFixed(2);
        tds[4].innerHTML = percent2.toFixed(2);
    }
    tds = trs[3].getElementsByTagName("td");
    {
        tds[2].innerHTML = u_700.toFixed(2);
        tds[3].innerHTML = h_3.toFixed(2);
        tds[4].innerHTML = percent3.toFixed(2);
    }
    tds = trs[4].getElementsByTagName("td");
    {
        tds[2].innerHTML = u_3000.toFixed(2);
        tds[3].innerHTML = h_4.toFixed(2);
        tds[4].innerHTML = percent4.toFixed(2);
    }

}

function otnos_pogresh(point, izmer) {
    return (izmer-point)/point*100;
}

function dov_granica(pogresh) {
    return 1.1*Math.sqrt(4*4 + pogresh*pogresh);
}

function calc_bdkg27_pogr() {
    let g1 = parseFloat(document.getElementById('g1').value);
    let g2 = parseFloat(document.getElementById('g2').value);
    let g3 = parseFloat(document.getElementById('g3').value);
    let g4 = parseFloat(document.getElementById('g4').value);

    let t = document.getElementById("table2");
    let trs = t.getElementsByTagName("tr");
    let tmp;

    let tds = trs[1].getElementsByTagName("td");
    {
        tds[0].innerHTML = g1;
        tds[1].innerHTML = g1;
        tmp = otnos_pogresh(0.07, g1);
        tds[2].innerHTML = tmp.toFixed(2);
        tds[3].innerHTML = dov_granica(tmp).toFixed(2);
    }
    tds = trs[2].getElementsByTagName("td");
    {
        tds[0].innerHTML = g2;
        tds[1].innerHTML = g2;
        tmp = otnos_pogresh(0.7, g2);
        tds[2].innerHTML = tmp.toFixed(2);
        tds[3].innerHTML = dov_granica(tmp).toFixed(2);
    }
    tds = trs[3].getElementsByTagName("td");
    {
        tds[0].innerHTML = g3;
        tds[1].innerHTML = g3;
        tmp = otnos_pogresh(7, g3);
        tds[2].innerHTML = tmp.toFixed(2);
        tds[3].innerHTML = dov_granica(tmp).toFixed(2);
    }
    tds = trs[4].getElementsByTagName("td");
    {
        tds[0].innerHTML = g4;
        tds[1].innerHTML = g4;
        tmp = otnos_pogresh(10, g4);
        tds[2].innerHTML = tmp.toFixed(2);
        tds[3].innerHTML = dov_granica(tmp).toFixed(2);
    }
}
