/**
 * Класс радиоактивного элемента
 */
class RA_Element {
    /**Радиоактивный элемент
     * @param {string} name Название химического элемента
     * @param {number} num Массовое число
     * @param {number} period Период полураспада
     */
    constructor(name, num, period) {
        this._name = name;
        this._num = num;
        this._period = period;
    }

    get getName() {return this._name;}

    /**Массовое число*/
    get getNumber() {return this._num;}

    get getPeriod() {return this._period;}
}

//----------------------------------------------------------------------------------------------------------------------
/**
 * Класс источника
 */
class RA_Source {
    constructor(name, element, activity_0, povDate) {
        this._name = name;
        this._element = element;
        this._activity_0 = activity_0;
        this._povDate = povDate;
    }

    /**Имя источника*/
    get getName() {return this._name;}

    /**Химический элемент*/
    get getElement() {return this._element;}

    /**Активность источника в день поверки — начальная активность*/
    get getActivity_0() {return this._activity_0;}

    /**День поверки (дата, месяцы начинаются с 0)*/
    get getPovDate() {return this._povDate;}

    get getActivityNow() {
        let a0 = this._activity_0;
        let t_pol = this._element.getPeriod;
        let pov_date = this._povDate;

        return activity(a0, pov_date, t_pol);
    }

    setActivityToElementTextContent(id) {document.getElementById(id).textContent = this.getActivityNow;}

    setActivityToElementValue(id) {document.getElementById(id).value = this.getActivityNow;}

    /**Возвращает HTML код блока активности элемента*/
    getActivityBlock() {
        return '<div class="activity_block">' +
            '    <div>' +
            '        <div><sup>' + this.getElement.getNumber + '</sup>' + this.getElement.getName + '</div>' +
            '        <div>' + this.getName + '</div>' +
            '        <div><span>' + this.getActivityNow + '</span></div>' +
            '        <div>кБк</div>' +
            '    </div>' +
            '</div>';
    }
}

//----------------------------------------------------------------------------------------------------------------------
/**
 * Выпадающее меню для активности/мощности дозы
 * в выпадающем списке выбирается источник, в поле вывода показывается рассчитанное значение
 * Для работы кода добавить (<body onload="set_activities_204()">) (это для примера. добавлять свой метод расчета
 * активности для dropBox). Метод setDropDownActivitiesCesium добавляет ответ в поле вывода на выбор соответствующего
 * пункта выпадающего меню. Также необходимо добавить <DIV>, где будет размещаться меню:
 * (<div class="yellow_back" id="div_drop_down_1">Ошибка загрузки</div>). id — это "div_" + id меню:
 * например, в методе setDropDownActivitiesCesium(1, KOEF_CS_BDKG_04): id (первый параметр) равен
 * 1, значит id дива для меню будет div_drop_down_1. Так не нужен ещё один параметр в
 * setDropDownActivitiesCesium() для имени дива, в котором будет располагаться меню. Одинаковый для всех меню id НЕЛЬЗЯ
 * делать, так как менюшек на странице может быть несколько, а id может быть только один.
 * Основная фишка: сам код менюшки НЕ НУЖНО ДОБАВЛЯТЬ в диве, код добавляет меню в страницу динамически
 * (достаточно создать пустой DIV с соответствующим ID). В методе setDropDownActivitiesCesium есть проверка на наличие
 * id менюшки (не дива, в котором будет располагаться меню, а самой меню), если id нет (а значит нет менюшки), код
 * загружает эту меню в див. Проверка сделана для того, чтобы не нужно было добавлять в onLoad метод создания меню,
 * метод создание добавлен в этот метод, при этом меню не будет создаваться каждый раз при смене пункта меню.
 * Так как в страницы JS сам добавлял код, то если нужно будет, например, добавить еще источник в меню, не
 * нужно будет добавлять код во всех страницах, как если бы код был захардкоден в странице, а просто добавить
 * дополнительный код в JS — во всех страницах источник добавиться автоматом
 * Если в set_activities несколько методов setDropDownActivities, то каждому будет свой номер (не важно,
 * для Cs это или для Cd)
 *
 * На страницу добавить код:
 * <body onload="set_activities_204()">
 *
 * В месте на странице, где будет располагаться меню:
 * <div class="yellow_back" id="div_drop_down_1">Ошибка загрузки</div>
 *
 * В <head> конечно добавить:
 * <script type="text/javascript" src="../activity_new.js"></script>
 * <script type="text/javascript" src="../SqrLibrary.js"></script>
 *
 * Метод добавления меню в activity_new.js выглядит так:
 * const KOEF_CS_BDKG_204 = 0.3655;
 * function set_activities_204() {
 *    setDropDownActivitiesCesium(1, KOEF_CS_BDKG_204);
 * }
 *
 */

/**Просто обертка для document.getElementById(id).value, чтобы удобнее было писать код*/
function setValue(id, source, koef) {
    document.getElementById(id).value = (source.getActivityNow  * koef).toFixed(3);
}

