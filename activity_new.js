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
    // cs_516.setActivityToElementTextContent('516');
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


//----------------------------------------------------------------------------------------------------------------------
// const KOEF_CS_BDKG_04 = 0.5192;
// const KOEF_CD_BDKG_04 = 0.24404;

function setValue(id, source, koef) {
    document.getElementById(id).value = (source.getActivityNow  * koef).toFixed(3);
    // document.getElementById(id).value = source.getActivityNow;
}

function set_activities_bdkg_04() {
    initialize();
    //расчетный коэффициент для 516 - 0.5196, для 2910 - 0.5187, взял среднее: 0.5192. Чтобы помнить:
    //если активность начальная источников была разной и/или дата поверки отличается, коэффициент будет всё равно
    //одинаковый, отличаться будет для источников с разным периодом полураспада

    switch (document.getElementById('drop_down').value) {
        case '1': setValue('output', cs_2910, KOEF_CS_BDKG_04); break;
        case '2': setValue('output', cs_516,  KOEF_CS_BDKG_04); break;
        case '3': setValue('output', cs_517,  KOEF_CS_BDKG_04); break;
        case '4': setValue('output', cs_518,  KOEF_CS_BDKG_04); break;
        case '5': setValue('output', cs_519,  KOEF_CS_BDKG_04); break;
        case '6': setValue('output', cs_520,  KOEF_CS_BDKG_04); break;
        case '7': setValue('output', cs_521,  KOEF_CS_BDKG_04); break;
    }

    switch (document.getElementById('drop_down_2').value) {
        case '1': setValue('output_2', cs_2910, KOEF_CS_BDKG_04); break;
        case '2': setValue('output_2', cs_516,  KOEF_CS_BDKG_04); break;
        case '3': setValue('output_2', cs_517,  KOEF_CS_BDKG_04); break;
        case '4': setValue('output_2', cs_518,  KOEF_CS_BDKG_04); break;
        case '5': setValue('output_2', cs_519,  KOEF_CS_BDKG_04); break;
        case '6': setValue('output_2', cs_520,  KOEF_CS_BDKG_04); break;
        case '7': setValue('output_2', cs_521,  KOEF_CS_BDKG_04); break;
    }

    switch (document.getElementById('drop_down_cd').value) {
        case '1': setValue('output_cd', cd_1079, KOEF_CD_BDKG_04); break;
        case '2': setValue('output_cd', cd_1080, KOEF_CD_BDKG_04); break;
    }

    switch (document.getElementById('drop_down_cd_2').value) {
        case '1': setValue('output_cd', cd_1079, KOEF_CD_BDKG_04); break;
        case '2': setValue('output_cd', cd_1080, KOEF_CD_BDKG_04); break;
    }

    setValue('cd', cd_1079, KOEF_CD_BDKG_04);
    setValue('cd_2', cd_1079, KOEF_CD_BDKG_04);
}
//----------------------------------------------------------------------------------------------------------------------



