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

const pov_date_cs = new Date(2016,9,12);    //yyyy.mm.dd  месяц начинается с 0
const pov_date_2910 = new Date(2016,4,17);    //yyyy.mm.dd  месяц начинается с 0
const pov_date_800 = new Date(2019,9,17);    //yyyy.mm.dd  месяц начинается с 0
const pov_date_cd_1079 = new Date(2019,0,30);
const pov_date_cd_1079_version2 = new Date(2019,2,18);  //такое значение давалоотличный результат. Дата была 14 и 22, я взял среднее
const t_pol_cs = 365.2422*30.17;              //Период полураспада цезия 137 в днях
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


//2016.10.12
//Частный случай для активности цезия 137-го
function activity_of_cs137(a0) {
    return activity(a0, pov_date_cs, t_pol_cs);
}

function activity_of_2910() {
    return activity(a0_2910, pov_date_2910, t_pol_cs);
}
//Вывод активностей для каждого из источников на сегодняшний день
function get_act() {
    set_num();
    // document.getElementById('516').value = days_left();
    document.getElementById('516').value = activity_of_cs137(a0_516);
    document.getElementById('517').value = activity_of_cs137(a0_517);
    document.getElementById('518').value = activity_of_cs137(a0_518);
    document.getElementById('519').value = activity_of_cs137(a0_519);
    document.getElementById('520').value = activity_of_cs137(a0_520);
    document.getElementById('521').value = activity_of_cs137(a0_521);
    document.getElementById('2910').value = activity_of_2910();
    document.getElementById('831').value = activity_of_cs137(a0_831);
    document.getElementById('832').value = activity_of_cs137(a0_832);
    document.getElementById('833').value = activity_of_cs137(a0_833);
    document.getElementById('1079').value = activity(525, new Date(2018,9,15), t_pol_cd);
}

//Сумарная активность всех источников
function get_all_activities() {
    document.getElementById('sum_activity').value = activity_of_cs137(a0_516)*1 +
        activity_of_cs137(a0_517)*1+
        activity_of_cs137(a0_518)*1+
        activity_of_cs137(a0_519)*1+
        activity_of_cs137(a0_520)*1+
        activity_of_cs137(a0_521)*1;
        // 10;
}

function get_cd_1123() {
    document.getElementById('cd').value = activity(81, pov_date_cd_1079, t_pol_cd);
    document.getElementById('cs_1123_2910').value = activity(33, pov_date_cd_1079, t_pol_cs);
    document.getElementById('cs_1123_516').value = activity(45, pov_date_cd_1079, t_pol_cs);

}

function get_cs_bdkg04() {
    // document.getElementById('cd').value = activity(81, pov_date_cd_1079, t_pol_cd);
    document.getElementById('cd').value = activity(85, pov_date_cd_1079_version2, t_pol_cd);
    document.getElementById('cs_1123_2910').value = activity(33, pov_date_cd_1079, t_pol_cs);
    document.getElementById('cs_1123_516').value = activity(45, pov_date_cd_1079, t_pol_cs);
    document.getElementById('cs_1123_516_2').value = activity(45, pov_date_cd_1079, t_pol_cs);
    document.getElementById('cs_1123_2910_2').value = activity(33, pov_date_cd_1079, t_pol_cs);
    // document.getElementById('cd_2').value = activity(81, pov_date_cd_1079, t_pol_cd);
    document.getElementById('cd_2').value = activity(85, pov_date_cd_1079_version2, t_pol_cd);

}

function get_cd_1121() {
    document.getElementById('cd').value = activity(61, pov_date_cd_1079, t_pol_cd);
    document.getElementById('cs_1121_2910').value = activity(23, pov_date_cd_1079, t_pol_cs);
    document.getElementById('cs_1121_516').value = activity(32, pov_date_cd_1079, t_pol_cs);

}

function get_act_204() {
    document.getElementById('cd').value = activity(63, new Date(2018,11,15), t_pol_cd); //yyyy.mm.dd  месяц начинается с 0
    document.getElementById('cd2').value = activity(3.3, new Date(2018,11,15), t_pol_cd); //yyyy.mm.dd  месяц начинается с 0
    document.getElementById('cs').value = activity(23, new Date(2018,12,15), t_pol_cs);

}

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

function get_all() {
    get_act();
    get_all_activities();
    get_cd_1123();

}

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

function exp_all() {
    for (let item of document.getElementsByTagName("details")) {
        item.open = !item.open;
    }
}

function set_num() {
    document.getElementsByName('r1')[2].checked = true;
    document.getElementById('act0').value = 90;
    document.getElementById('date').value = "2018-02-12";
    document.getElementById('date_now').valueAsDate = new Date();
}