/**Добавление кода меню в страницу HTML*/
function loadDropDownCesium(menu_id, output_id, fName) {
    let id = 'div_' + menu_id;

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

/**Добавление кода меню в страницу HTML
 * @param {string} menu_id id, который будет присвоен меню
 * @param {string} output_id
 * @param {string} fName
 */
function loadDropDownCadmium(menu_id, output_id, fName) {
    let id = "div_" + menu_id;

    document.getElementById(id).innerHTML = '' +
        'Значение мощности дозы для <sup>109</sup>Cd: ' +
        '<select id=' + menu_id + ' onchange=' + fName + '> ' +
        '<option value="1">№1079</option>' +
        '<option value="2">№1080</option>' +
        '</select> ' +
        '<input type="text" id=' + output_id + ' size="5">';
}

/**Вывод в поле результата в зависимости от выбранного пункта меню. Для Цезия
 * Если меню с таким id нет на странице, метод создает его и заполняет значением по умолчанию (case '1')
 * Можно было разделить методы, но так меньше кода.
 * @param drop_id id менюшки. Называется порядковым номером: 1, 2... или как угодно, главное, чтобы у разных меню на одной странице id были разными
 * @param koef коэффициент, на который необходимо домножить, чтобы из активности получить мощность дозы
 */
function setDropDownActivitiesCesium(drop_id, koef) {
    initializeSource();

    let dropId = 'drop_down_' + drop_id;
    let outputId = 'output_' + drop_id;
    let fName = "" + setDropDownActivitiesCesium.name + "(" + drop_id + "," + koef + ")";

    if (document.getElementById(dropId)==null)loadDropDownCesium(dropId, outputId, fName);
    switch (document.getElementById(dropId).value) {
        case '1': setValue(outputId, cs_2910, koef); break;
        case '2': setValue(outputId, cs_516,  koef); break;
        case '3': setValue(outputId, cs_517,  koef); break;
        case '4': setValue(outputId, cs_518,  koef); break;
        case '5': setValue(outputId, cs_519,  koef); break;
        case '6': setValue(outputId, cs_520,  koef); break;
        case '7': setValue(outputId, cs_521,  koef); break;
    }
}

/**Вывод в поле результата в зависимости от выбранного пункта меню. Для Кадмия
 * Если меню с таким id нет на странице, метод создает его и заполняет значением по умолчанию (case '1')
 * Можно было разделить методы, но так меньше кода.
 * @param drop_id id менюшки. Называется порядковым номером: 1, 2... или как угодно, главное, чтобы у разных меню на одной странице id были разными
 * @param koef коэффициент, на который необходимо домножить, чтобы из активности получить мощность дозы
 */
function setDropDownActivitiesCadmium(drop_id, koef) {
    initializeSource();

    let dropId = 'drop_down_' + drop_id;
    let outputId = 'output_' + drop_id;
    let fName = "" + setDropDownActivitiesCadmium.name + "(" + drop_id + "," + koef + ")";

    if (document.getElementById(dropId)==null)loadDropDownCadmium(dropId, outputId, fName);
    switch (document.getElementById(dropId).value) {
        case '1': setValue(outputId, cd_1079, koef); break;
        case '2': setValue(outputId, cd_1080, koef); break;
    }
}
//----------------------------------------------------------------------------------------------------------------------
/**Общий метод для активности любого радиоактивного вещества на сегодняшний день
 * @param {*} a0 активность в день поверки
 * @param {Date} pov_date дата поверки
 * @param {*} t_pol период полураспада
 */
function activity(a0, pov_date, t_pol) {
    let days_left = (new Date().getTime() - pov_date.getTime()) / (1000*60*60*24);
    let act = a0 * Math.exp(-0.693147/t_pol * days_left);
    return act.toFixed(3);
}
/**Общий метод для активности любого радиоактивного вещества на выбранный день
 * @param {*} a0 активность в день поверки
 * @param {Date} pov_date дата поверки
 * @param {Date} now_date дата, на которую необходимо рассчитать активность
 * @param {*} t_pol период полураспада
 */
function activityAllDays(a0, pov_date, now_date, t_pol) {
    let days_left = (now_date.getTime() - pov_date.getTime()) / (1000*60*60*24);
    let act = a0 * Math.exp(-0.693147/t_pol * days_left);
    return act.toFixed(4);
}
//----------------------------------------------------------------------------------------------------------------------
/**Имя стиля цвета*/
const RED    = "menu_block_top_red";
const ORANGE = "menu_block_top_orange";
const GREEN  = "menu_block_top_green";
const BLUE   = "menu_block_top_blue";
const VIOLET = "menu_block_top_violet";

/**Возвращает код, который нужно добавить для создания блока ссылки
 * @param {string} path путь к вызываемой странице инструкции
 * @param {string} image путь к изображению для отображения на блоке
 * @param {string} color цвет пункта с именем
 * @param {string} title имя
 * @param {string} category имя категории
 */
function getMenuBlock(path, image, color, title, category) {
    return '' +
    '<div class="menu_block">' +
    '    <a href=' + path + '>' +
    '        <img alt="Картинка" src= ' + image + '/>' +
    '        <div class=' + color + '><span>' + title + '</span></div>' +
    '        <div class="menu_block_footer"><span>' + category + '</span></div>' +
    '    </a>' +
    '</div>';
}