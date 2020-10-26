//Период полураспада в днях
const T_POL_CS_137 = 365.2422 * 30.17;
const T_POL_CD_109 = 461.4;

//День поверки источника (начало отсчета распада)
//yyyy.mm.dd  месяц начинается с 0, февраль — это 1
const POV_DATE_CS = new Date(2016, 9, 12); //у Cs 516-521 одинаковый день поверки
const POV_DATE_2910 = new Date(2016, 4, 17);
const POV_DATE_CD_1079 = new Date(2018, 9, 15);
const POV_DATE_CD_1080 = new Date(1, 1, 1);

//Активность источников в день поверки
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
const A0_1080 = 0;

//Химические элементы
let CS_137, CD_109;

//Источники, которые будут использоваться в инструкциях (ссылки на объекты класса)
let cs_2910, cs_516, cs_517, cs_518, cs_519, cs_520, cs_521, cs_831, cs_832, cs_833, cd_1079, cd_1080;

function initialize() {
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
    cs_831 = new RA_Source("№831", CS_137, A0_831, POV_DATE_CS);
    cs_832 = new RA_Source("№832", CS_137, A0_832, POV_DATE_CS);
    cs_833 = new RA_Source("№833", CS_137, A0_833, POV_DATE_CS);
    cd_1079 = new RA_Source("№1079", CD_109, A0_1079, POV_DATE_CD_1079);
    cd_1080 = new RA_Source("№1080", CD_109, A0_1080, POV_DATE_CD_1080);

}
//----------------------------------------------------------------------------------------------------------------------
//Вывод активностей для каждого из источников на сегодняшний день
function set_main_activities() {
    initialize();
    set_num();
    document.getElementById('516').textContent = cs_516.getActivityNow;
    document.getElementById('517').textContent = cs_517.getActivityNow;
    document.getElementById('518').textContent = cs_518.getActivityNow;
    document.getElementById('519').textContent = cs_519.getActivityNow;
    document.getElementById('520').textContent = cs_520.getActivityNow;
    document.getElementById('521').textContent = cs_521.getActivityNow;
    document.getElementById('2910').textContent = cs_2910.getActivityNow;
    document.getElementById('831').textContent = cs_831.getActivityNow;
    document.getElementById('832').textContent = cs_832.getActivityNow;
    document.getElementById('833').textContent = cs_833.getActivityNow;
    document.getElementById('1079').textContent = cd_1079.getActivityNow;
    document.getElementById('1080').textContent = cd_1080.getActivityNow;
}
//----------------------------------------------------------------------------------------------------------------------
function calc_act() {
    let pov_date = new Date(document.getElementById('date').value);
    let now_date = new Date(document.getElementById('date_now').value);
    let act0 = document.getElementById('act0').value;

    let rad = document.getElementsByName('r1');
    if (rad[2].checked) {
        setValueById('act_main', activityAllDays(act0, pov_date, now_date, T_POL_CD_109));
        // document.getElementById('act_main').value = activityAllDays(act0, pov_date, now_date, T_POL_CD_109);
    } else if (rad[3].checked) {
        setValueById('act_main', activityAllDays(act0, pov_date, now_date, T_POL_CS_137));
        // document.getElementById('act_main').value = activityAllDays(act0, pov_date, now_date, T_POL_CS_137);
    }else if (rad[4].checked) {
        setValueById('act_main', activityAllDays(act0, pov_date, now_date, document.getElementById('custom').value));
        // document.getElementById('act_main').value = activityAllDays(act0, pov_date, now_date, document.getElementById('custom').value);
    }
}

