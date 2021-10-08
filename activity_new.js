/**Период полураспада в днях*/
const T_POL_CS_137 = 365.2422 * 30.167;
const T_POL_CD_109 = 461.4;

/**День поверки источника (начало отсчета распада)*/
//yyyy.mm.dd  месяц начинается с 0, февраль — это 1
const POV_DATE_CS = new Date(2016, 9, 12); //у Cs 516-521 одинаковый день поверки
const POV_DATE_2910 = new Date(2016, 4, 17);
const POV_DATE_800 = new Date(2019,9,17);
const POV_DATE_CD_1079 = new Date(2018, 10, 13);
const POV_DATE_CD_1080 = new Date(2018, 10, 13);
const POV_DATE_FOR_DISTANCE = new Date(2021, 0, 25);

/**Активность источников в день поверки (кБк)*/
const A0_516 = 91.3;
const A0_517 = 88.8;
const A0_518 = 94.6;
const A0_519 = 88.2;
const A0_520 = 91.3;
const A0_521 = 93.5;
const A0_2910 = 67.7;
const A0_831 = 107;
const A0_832 = 105;
const A0_833 = 98;
const A0_1079 = 525;
const A0_1080 = 556;

/**Химические элементы*/
let CS_137, CD_109;

/**Источники, которые будут использоваться в инструкциях (ссылки на объекты класса)*/
let cs_2910, cs_516, cs_517, cs_518, cs_519, cs_520, cs_521, cs_831, cs_832, cs_833, cd_1079, cd_1080;

/**Инициализация объектов класса источников и элементов*/
function initializeSource() {
    //Создание объектов класса элементов
    CS_137 = new RA_Element("Cs", 137, T_POL_CS_137);
    CD_109 = new RA_Element("Cd", 109, T_POL_CD_109);
    //Создание объектов класса источников
    cs_2910 = new RA_Source("№2910", CS_137, A0_2910, POV_DATE_2910);
    cs_516 = new RA_Source("№516", CS_137, A0_516, POV_DATE_CS);
    cs_517 = new RA_Source("№517", CS_137, A0_517, POV_DATE_CS);
    cs_518 = new RA_Source("№518", CS_137, A0_518, POV_DATE_CS);
    cs_519 = new RA_Source("№519", CS_137, A0_519, POV_DATE_CS);
    cs_520 = new RA_Source("№520", CS_137, A0_520, POV_DATE_CS);
    cs_521 = new RA_Source("№521", CS_137, A0_521, POV_DATE_CS);
    cs_831 = new RA_Source("№831", CS_137, A0_831, POV_DATE_800);
    cs_832 = new RA_Source("№832", CS_137, A0_832, POV_DATE_800);
    cs_833 = new RA_Source("№833", CS_137, A0_833, POV_DATE_800);
    cd_1079 = new RA_Source("№1079", CD_109, A0_1079, POV_DATE_CD_1079);
    cd_1080 = new RA_Source("№1080", CD_109, A0_1080, POV_DATE_CD_1080);

}
//----------------------------------------------------------------------------------------------------------------------
/**Вывод активностей для каждого из источников на сегодняшний день, вывод блочных ссылок и заполнение калькулятора*/
function set_main_activities() {
    insertCalculatorCode();
    initializeSource();
    initialize_calc();

    /**Вывод активностей для источников на сегодняшний день*/
    document.getElementById('activities_div').innerHTML =
        cs_516.getActivityBlock()+
        cs_517.getActivityBlock()+
        cs_518.getActivityBlock()+
        cs_519.getActivityBlock()+
        cs_520.getActivityBlock()+
        cs_521.getActivityBlock()+
        cs_2910.getActivityBlock()+
        cd_1079.getActivityBlock()+
        cd_1080.getActivityBlock();

    /**Вывод активностей для источников без периодической поверки на сегодняшний день*/
    document.getElementById('activities_div_bez_poverki').innerHTML =
        cs_831.getActivityBlock()+
        cs_832.getActivityBlock()+
        cs_833.getActivityBlock();

    /**Вывод блочных ссылок*/
    document.getElementById('div_for_menu_block').innerHTML =
        getMenuBlock("../srk2327/2327.html", "../imgs/main_menu/2327.jpg", RED,"СРК", "Инструкции, схемы")+
        getMenuBlock("../srk2327/portal.html", "../imgs/main_menu/fura.png", RED,"Портальный Монитор", "Прошивка, настройка")+
        getMenuBlock("../bdkg02/bdkg02.html", "../imgs/bdkg02/cond.jpg", GREEN,"БДКГ-02", "Настройка новых. Ремонт")+
        getMenuBlock("../bdkg22/bdkg22.html", "../imgs/main_menu/bdkg222.jpg", GREEN,"БДКГ-22/23", "Прошивка и настройка")+
        getMenuBlock("../11xx/1103_new.html", "../imgs/main_menu/1103.png", BLUE,"ДКР-1103", "Инструкция по настройке")+
        getMenuBlock("../11xx/1121.html", "../imgs/main_menu/1121.png", BLUE,"ДКС-1121", "Инструкция по настройке")+
        getMenuBlock("../11xx/1123.html", "../imgs/main_menu/1121.png", BLUE,"ДКС-1123", "Инструкция по настройке")+
        getMenuBlock("../sertif_prosh/sertificate.html", "../imgs/main_menu/sertificate.jpg", VIOLET,"Документы", "Инструкции, схемы")+
        getMenuBlock("../sertif_prosh/prosh.html", "../imgs/main_menu/prosh.jpg", VIOLET,"Прошивки", "Список актуальных прошивок")+
        getMenuBlock("../other/plotter.html", "../imgs/plot/p16.jpg", VIOLET,"Наклейки", "Изготовление наклеек")+
        getMenuBlock("../docs/protokol_poverki_i_sert_gotovie", "../imgs/main_menu/archive.jpg", VIOLET,"Архив", "Готовые протоколы и сертификаты");

    /**Вывод Div с рассчитанными расстояниями от источников*/
    insertDistanceCalculator();
    insertKermaDistanceCalculator();
}
//----------------------------------------------------------------------------------------------------------------------
/**Вывод Div с рассчитанными расстояниями от источников
 * let dist = r0 * 2^( -1*days_left / (2*t_pol)) */
