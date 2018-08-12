//Общий метод для активности любого радиоактивного вещества
//Параметры: активность в день поверки(А0), кол-во дней прошедших с момента поверки, период полураспада
function activity(a0, days_left, t_pol) {
    return a0 * Math.exp(-0.693/t_pol * days_left);
}

//Частный случай для активности цезия 137-го
function activity_of_cs137(a0, days_left) {
    let t_pol = 365.25 * 30.17;//Период полураспада цезия 137 в днях
    return activity(a0, days_left, t_pol);
}

//Сколько дней прошло со дня поверки источников
function days_left() {
    let pov_date = new Date(2016, 9, 12);
    let today = new Date();
    //Math.floor((today.getTime() - pov_date.getTime()) / (1000*60*60*24));
    return (today.getTime() - pov_date.getTime()) / (1000*60*60*24);
}

//Активность источников в день поверки
const a0_516 = 91.3;
const a0_517 = 88.8;
const a0_518 = 94.6;
const a0_519 = 88.2;
const a0_520 = 91.3;
const a0_521 = 93.5;

//Вывод активностей для каждого из источников на сегодняшний день
function get_act() {
    document.getElementById('516').value = activity_of_cs137(a0_516, days_left());
    document.getElementById('517').value = activity_of_cs137(a0_517, days_left());
    document.getElementById('518').value = activity_of_cs137(a0_518, days_left());
    document.getElementById('519').value = activity_of_cs137(a0_519, days_left());
    document.getElementById('520').value = activity_of_cs137(a0_520, days_left());
    document.getElementById('521').value = activity_of_cs137(a0_521, days_left());
}

//Сумарная активность всех источников
function get_all_activities() {
    document.getElementById('sum_activity').value =
        activity_of_cs137(a0_516, days_left())+
        activity_of_cs137(a0_517, days_left())+
        activity_of_cs137(a0_518, days_left())+
        activity_of_cs137(a0_519, days_left())+
        activity_of_cs137(a0_520, days_left())+
        activity_of_cs137(a0_521, days_left());
}