function set_num() {
    document.getElementsByName('r1')[2].checked = true;
    document.getElementById('act0').value = 90;
    document.getElementById('date').value = "2018-02-12";
    document.getElementById('date_now').valueAsDate = new Date();
}
//----------------------------------------------------------------------------------------------------------------------
/**
 * Выпадающее меню для активности/мощности дозы
 * в выпадающем списке выбирается источник, в поле вывода показывается рассчитанное значение
 * Для работы кода добавить (<body onload="set_activities_204()">) (это для примера. добавлять свой метод расчета
 * активности для dropBox). Метод setDropDownActivitiesCesium добавляет ответ в поле вывода на выбор соответствующего
 * пункта выпадающего меню. Также необходимо добавить <DIV>, где будет размещаться меню:
 * (<div class="yellow_back" id="div_drop_down_cd">Ошибка загрузки</div>). id — это "div_" + id меню:
 * например, в методе setDropDownActivitiesCesium('drop_down', 'output', KOEF_CS_BDKG_04): id (первый параметр) равен
 * 'drop_down', значит id дива для меню будет div_drop_down. Так не нужен ещё один параметр в
 * setDropDownActivitiesCesium() для имени дива, в котором будет располагаться меню. Одинаковый для всех меню id НЕЛЬЗЯ
 * делать, так как менюшек на странице может быть несколько, а id может быть только один.
 * Основная фишка: сам код менюшки НЕ НУЖНО ДОБАВЛЯТЬ в диве, код добавляет меню в страницу динамически
 * (достаточно создать пустой DIV с соответствующим ID). В методе setDropDownActivitiesCesium есть проверка на наличие
 * id менюшки (не дива, в котором будет располагаться меню, а самой меню), если id нет (а значит нет менюшки), код
 * загружает эту меню в див. Проверка сделана для того, чтобы не нужно было добавлять в onLoad метод создания меню,
 * только set_activities_bdkg_04(), который рассчитывает значение активности, метод создание добавлен в этот метод,
 * при этом меню не будет создаваться каждый раз при смене пункта меню.
 * Если код меню уже прописан в коде страницы, опять же проверка не допустит создание второго такого же меню, поэтому и
 * пофиг, как работать с меню, добавлять в коде страницы, или не добавлять, результат будет один. Но новы страницы
 * нужно делать без меню, чтобы JS сам добавлял код: так, если нужно будет, например, добавить еще источник в меню, не
 * нужно будет добавлять код во всех страницах, как если бы код был захардкоден в странице, а просто добавить
 * дополнительный код в JS — во всех страницах источник добавиться автоматом
 *
 * В <head> конечно добавить:
 * <script type="text/javascript" src="../activity_new.js"></script>
 * <script type="text/javascript" src="../SqrLibrary.js"></script>
 */

/**Просто обертка для document.getElementById(id).value, чтобы удобнее было писать код*/
function setValue(id, source, koef) {
    document.getElementById(id).value = (source.getActivityNow  * koef).toFixed(3);
}

/**Добавление кода меню в страницу HTML*/
function loadDropDownCesium(menu_id, output_id, fName) {
    let id = "div_" + menu_id;
    document.getElementById(id).innerHTML = '' +
        'Значение мощности дозы для <sup>137</sup>Cs: ' +
        '<select id=' + menu_id + ' onchange=' + fName + '> ' +
        '<option value="1">№2910</option>' +
        '<option value="2">№516</option>' +
        '<option value="3">№517</option>' +
        '<option value="4">№518</option>' +
        '<option value="5">№519</option>' +
        '<option value="6">№520</option>' +
        '<option value="7">№521</option>' +
        '</select> ' +
        '<input type="text" id=' + output_id + ' size="5">';
}

/**Добавление кода меню в страницу HTML*/
function loadDropDownCadmium(menu_id, output_id, fName) {
    let id = "div_" + menu_id;
    document.getElementById(id).innerHTML = '' +
        'Значение мощности дозы для <sup>137</sup>Cs: ' +
        '<select id=' + menu_id + ' onchange=' + fName + '> ' +
        '<option value="1">№1079</option>' +
        '<option value="2">№1080</option>' +
        '</select> ' +
        '<input type="text" id=' + output_id + ' size="5">';
}

/**Вывод в поле результата в зависимости от выбранного пункта меню. Для Цезия*/
function setDropDownActivitiesCesium(drop_id, output, koef, fName) {
    initialize();
    if (document.getElementById(drop_id)==null)loadDropDownCesium(drop_id, output, fName);
    switch (document.getElementById(drop_id).value) {
        case '1': setValue(output, cs_2910, koef); break;
        case '2': setValue(output, cs_516,  koef); break;
        case '3': setValue(output, cs_517,  koef); break;
        case '4': setValue(output, cs_518,  koef); break;
        case '5': setValue(output, cs_519,  koef); break;
        case '6': setValue(output, cs_520,  koef); break;
        case '7': setValue(output, cs_521,  koef); break;
    }
}