function insertDistanceCalculator() {
    //Текущая дата калькулятора активности
    let now_date = new Date(document.getElementById('date_calc').value);
    //Сколько дней прошло со дня поверки
    let days_left = (now_date.getTime() - POV_DATE_FOR_DISTANCE.getTime()) / (1000*60*60*24);
    //Чтобы получить расстояние до источника, нужно начальное расстояние домножить на этот коэффициент. Для Цезия-137
    let koefCs = Math.pow(2,  -1*days_left / (2*T_POL_CS_137));
    document.getElementById('div_for_source_distance').innerHTML = '' +
        '<div style="padding: 5px"><table style="border:none">'+
        '           <tr>' +
        '               <td style="border:none"><div class="red_light_title">H<sup>*</sup>(10), Зв/ч:</div></td>'+
        '               <td style="border:none"><div class="red_light_title">Источник:</div></td>'+
        '               <td style="border:none"><div class="red_light_title">Расстояние:</div></td>'+
        '           </tr>'+
        '           <tr><td colSpan="3" style="border:none"><hr color="ff6633"></td></tr>'+
        /*как будет отображаться МД; как будет отображаться имя источника; R0;  коэффициент, на который домножить, чтобы получить расстояние на текущий день*/
        getDistanceStroke("0.7 мкЗв/ч", "ОНА", 232.30, koefCs) +
        getDistanceStroke("7 мкЗв/ч",   "ОНА", 74.58,  koefCs) +
        getDistanceStroke("70 мкЗв/ч",  "9ХК", 161.37, koefCs) +
        getDistanceStroke("0.7 мЗв/ч",  "9ХК", 51.81,  koefCs) +
        getDistanceStroke("7 мЗв/ч",    "043", 348.90, koefCs) +
        getDistanceStroke("70 мЗв/ч",   "043", 112.10, koefCs) +
        getDistanceStroke("0.7 Зв/ч",   "163", 231.28, koefCs) +
        getDistanceStroke("7 Зв/ч",     "163", 74.51,  koefCs) +
        getDistanceStroke("40 Зв/ч",    "163", 32.25,  koefCs) +
        '   </table></div>';
}

