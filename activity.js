//Общий метод для активности любого радиоактивного вещества
//Параметры: активность в день поверки(А0), кол-во дней прошедших с момента поверки, период полураспада
function activity(a0, pov_date, t_pol) {
    let days_left = (new Date().getTime() - pov_date.getTime()) / (1000*60*60*24);
    let act = a0 * Math.exp(-0.693147/t_pol * days_left);
    return act.toFixed(3);
}

function activityAllDays(a0, pov_date, now_date, t_pol) {
    let days_left = (now_date.getTime() - pov_date.getTime()) / (1000*60*60*24);
    let act = a0 * Math.exp(-0.693147/t_pol * days_left);
    return act.toFixed(4);
}
//----------------------------------------------------------------------------------------------------------------------

//День поверки источника (начало отсчета распада)
//yyyy.mm.dd  месяц начинается с 0, февраль — это 1
const pov_date_cs = new Date(2016,9,12); //у Cs 516-520 одинаковый день поверки
const pov_date_2910 = new Date(2016,4,17);
const pov_date_cd_1079_dlya_raschetov = new Date(2020,2,3);
const pov_date_cd_1079 = new Date(2018,9,15);
const pov_date_cd_1080 = new Date(1,1,1);
const pov_date_cs_1121_23_04 = new Date(2019,0,30);

//Период полураспада в днях
const t_pol_cs = 365.2422*30.17;
const t_pol_cd = 461.4;

//Активность источников в день поверки
const a0_516 = 91.3;
const a0_517 = 88.8;
const a0_518 = 94.6;
const a0_519 = 88.2;
const a0_520 = 91.3;
const a0_521 = 93.5;
const a0_2910 = 67.7;
const a0_831 = 107;
const a0_832 = 105;
const a0_833 = 98;
const a0_1079 = 525;
const a0_1080 = 0;

//2016.10.12
//Частный случай для активности цезия 137-го
function activity_of_cs137(a0) {
    return activity(a0, pov_date_cs, t_pol_cs);
}
//Частный случай для активности 2910 источника 137-го
function activity_of_2910() {
    return activity(a0_2910, pov_date_2910, t_pol_cs);
}
function activity_of_cd109(a0, pov_date) {
    return activity(a0, pov_date, t_pol_cd);
}


//Вывод активностей для каждого из источников на сегодняшний день
function get_act() {
    set_num();
    document.getElementById('516').textContent = activity_of_cs137(a0_516);
    document.getElementById('517').textContent = activity_of_cs137(a0_517);
    document.getElementById('518').textContent = activity_of_cs137(a0_518);
    document.getElementById('519').textContent = activity_of_cs137(a0_519);
    document.getElementById('520').textContent = activity_of_cs137(a0_520);
    document.getElementById('521').textContent = activity_of_cs137(a0_521);
    document.getElementById('2910').textContent = activity_of_2910();
    document.getElementById('831').textContent = activity_of_cs137(a0_831);
    document.getElementById('832').textContent = activity_of_cs137(a0_832);
    document.getElementById('833').textContent = activity_of_cs137(a0_833);
    document.getElementById('1079').textContent = activity(a0_1079, pov_date_cd_1079, t_pol_cd);
    document.getElementById('1080').textContent = activity(a0_1080, pov_date_cd_1080, t_pol_cd);
}

//Сумарная активность всех источников
function get_all_activities() {
    document.getElementById('sum_activity').value = activity_of_cs137(a0_516)*1 +
        activity_of_cs137(a0_517)*1+
        activity_of_cs137(a0_518)*1+
        activity_of_cs137(a0_519)*1+
        activity_of_cs137(a0_520)*1+
        activity_of_cs137(a0_521)*1;
}

//----------------------------------------------------------------------------------------------------------------------
function get_cd_1123() {
    document.getElementById('cd').value = activity(50, pov_date_cd_1079_dlya_raschetov, t_pol_cd);
    document.getElementById('cs_1123_2910').value = activity(33, pov_date_cs_1121_23_04, t_pol_cs);
    document.getElementById('cs_1123_516').value  = activity(45, pov_date_cs_1121_23_04, t_pol_cs);
}
//----------------------------------------------------------------------------------------------------------------------
const KOEF_CS_BDKG_04 = 0.5192;
const KOEF_CD_BDKG_04 = 0.24404;