/**Вывод в поле результата в зависимости от выбранного пункта меню. Для Кадмия*/
function setDropDownActivitiesCadmium(drop_id, output, koef, fName) {
    initialize();
    if (document.getElementById(drop_id)==null)loadDropDownCadmium(drop_id, output, fName);
    switch (document.getElementById(drop_id).value) {
        case '1': setValue(output, cd_1079, koef); break;
        case '2': setValue(output, cd_1080, koef); break;
    }
}
//----------------------------------------------------------------------------------------------------------------------
/**Мощность дозы рассчитывается, как активность, умноженная на соответствующий коэффициент
 * Метод set_activities_bdkg_04() рассчитывает активность для выбранного источника на сегодняшний день, переводит в
 * мощность дозы и выводит результат. Также занимается созданием самой менюшки для выбора источника и вывода результата
 */
const KOEF_CS_BDKG_04 = 0.5192;
const KOEF_CD_BDKG_04 = 0.24404;

function set_activities_bdkg_04() {
    //расчетный коэффициент для 516 - 0.5196, для 2910 - 0.5187, взял среднее: 0.5192. Чтобы помнить:
    //если активность начальная источников была разной и/или дата поверки отличается, коэффициент будет всё равно
    //одинаковый, отличаться будет для источников с разным периодом полураспада

    setDropDownActivitiesCesium('drop_down', 'output', KOEF_CS_BDKG_04, 'set_activities_bdkg_04()');
    setDropDownActivitiesCesium('drop_down_2', 'output_2', KOEF_CS_BDKG_04, 'set_activities_bdkg_04()');
    setDropDownActivitiesCadmium('drop_down_cd', 'output_cd', KOEF_CD_BDKG_04, 'set_activities_bdkg_04()');
    setDropDownActivitiesCadmium('drop_down_cd_2', 'output_cd_2', KOEF_CD_BDKG_04, 'set_activities_bdkg_04()');
}

function get_cs_04() {
    let res = parseFloat(document.getElementById('cs_04').value);
    let ans = 71 - res;
    document.getElementById('res_cs_04').value = ans.toFixed(2);
}
//----------------------------------------------------------------------------------------------------------------------
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
function setValueById(id, value) {
    document.getElementById(id).value = value/*.toFixed(3)*/;
}
//----------------------------------------------------------------------------------------------------------------------
//Суммарная активность всех источников 516-521
function get_all_activities() {
    initialize();
    document.getElementById('sum_activity').value = (
        cs_516.getActivityNow*1 +
        cs_517.getActivityNow*1 +
        cs_518.getActivityNow*1 +
        cs_519.getActivityNow*1 +
        cs_520.getActivityNow*1 +
        cs_521.getActivityNow*1).toFixed(3);
}
//----------------------------------------------------------------------------------------------------------------------

const KOEF_CS_1123 = 0.5192;
const KOEF_CD_1123 = 0.20337;

function set_activities_1123() {
    setDropDownActivitiesCesium('drop_down', 'output', KOEF_CS_1123, 'set_activities_1123()');
    setDropDownActivitiesCadmium('drop_down_cd', 'output_cd', KOEF_CD_1123, 'set_activities_1123()');

}

function calc_1123(){
    //будет статистика — сделаю, пока просто затычка
}
//----------------------------------------------------------------------------------------------------------------------
const KOEF_CS_1121 = 0.3655;
const KOEF_CD_1121 = 0.1627;

function set_activities_1121() {
        setDropDownActivitiesCesium('drop_down', 'output', KOEF_CS_1121, 'set_activities_1121()');
        setDropDownActivitiesCadmium('drop_down_cd', 'output_cd', KOEF_CD_1121, 'set_activities_1121()');
}

function calc_1121() {
    let res = parseFloat(document.getElementById('cs_1121').value);
    let ans = (res-12)*9/7;
    document.getElementById('res_cs_1121').value = ans.toFixed(2);
}
//----------------------------------------------------------------------------------------------------------------------
const KOEF_CS_BDKG_204 = 0.3655;//22.079
const KOEF_CD_BDKG_204 = 0.142361;//24.528

function set_activities_204() {
    setDropDownActivitiesCesium('drop_down', 'output', KOEF_CS_BDKG_204, 'set_activities_204()');
    setDropDownActivitiesCadmium('drop_down_cd', 'output_cd', KOEF_CD_BDKG_204, 'set_activities_204()');
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

function get_sm() {
    let b = parseFloat(document.getElementById('b').value);
    let ans = 5.5-2.6*b/3.45;
    document.getElementById('res_sm').value = ans.toFixed(2);
}
//----------------------------------------------------------------------------------------------------------------------