/**Вывод Div с рассчитанными расстояниями от источников для Кермы в воздухе*/
function insertKermaDistanceCalculator() {
    //Текущая дата калькулятора активности
    let now_date = new Date(document.getElementById('date_calc').value);
    //Сколько дней прошло со дня поверки
    let days_left = (now_date.getTime() - POV_DATE_FOR_DISTANCE.getTime()) / (1000*60*60*24);
    //Чтобы получить расстояние до источника, нужно начальное расстояние домножить на этот коэффициент. Для Цезия-137
    let koefCs = Math.pow(2,  -1*days_left / (2*T_POL_CS_137));
    document.getElementById('div_for_source_distance_kerma').innerHTML = '' +
        '<div style="padding: 5px"><table style="border:none">'+
        '           <tr>' +
        '               <td style="border:none"><div class="red_light_title">Керма, Гр/ч:</div></td>'+
        '               <td style="border:none"><div class="red_light_title">Источник:</div></td>'+
        '               <td style="border:none"><div class="red_light_title">Расстояние:</div></td>'+
        '           </tr>'+
        '           <tr><td colSpan="3" style="border:none"><hr color="ff6633"></td></tr>'+
        /*как будет отображаться МД; как будет отображаться имя источника; R0;  коэффициент, на который домножить, чтобы получить расстояние на текущий день*/
        getDistanceStroke("0.7 мкГр/ч", "ОНА", 212.08, koefCs) +
        getDistanceStroke("7 мкГр/ч",   "ОНА", 68.04,  koefCs) +
        getDistanceStroke("70 мкГр/ч",  "9ХК", 147.28, koefCs) +
        getDistanceStroke("0.7 мГр/ч",  "9ХК", 47.26,  koefCs) +
        getDistanceStroke("7 мГр/ч",    "9ТН", 52.92, koefCs) +
        getDistanceStroke("70 мГр/ч",   "043", 102.29, koefCs) +
        getDistanceStroke("0.7 Гр/ч",   "163", 211.21, koefCs) +
        getDistanceStroke("7 Гр/ч",     "163", 67.99,  koefCs) +
        getDistanceStroke("40 Гр/ч",    "163", 29.42,  koefCs) +
        '   </table></div>';
}

function getDistanceStroke(md_name, src_name, r0, koef) {
    let distance = (r0*koef).toFixed(2);
    return '<tr>'+
        '    <td style="border:none"><div class="red_light_title">'+ md_name +'</div></td>'+
        '    <td style="border:none"><div class="red_light_title">'+ src_name +'</div></td>'+
        '    <td style="border:none"><div class="red_light_title">'+ distance +'</div></td></tr>'
}

//----------------------------------------------------------------------------------------------------------------------
let period;
/**Расчет активности источника для калькулятора активности (НОВЫЙ)*/
function calculate_activity() {
    let pov_date = new Date(document.getElementById('date_a0').value);
    let now_date = new Date(document.getElementById('date_calc').value);
    let act0 = document.getElementById('activity_0').value;
    document.getElementById('activity_now').value = activityAllDays(act0, pov_date, now_date, period);
}

/**Запись значений в калькулятор активности*/
function initialize_calc() {
    document.getElementById('date_a0').value = "2018-02-12";
    document.getElementById('date_calc').valueAsDate = new Date();
    setActivity_0();
}

function setActivity_0() {
    switch (document.getElementById("ra_spinner").value) {
        case '1': setA0_And_Period(100, CS_137.getPeriod); break;
        case '2': setA0_And_Period(100, CD_109.getPeriod); break;
        case '3': setA0_By_Element(cs_2910); break;
        case '4': setA0_By_Element(cs_516); break;
        case '5': setA0_By_Element(cs_517); break;
        case '6': setA0_By_Element(cs_518); break;
        case '7': setA0_By_Element(cs_519); break;
        case '8': setA0_By_Element(cs_520); break;
        case '9': setA0_By_Element(cs_521); break;
        case '10': setA0_By_Element(cs_831); break;
        case '11': setA0_By_Element(cs_832); break;
        case '12': setA0_By_Element(cs_833); break;
        case '13': setA0_By_Element(cd_1079); break;
        case '14': setA0_By_Element(cd_1080); break;
    }
}

function setA0_And_Period(a0, element_period) {
    document.getElementById('activity_0').readOnly = false;
    document.getElementById('date_a0').readOnly = false;
    setValueById('activity_0', a0);
    period = element_period;
    calculate_activity();
}

function setA0_By_Element(elem) {
    document.getElementById('activity_0').readOnly = true;
    document.getElementById('date_a0').readOnly = true;
    setValueById('activity_0', elem.getActivity_0);
    period = elem.getElement.getPeriod;
    setDate(elem.getPovDate);
    calculate_activity();
}