function set_activity_bdkg_04() {
    //расчетный коэффициент для 516 - 0.5196, для 2910 - 0.5187, взял среднее: 0.5192. Чтобы помнить:
    //если активность начальная источников была разной и/или дата поверки отличается, коэффициент будет всё равно
    //одинаковый, отличаться будет для источников с разным периодом полураспада

    let act_1079 = (activity_of_cd109(a0_1079, pov_date_cd_1079) * KOEF_CD_BDKG_04).toFixed(3);
    let act_1080 = (activity_of_cd109(a0_1080, pov_date_cd_1080) * KOEF_CD_BDKG_04).toFixed(3);
    let act_516  = (activity_of_cs137(a0_516) * KOEF_CS_BDKG_04).toFixed(3);
    let act_517  = (activity_of_cs137(a0_517) * KOEF_CS_BDKG_04).toFixed(3);
    let act_518  = (activity_of_cs137(a0_518) * KOEF_CS_BDKG_04).toFixed(3);
    let act_519  = (activity_of_cs137(a0_519) * KOEF_CS_BDKG_04).toFixed(3);
    let act_520  = (activity_of_cs137(a0_520) * KOEF_CS_BDKG_04).toFixed(3);
    let act_521  = (activity_of_cs137(a0_521) * KOEF_CS_BDKG_04).toFixed(3);
    let act_2910 = (activity_of_2910() * KOEF_CS_BDKG_04).toFixed(3);

    switch (document.getElementById('drop_down').value) {
        case '1': document.getElementById('output').value = act_2910;break;
        case '2': document.getElementById('output').value = act_516; break;
        case '3': document.getElementById('output').value = act_517; break;
        case '4': document.getElementById('output').value = act_518; break;
        case '5': document.getElementById('output').value = act_519; break;
        case '6': document.getElementById('output').value = act_520; break;
        case '7': document.getElementById('output').value = act_521; break;
    }

    switch (document.getElementById('drop_down_2').value) {
        case '1': document.getElementById('output_2').value = act_2910;break;
        case '2': document.getElementById('output_2').value = act_516; break;
        case '3': document.getElementById('output_2').value = act_517; break;
        case '4': document.getElementById('output_2').value = act_518; break;
        case '5': document.getElementById('output_2').value = act_519; break;
        case '6': document.getElementById('output_2').value = act_520; break;
        case '7': document.getElementById('output_2').value = act_521; break;
    }

    /*switch (document.getElementById('drop_down_cd').value) {
        case '1': document.getElementById('output_cd').value = act_1079; break;
        case '2': document.getElementById('output_cd').value = act_1080; break;
    }

    switch (document.getElementById('drop_down_cd_2').value) {
        case '1': document.getElementById('output_cd_2').value = act_1079; break;
        case '2': document.getElementById('output_cd_2').value = act_1080; break;
    }*/

    document.getElementById('cd').value   = act_1079;
    document.getElementById('cd_2').value = act_1079;
}
//----------------------------------------------------------------------------------------------------------------------

function set_act_1121() {
    document.getElementById('cd').value = (activity_of_cd109(a0_1079, pov_date_cd_1079) * 0.1627).toFixed(3);
    document.getElementById('cs_1121_2910').value = (activity_of_2910() * 0.3615).toFixed(3);
    document.getElementById('cs_1121_516').value  = (activity_of_cs137(a0_516) * 0.3695).toFixed(3);
}
//----------------------------------------------------------------------------------------------------------------------
function get_act_204() {
    document.getElementById('cd').value  = activity(35, pov_date_cd_1079_dlya_raschetov, t_pol_cd); //yyyy.mm.dd  месяц начинается с 0
    document.getElementById('cd2').value = activity(3.3, new Date(2018,11,15), t_pol_cd); //yyyy.mm.dd  месяц начинается с 0
    document.getElementById('cs').value  = activity(23, new Date(2018,12,15), t_pol_cs);
}
//----------------------------------------------------------------------------------------------------------------------

function get_cs_1121() {
        let res = parseFloat(document.getElementById('cs_1121').value);
        let ans = (res-12)*9/7;
        document.getElementById('res_cs_1121').value = ans.toFixed(2);
}

function resistor_bdkn_03() {
    let res37 = parseInt(document.getElementById('r_37').value);
    let res36 = parseInt(document.getElementById('r_36').value);
    let channel = parseInt(document.getElementById('channel').value);
    let div = -(res36 + res37)/(1 + (20000/(20000 + res36 + res37)*(channel/(259 - channel))));
    let new37 = res37 + div;
    let summa = res36 + new37;
    let res37calc = summa - res36;
    let res36calc = summa - res37;

    document.getElementById('r_37_calc').value = res37calc.toFixed(2);
    document.getElementById('r_36_calc').value = res36calc.toFixed(2);
}

// todo сделать нормально Float не нужен и округление тоже
function get_cs_04() {
    let res = parseFloat(document.getElementById('cs_04').value);
    let ans = 71 - res;
    document.getElementById('res_cs_04').value = ans.toFixed(2);
}

/*function get_all() {
    get_act();
    get_all_activities();
    get_cd_1123();
    alert("ok");//getDataFromFile();
}*/

//region getDataFromFile()
function getDataFromFile() {
    // const fs = require('fs')

// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be
// other character set also like 'ascii'


    /*fs.readFile('Input.txt', 'utf-8', (err, data) => {
        if (err) throw err;

        // Converting Raw Buffer to text
        // data using tostring function.
        Alert(data);
    })*/

    // let f = new FileReader();
    // f.onloadend = function(){
        // console.log("success");
        // alert("ok");
    // }

    // var client = new XMLHttpRequest();
    // client.open('GET', '/Input.txt');
    // client.onreadystatechange = function() {
    //     alert(client.responseText);
    // }
    // client.send();
    // alert(client.responseText)


    let reader = new FileReader;
    let file = new File(["foo"], `Input.txt`);
    // type: "text/plain",
    reader.readAsText(file);
    //reader.result;
    alert(reader.result);

}
//endregion

function get_path() {
    open("AtomNet/menu/menu.html")
}

function calc_act() {
    let pov_date = new Date(document.getElementById('date').value);
    let now_date = new Date(document.getElementById('date_now').value);
    let act0 = document.getElementById('act0').value;

    let rad = document.getElementsByName('r1');
    if (rad[2].checked) {
        document.getElementById('act_main').value = activityAllDays(act0, pov_date, now_date, t_pol_cd);
    } else if (rad[3].checked) {
        document.getElementById('act_main').value = activityAllDays(act0, pov_date, now_date, t_pol_cs);
    }else if (rad[4].checked) {
        document.getElementById('act_main').value = activityAllDays(act0, pov_date, now_date, document.getElementById('custom').value);
    }
}


function set_num() {
    document.getElementsByName('r1')[2].checked = true;
    document.getElementById('act0').value = 90;
    document.getElementById('date').value = "2018-02-12";
    document.getElementById('date_now').valueAsDate = new Date();
}

