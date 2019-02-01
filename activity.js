//Общий метод для активности любого радиоактивного вещества
//Параметры: активность в день поверки(А0), кол-во дней прошедших с момента поверки, период полураспада

function activity(a0, pov_date, t_pol) {
    let days_left = (new Date().getTime() - pov_date.getTime()) / (1000*60*60*24);
    let act = a0 * Math.exp(-0.693147/t_pol * days_left);
    return act.toFixed(4);
}

const pov_date_cs = new Date(2016,9,12);    //yyyy.mm.dd  месяц начинается с 0
const pov_date_2910 = new Date(2016,4,17);    //yyyy.mm.dd  месяц начинается с 0
const pov_date_cd = new Date(2019,0,30);
const t_pol_cs = 365.25*30.17;              //Период полураспада цезия 137 в днях
const t_pol_cd = 461.4;

//Активность источников в день поверки
const a0_516 = 91.3;
const a0_517 = 88.8;
const a0_518 = 94.6;
const a0_519 = 88.2;
const a0_520 = 91.3;
const a0_521 = 93.5;
const a0_2910 = 67.7;


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
    // document.getElementById('516').value = days_left();
    document.getElementById('516').value = activity_of_cs137(a0_516);
    document.getElementById('517').value = activity_of_cs137(a0_517);
    document.getElementById('518').value = activity_of_cs137(a0_518);
    document.getElementById('519').value = activity_of_cs137(a0_519);
    document.getElementById('520').value = activity_of_cs137(a0_520);
    document.getElementById('521').value = activity_of_cs137(a0_521);
    document.getElementById('2910').value = activity_of_2910();
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
    document.getElementById('cd').value = activity(81, pov_date_cd, t_pol_cd);
}

function get_all() {
    get_act();
    get_all_activities();
    get_cd_1123();
}