function setDate(date) {
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    document.getElementById('date_a0').value = year + "-" + month + "-" + day;
}

function checkIsNumber(id) {
    // if (/*typeof document.getElementById(id).value == 'number'*/true) {
    if (isNaN(document.getElementById(id).value)) {
        document.getElementById(id).style.color = '#ff0000';
        setValueById('activity_now', 'Не число!');
    } else {
        document.getElementById(id).style.color = '#000000';
        calculate_activity();
    }
}
//----------------------------------------------------------------------------------------------------------------------
/**Мощность дозы рассчитывается, как активность, умноженная на соответствующий коэффициент
 * Метод set_activities_bdkg_04() рассчитывает активность для выбранного источника на сегодняшний день, переводит в
 * мощность дозы и выводит результат.
 * Также занимается созданием самой менюшки для выбора источника и вывода результата
 */
const KOEF_CS_BDKG_04 = 0.5192;
const KOEF_CD_BDKG_04 = 0.233636;

function set_activities_bdkg_04() {
    //Чтобы помнить: если активность начальная источников была разной и/или дата поверки отличается, коэффициент будет
    //всё равно одинаковый, отличаться будет наверное для источников с разным периодом полураспада или если другой элемент

    setDropDownActivitiesCesium(1, KOEF_CS_BDKG_04);
    setDropDownActivitiesCesium(2, KOEF_CS_BDKG_04);
    setDropDownActivitiesCadmium(3, KOEF_CD_BDKG_04);
    setDropDownActivitiesCadmium(4, KOEF_CD_BDKG_04);
}

function get_cs_04() {
    let res = parseFloat(document.getElementById('cs_04').value);
    let ans = 71 - res;
    document.getElementById('res_cs_04').value = ans.toFixed(2);
}
//----------------------------------------------------------------------------------------------------------------------
const KOEF_CS_1121 = 0.3655;
const KOEF_CD_1121 = 0.1557648;

function set_activities_1121() {
    setDropDownActivitiesCesium(1, KOEF_CS_1121);
    setDropDownActivitiesCadmium(2, KOEF_CD_1121);
}

function calc_1121() {
    let res = parseFloat(document.getElementById('cs_1121').value);
    let ans = (res-12)*9/7;
    document.getElementById('res_cs_1121').value = ans.toFixed(2);
}
//----------------------------------------------------------------------------------------------------------------------
const KOEF_CS_1123 = 0.5192;
const KOEF_CD_1123 = 0.1947;

function set_activities_1123() {
    setDropDownActivitiesCesium(1, KOEF_CS_1123);
    setDropDownActivitiesCadmium(2, KOEF_CD_1123);
}

function calc_1123(){
    //будет статистика — сделаю, пока просто затычка
}
//----------------------------------------------------------------------------------------------------------------------
const KOEF_CS_BDKG_204 = 0.3655;    //22.079
const KOEF_CD_BDKG_204 = 0.1363;   //24.528

function set_activities_204() {
    setDropDownActivitiesCesium(1, KOEF_CS_BDKG_204);
    setDropDownActivitiesCadmium(2, KOEF_CD_BDKG_204);
}
//----------------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------------
function get_r() {
    let a = parseFloat(document.getElementById('a').value);
    let ans = 47/a*1090;
    document.getElementById('result').value = ans.toFixed(2);
}

function get_r2() {
    let a = parseFloat(document.getElementById('a2').value);
    let ans = 47/a*1090;
    document.getElementById('result2').value = ans.toFixed(2);
}

function get_sm() {
    let b = parseFloat(document.getElementById('b').value);
    let ans = 5.5-2.6*b/3.45;
    document.getElementById('res_sm').value = ans.toFixed(2);
}
//----------------------------------------------------------------------------------------------------------------------
function setValueById(id, value) {
    document.getElementById(id).value = value/*.toFixed(3)*/;
}
//----------------------------------------------------------------------------------------------------------------------
/**Суммарная активность источников 516-521*/
function get_all_activities() {
    initializeSource();
    document.getElementById('sum_activity').value = (
        cs_516.getActivityNow*1 +
        cs_517.getActivityNow*1 +
        cs_518.getActivityNow*1 +
        cs_519.getActivityNow*1 +
        cs_520.getActivityNow*1 +
        cs_521.getActivityNow*1).toFixed(3);
}
//----------------------------------------------------------------------------------------------------------------------
