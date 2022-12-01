// noinspection NonAsciiCharacters

const OPEN = "open";
const CLOSE = "close";
const REG_MENU = "reg_menu";
const GRAD_MENU = "grad_menu";
const COLOR_WHITE = "white";
const COLOR_RED = "#ff3333";
const СВЕРНУТЬ = "Свернуть"
const РАЗВЕРНУТЬ = "Развернуть"

/**Открыть боковое меню*/
function openNav() {
    document.getElementById("left_side_panel").style.left = "0px";/*todo поменять на left*/
}

/**Закрыть боковое меню*/
function closeNav() {
    document.getElementById("left_side_panel").style.left = "-450px";
}


function trackScroll() {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('to_page_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('to_page_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    let goTopBtn = document.querySelector('.to_page_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
}


/**Добавляет кнопку "Вверх" если пролистать страницу вниз*/
window.addEventListener('scroll', trackScroll);

/**При клике по элементу класса .resizable увеличивает его, при повторном клике — уменьшает. Если в момент, когда
 * элемент увеличен, кликнуть вне элемента, элемент уменьшится. Если более точно — при клике по элементу к нему
 * добавляется класс .bigger (увеличение, анимация смена курсора).
 * Чтобы добавить такую функциональность для элемента (картинки), достаточно указать ей класс .resizable*/
window.onclick = function(event) {
    if (!event.target.matches('.resizable')) {
        let dropdowns = document.getElementsByClassName('resizable');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('bigger')) {
                openDropdown.classList.remove('bigger');
            }
        }
    } else {
        let classes = event.target.classList;
        if (classes.contains('bigger')) classes.remove('bigger');
        else classes.add('bigger');
    }
}

/**Открыть папку в отдельной вкладке, путь должен быть вида: Fileserver/Manufacture/Uchastok.RIR */
function openFile(path) {
    window.open("file://///"+path);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function toggleMenu(elem) {
    // $(elem.firstChild).toggle();
    // $(elem).toggleClass("small_nice_details");
    // $(elem).toggleClass("display_block");
}

// Function to increase image size
// для работы: <img src="../imgs/adjustment/11.jpg" onclick="enlargeImg(this)">
function enlargeImg(img) {
    img.style.transform = "scale(1.5)";
    img.style.transition =
        "transform 0.25s ease";
}

/**Установить цвет выбранного элемента
 * @param {*} element
 * @param {string} color — константа с цветом
 */
function setTextColor(element, color) {
    element.style.color = color;
}

/**Установить надпись на кнопке, в зависимости от параметра
 * @param {string} mode_state*/
function getTextByMode(mode_state) {
    if (mode_state==='open') return СВЕРНУТЬ;
    if (mode_state==='') return РАЗВЕРНУТЬ;
}

/**Разворачивание/сворачивание спойлеров в меню для "Регулировки"
 * @param {string} state — текущее состояние спойлеров, если состояние 'open' (все спойлеры открыты),
 * то в элемент по id загружается меню с параметром '', и все спойлеры получаются закрытыми, и наоборот
 * @param {*} id — идентификатор элемента (DIV), в который будет загружено меню
 */
function switchMenuStateReg(state, id) {
    if (state === '') document.getElementById(id).innerHTML = getRegMenu('open', id);
    else document.getElementById(id).innerHTML = getRegMenu('', id);
}

/**Разворачивание/сворачивание спойлеров в меню для "Градуировки"
 * @param {string} state — текущее состояние спойлеров, если состояние 'open' (все спойлеры открыты),
 * то в элемент по id загружается меню с параметром '', и все спойлеры получаются закрытыми, и наоборот
 * @param {*} id — идентификатор элемента (DIV), в который будет загружено меню
 */
function switchMenuStateGrad(state, id) {
    if (state === '') document.getElementById(id).innerHTML = getGradMenu('open', id);
    else document.getElementById(id).innerHTML = getGradMenu('', id);
}

/**Загружает HTML код меню для Регулировки
 * @param {string} mode — если 'open', меню будет загружено с раскрытыми спойлерами, если '' — с закрытыми
 *
 * Входные параметры передаются в функцию switchMenuStateReg, которая запускается по нажатии кнопки сворачивающей спойлеры
 * Кнопка будет выполнять действия, зависящие от параметров в getGradMenu:
 * так, кнопка будет разворачивать спойлеры, если меню было загружено со свернутыми спойлерами и наоборот
 * Загружать меню кнопка будет в элемент, который был передан в её метод (switchMenuStateReg)
 * Менюшек несколько, соответственно кнопок тоже, но все они используют одни и те же методы, при этом работают с разными элементами
 * Для функции getTextByMode по параметру mode выбирается, какая надпись будет на кнопке, сворачивающей спойлеры
 * @param {string} id — id элемента, в который будет загружено меню, этот id передается в параметры кнопки, сам метод этот id не использует
 */
function getRegMenu(mode, id) {
    return '' +
        // '<span id="title">Регулировка</span><span id="title_button"><input id="switchButton" type="button" onclick=switchMenuStateReg(\'' + mode + '\',"' + id + '") value=' + getTextByMode(mode) + '></span>' +
        '<span id="title">Регулировка</span>' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Система радиационного контроля</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../srk2327/2327.html">Настройка СРК</a>' +
        '            <div>' +
        '                <ul>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=usb-com-adapter#usb-com-adapter">Настройка USB-COM адаптера</a></li>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=moxa#moxa">Настройка Ethernet адаптера MOXA</a></li>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=cabel#cabel">Кабель для Устройства Сигнализации</a></li>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=source#source">Как укладывать контрольный источник</a></li>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=cabel_type#cabel_type">Какие бывают кабели для блоков</a></li>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=pu_900#pu_900">Адаптер питания для ПУ-АТ900</a></li>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=adapter#adapter">Как самому сделать адаптер</a></li>' +
        '                   <li><a id="mylink" href="../srk2327/2327.html?id=prepare#prepare">Подготовка БД</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../srk2327/mrp.html">МРП (Пешеходный монитор)</a></li>' +
        '        <li><a href="../srk2327/portal.html">Портальный монитор</a></li>' +
        '        <li><a href="../srk2327/BR.html">ДРГ. Блок регистрации</a></li>' +
        '        <li><a href="../srk2327/941adapter.html">Адаптер интерфейсный АИ-АТ941</a></li>' +
        '        <li><a href="../srk2327/942.html">Адаптер интерфейсный АИ-АТ942</a></li>' +
        '        <li><a href="../srk2327/943.html">Адаптер интерфейсный АИ-АТ943</a></li>' +
        '        <li><a href="../srk2327/p900.html">Пульт управления ПУ-АТ900</a></li>' +
        '        <li><a href="../srk2327/991.html">Устройство сигнализации УС-АТ991</a></li>' +
        '        <li><a href="../srk2327/sark2mrp.html">SARK2 и МРП</a></li>' +
        // '        <li><a href="../docs/SRK_Title.odt">Шаблон листа заказов</a></li>' +
        // '        <li><a href="../docs/Выходной%20контроль.doc">Выходной контроль СРК</a></li>' +
        // '        <li><a href="../docs/АТ2327_РЭ_чI_2016.doc">AT2327 РЭ 2016</a></li>' +
        // '        <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/Instruction/СРК_заказать.xls">ЗАКАЗАТЬ</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span><i>α</i> - БД альфа излучения</span>' +
        '    </summary>' +
        '    <ul>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span><i>β</i> - БД бета излучения</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../other/bdpb-01.html">БДПБ-01</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span><i>γ</i> - БД гамма излучения </span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../bdkg/bdkg01.html">БДКГ-01</a>' +
        '        </li>' +
        '        <li><a href="../bdkg02/bdkg02.html">БДКГ-02</a>' +
        /*'        <li onclick="toggleMenu()"><a>БДКГ-02</a>' +*/   <!--href="../bdkg02/bdkg02.html">-->
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="../bdkg02/bdkg-02rem.html">РЕМОНТ</a></li>' +
        '                    <li><a href="../bdkg02/bdkg-02_100-200.html">Как поменять напряжение 100 &rarr; 200 вольт</a></li>' +
        '                    <li><a href="../bdkg02/bdkg02-bgcalibration.html">Калибровка по фону и градуировочное число</a></li>' +
        // '                    <li><a href="../docs/bdkg-02/Passport_Nastroiki_bdkg-02.doc">Паспорт настройки</a></li>' +
        // '                    <li><a href="../docs/Расчет%20протоколов%20поверки%20БДКГ-02.ods">Расчет протокола поверки</a></li>' +
        // '                    <li><a href="../templates/BDKG-02_template.odt">Шаблон для записи данных</a></li>' +
        // '                    <li><a href="//Inv-996/журналы градуировок/BDKG02.ods">Журнал градуировки БДКГ-02</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../bdkg/bdkg_3_5_7_11.html">БДКГ-03 -05 -07 -11</a></li>' +
        '        <li><a href="../bdkg/bdkg04.html">БДКГ-04</a>' +
        // '            <div>' +
        // '                <ul>' +
        // '                    <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/BDKG04.ods">База настройки БДКГ-04</a></li>' +
        // '                    <li><a href="file://///Inv-996/журналы градуировок/BDKG04.ods">Данные с линейки</a></li>' +
        // '                    <li><a href="../other/flash_magic.html">Инструкция по прошивке блоков</a></li>' +
        // '                </ul>' +
        // '            </div>' +
        '        </li>' +
        '        <li><a href="../bdkg/bdkg11m.html">БДКГ-11М</a></li>' +
        '        <li><a href="../bdkg22/bdkg22.html">БДКГ-22/23. Прошивка и настройка</a>' +
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="../bdkg22/bdkg22prosh.html">Прошивка</a></li>' +
        '                    <li><a href="../bdkg22/bdkg22con.html">Как подключаться</a></li>' +
        '                    <li><a href="../bdkg22/bdkg22diap.html">Как принудительно переключать диапазоны</a></li>' +
        '                    <li><a href="../bdkg22/bdkg22newfon.html">Как настраивать фон</a></li>' +
        '                    <li><a href="../bdkg22/bdkg22serial.html">Как записать серийный номер в память БД</a></li>' +
        // '                    <li><a href="../docs/protocol_sertificate/bdkg22-23/bdkg23.1_prot.odt">Протокол поверки 23/1</a></li>' +
        // '                    <li><a href="../docs/protocol_sertificate/bdkg22-23/bdkg23.1_sr.odt">Калибровочный сертификат 23/1</a></li>' +
        // '                    <li><a href="../docs/protocol_sertificate/bdkg22-23/bdkg23.1_se.odt">Calibration Sertificate 23/1</a></li>' +
        // '                    <li><a href="../docs/protocol_sertificate/bdkg22-23/bdkg-23.1_raschet.ods">Расчет протокола 23/1</a></li>' +
        // '                    <li><a href="../docs/bdkg22/bdkg-23-bg.ods">Таблица записи фона</a></li>' +
        // '                    <li><a href="../docs/bdkg22/perechen_bdkg22.odt">Перечень</a></li>' +
        // '                    <li><a href="file://///Inv-996/журналы градуировок/BDKG22.ods">Журнал градуировок БДКГ-22</a></li>' +
        // '                    <li><a href="file://///Inv-996/журналы градуировок/BDKG23.ods">Журнал градуировок БДКГ-23</a></li>' +
        // '                    <li><a href="file://///Inv-996/журналы градуировок/BDKG23_1.ods">Журнал градуировок БДКГ-23/1</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../bdkg/bdkg-25.html">БДКГ-25</a></li>' +
        '        <li><a href="../bdkg/bdkg27.html">БДКГ-27. Как сделать протокол поверки.</a>' +
        '        <li><a href="../bdkg/bdkg35.html">БДКГ-35</a></li>' +
        '        <li><a href="../bdkg/bdkg-204.html">БДКГ-204</a></li>' +
        '        <li><a href="../bdkg/bdkg-224.html">БДКГ-224</a></li>' +
        '        <li><a href="../bdkg/bdkr-01.html">БДКР-01</a></li>' +
        '        <li><a href="../bdmg/bdmg_rem.html">БДМГ-АТ2343</a>' +
        // '            <div>' +
        // '                <ul>' +
        // '                    <li><a href="../bdmg/bdmg_trouble.html">Если не подключается</a></li>' +
        // '                    <li><a href="../bdmg/static.html">Защита от статики</a></li>' +
        // '                    <li><a href="../bdmg/bdmg_separate.html">Посмотреть работу каждого счетчика</a></li>' +
        // '                    <li><a href="../templates/BDMG_template.odt">Шаблон для распечатывания коэффициентов</a></li>' +
        // '                    <li><a href="../bdmg/bdmg_trouble2.html">Если не прошел линейку</a></li>' +
        // '                    <li><a href="../bdmg/bdmg_call.html">Как сделать автокалибровку</a></li>' +
        // '                    <li><a href="../bdmg/bdmg_pult.html">Как сделать проверку "пультом"</a></li>' +
        // '                    <li><a href="../bdmg/bdmg_osh.html">Как снять показания с "ошейником"</a></li>' +
        // '                    <li><a href="../docs/БДМГ%20Паспорт.docx">Паспорт настройки</a></li>' +
        // '                    <li><a href="../docs/protocol_sertificate/2343_Pov_Rus.doc">Шаблон протокола поверки</a></li>' +
        // '                </ul>' +
        // '            </div>' +
        '        </li>' +
        '        <li><a href="../bdkg/bdks-07.html">БДКС-07</a>' +
        '' +
        '        <li><a href="../bdkg/bdkg_m_prosh.html">Программирование плат для -М блоков</a>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span><i>n</i> - БД нейтронного излучения</span>' +
        '    </summary>' +
        '    <ul id="neutron">' +
        '        <li><a href="../bdkn/6102.html">6102. Настройка <i>-n</i> детектора (старая плата)</a></li>' +
        '        <li><a href="../bdkn/6102_new.html" onmouseover="setTextColor(this.lastChild,COLOR_WHITE)" onmouseout="setTextColor(this.lastChild,COLOR_RED)">6102. Настройка <i>-n</i> детектора<span class="under_construction">В работе</span></a></li>' +
        '        <li><a href="../bdkn/bdkn-01.html" onmouseover="setTextColor(this.lastChild,COLOR_WHITE)" onmouseout="setTextColor(this.lastChild,COLOR_RED)">Проверка плат БДКН-01 / 04<span class="under_construction">В работе</span></a></li>' +
        '        <li><a href="../bdkn/bdkn_01_03.html" onmouseover="setTextColor(this.lastChild,COLOR_WHITE)" onmouseout="setTextColor(this.lastChild,COLOR_RED)">БДКН-01 / БДКН-03<span class="under_construction">В работе</span></a></li>' +
        '        <li><a href="../bdkn/bdkn-01_03_plat.html">БДКН-01 / БДКН-03. Проверка плат</a></li>' +
        '        <li><a href="../bdkn/bdkn_02.html">БДКН-02</a></li>' +
        '        <li><a href="../bdkn/bdkn-03.html">БДКН-03</a></li>' +
        '        <li><a href="../bdkn/bdkn-05_plat.html">БДКН-05. Проверка плат</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>1103M / 1121 / 1123</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../11xx/1103_new.html">ДКР-АТ1103М</a>' +
        // '        <li><a href="../1103/1103.html">ДКР-АТ1103М (старый вариант)</a>' +
        // '            <div>' +
        // '                <ul>' +
        // '                    <li><a href="../1103/1103_prosh.html">Как прошить</a></li>' +
        // '                    <li><a href="../1103/1103_new.html#prosh" onclick="openDetails(\'prosh\')">Как прошить 2</a></li>' +
        // '                    <li><a href="../1103/1103_957.html">Как сделать инициализацию 957</a></li>' +
        // '                    <li><a href="../1103/1103_potreb.html">Как проверить ток потребления и ток заряда</a></li>' +
        // '                    <li><a href="../1103/1103_smesch.html">Смещение -3В...-5В</a></li>' +
        // '                    <li><a href="../1103/1103_spectr.html">Как включить спектрометрический режим</a></li>' +
        // '                </ul>' +
        // '            </div>' +
        // '        </li>' +
        '        <li><a href="../11xx/1121.html">ДКС-АТ1121</a>' +
        // '            <div>' +
        // '                <ul>' +
        // '                    <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/AT1121.ods">База настройки АТ1121</a></li>' +
        // '                    <li><a href="file://///Inv-996/журналы градуировок/АТ1121.ods">Данные с линейки</a></li>' +
        // '                </ul>' +
        // '            </div>' +
        '        </li>' +
        '        <li><a href="../11xx/1123.html">ДКС-АТ1123</a>' +
        '            <div>' +
        '                <ul>' +
        // '                    <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/AT1123.ods">База настройки АТ1123</a></li>' +
        '                    <li><a href="../11xx/1123_umnoz.html">Проверка умножителя</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../11xx/1123_umnoz.html">Проверка умножителя 1123</a></li>' +
        '        <li><a href="../other/1123_uo.html">1121, 1123. Проверка платы УО</a></li>' +
        '        <li><a href="../other/1125_uo.html">1125, 1103М. Проверка платы УО</a></li>' +
        '        <li><a href="../other/signalizator.html">Устройство сигнализации 1121,1123</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Адаптеры</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../adapter/dtdu3.html">Настройка БТ-ДУ3</a></li>' +
        '        <li><a href="../adapter/btdu4.html">Настройка БТ-ДУ4</a></li>' +
        '   </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Умножители / делители</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../other/delitel.html">Проверка делителя</a></li>' +
        '        <li><a href="../other/umnoz_1121.html">Проверка умножителя 1121,α,β,1103,1125</a></li>' +
        '        <li><a href="../11xx/1123_umnoz.html">Проверка умножителя 1123</a></li>' +
        '        <li><a href="../other/umnoz_1315.html">Проверка умножителя 1315</a></li>' +
        '        <li><a href="../other/umnoz_1321.html">Проверка умножителя 1321</a></li>' +
        '        <li><a href="../other/umnoz_201m.html">Проверка умножителя БДКГ-201М</a></li>' +
        '   </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>БОИ</span>' +
        '    </summary>' +
        '    <ul>' +
        '               <li><a href="../boi/boi1-uo.html" onmouseover="setTextColor(this.lastChild,COLOR_WHITE)" onmouseout="setTextColor(this.lastChild,COLOR_RED)">БОИ. Устройство Обработки<span class="under_construction">В работе</span></a></li>' +
        '               <li><a href="../boi/boi.html">БОИ. Преобразователь напряжения</a></li>' +

        '               <li><a href="../boi/boi2.html">БОИ2 (Блок обработки информации)</a></li>' +
        '               <li><a href="../boi/boi2-prog.html">БОИ2. Прошивка</a></li>' +
        '               <li><a href="../boi/boi2-prov.html">БОИ2. Проверка Устройства обработки</a></li>' +

        '               <li><a href="../boi/boi4_pp_prosh.html">БОИ-4. Прошивка платы преобразователя</a></li>' +
        '               <li><a href="../boi/pda1120_pu4.html">КПК 1120 БОИ-4</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Проверка ПКИ</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../other/dgb-025.html">Входной контроль ДГБ-0,25</a></li>' +
        '        <li><a href="../other/beta.html">Проверка БЕТА счетчиков</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Всякое разное</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../other/flash_magic.html">Инструкция по прошивке LPC11U67</a></li>' +
        '        <li><a href="../other/bdrm-05m.html">БДРМ-05М/ БДРМ-11. Настройка</a></li>' +
        '        <li><a href="../other/adapter.html">Адаптер USB-БД</a></li>' +
        '        <li><a href="../other/6130.html">АТ6130</a></li>' +
        '        <li><a href="../other/6130_prosh.html">АТ6130 Прошивка</a></li>' +
        '        <li><a href="../other/pdu.html">ПДУ</a></li>' +
        '        <li><a href="../other/flip.html">Flip. Как шить</a></li>' +
        '        <li><a href="../other/ed2_prosh.html">Прошивка ED2 (ChipProg)</a></li>' +
        '        <li><a href="../other/odu_to7.html">Переходник ODU на ТО-7</a></li>' +
        '        <li><a href="../other/5351_plis.html">Прошивка ПЛИС в ДКС-АТ5351</a></li>' +
        '' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Файлы, документы, макросы</span>' +
        '    </summary>' +
        '    <ul>' +

        '        <li><a href="../sertif_prosh/macro.html">Макрос для протоколов и сертификатов</a>' +
        '            <div>' +
        '                <ul>' +
        '               <li><a href="../docs/AtomtexLibrary.zip">Скачать макрос - 3.50</a></li>' +
        '                </ul>' +
        '            </div>' +

        '        </li>' +
        '        <li><a href="../other/atomtex_tools.html">Инструкция для работы с макросом наклеек</a></li>' +
        '        <li><a href="../other/plotter.html">Как делать наклейки на плоттере</a></li>' +
        // '        <li><a href="../docs/GMS%20for%20Corel.rar">Макрос для CorelDraw (наклейки)</a></li>' +

        '        <li><a href="../other/adjustment_db.html">AdjustmentDB</a>' +
        '            <div>' +
        '                <ul>' +
        '               <li><a href="../other/adjustment_db_service.html">AdjustmentDB. Описание сервиса</a></li>' +
        '               <li><a href="../other/adjustment_db_admin.html">AdjustmentDB. Администрирование</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +

        '        <li><a href="../other/smart_terminal.html">Smart Terminal</a>' +
        '            <div>' +
        '                <ul>' +
        '               <li><a href="../docs/SmartTerminal-v1.0.0.15.apk">Скачать последнюю версию</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +

        '        <li><a href="../architector/architector.html">Architector</a></li>' +
        // '        <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/programming/">Актуальные прошивки</a></li>' +
        // '        <li><a href="../sertif_prosh/prosh.html">Список актуальных прошивок</a></li>' +

        '        <li><a href="../sertif_prosh/prosh.html">Список актуальных прошивок</a>' +
        '            <div>' +
        '                <ul>' +
        '               <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/programming/">Открыть папку с прошивками</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +

        '        <li><a href="../sertif_prosh/sertificate.html">Сертификаты и протоколы поверки</a></li>' +
        '        <li><a href="../docs/gurachevskiy-vl-radiacionnyy-kontrol-fizicheskie-osnovy-i-pribornaya-baza.pdf">Гурачевский.Радиационный контроль</a></li>' +
        '        <li><a href="../docs/catalogue_ru.pdf">Каталог продукции АТОМТЕХ</a></li>' +
        '' +
        '    </ul><br>' +
        '</details>';
}

/**Загружает HTML код меню для Градуировки
 * @param {string} mode — если 'open', меню будет загружено с раскрытыми спойлерами, если '' — с закрытыми
 *
 * Входные параметры передаются в функцию switchMenuStateGrad, которая запускается по нажатии кнопки сворачивающей спойлеры
 * Кнопка будет выполнять действия, зависящие от параметров в getGradMenu:
 * так, кнопка будет разворачивать спойлеры, если меню было загружено со свернутыми спойлерами и наоборот
 * Загружать меню кнопка будет в элемент, который был передан в её метод (switchMenuStateGrad)
 * Менюшек несколько, соответственно кнопок тоже, но все они используют одни и те же методы, при этом работают с разными элементами
 * Для функции getTextByMode по параметру mode выбирается, какая надпись будет на кнопке, сворачивающей спойлеры
 * @param {string} id — id элемента, в который будет загружено меню, этот id передается в параметры кнопки, сам метод этот id не использует
 * */
function getGradMenu(mode, id) {
    return '' +
        // '<span id="title">Градуировка</span><span id="title_button"><input id="switchButton" type="button" onclick=switchMenuStateGrad(\'' + mode + '\',"' + id + '") value=' + getTextByMode(mode) + '></span>' +
        '<span id="title">Градуировка</span>' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>БОИ</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../grad/boi_1.html">Градуировка БОИ</a></li>' +
        '        <li><a href="../grad/boi_2.html">Градуировка БОИ2</a></li>' +
        '        <li><a href="../grad/boi_4.html">Градуировка БОИ4</a></li>' +
        '    </ul>' +
        '</details>' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>γ - БД гамма излучения</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../grad/bdkg-01.html">Градуировка БДКГ-01</a></li>' +
        '        <li><a href="../grad/bdkg-02.html">Градуировка БДКГ-02</a></li>' +
        '        <li><a href="../grad/bdkg-04.html">Градуировка БДКГ-04</a></li>' +
        '        <li><a href="../grad/bdkg-05.html">Градуировка БДКГ-05</a></li>' +
        '        <li><a href="../grad/bdkg-17.html">Градуировка БДКГ-17</a></li>' +
        '        <li><a href="../grad/bdkg-204.html">Градуировка БДКГ-204</a></li>' +
        '    </ul>' +
        '</details>' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>11XX</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../grad/1103.html">Градуировка ДКР-АТ1103M</a></li>' +
        '        <li><a href="../grad/1121.html">Градуировка ДКС-АТ1121</a></li>' +
        '        <li><a href="../grad/1123.html">Градуировка ДКС-АТ1123</a></li>' +
        '        <li><a href="../grad/1125a.html" onmouseover="setTextColor(this.lastChild,COLOR_WHITE)" onmouseout="setTextColor(this.lastChild,COLOR_RED)">Градуировка 1125A<span class="under_construction">В работе</span></a></li>' +
        '    </ul>' +
        '</details>' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Разное</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../grad/2503a.html" onmouseover="setTextColor(this.lastChild,COLOR_WHITE)" onmouseout="setTextColor(this.lastChild,COLOR_RED)">Градуировка 2503A<span class="under_construction">В работе</span></a></li>' +
        '    </ul>' +
        '</details>'
        ;
}

/**Загрузка кода меню в выбранный элемент (DIV)
 * @param {string} menu_id — id элемента, в который будет загружено меню
 * @param {string} menu_type — какой тип меню будет загружен: для градуировки (GRAD_MENU) или для регулировки (REG_MENU)
 * @param {string} menu_state — если OPEN, меню будет загружено с раскрытыми спойлерами, если CLOSE — с закрытыми
 */
function includeMenu(menu_id, menu_type, menu_state) {
    let state;
    if (menu_state === OPEN) state = 'open';
    if (menu_state === CLOSE) state = '';

    if (menu_type === REG_MENU) document.getElementById(menu_id).innerHTML += getRegMenu(state, menu_id);
    if (menu_type === GRAD_MENU) document.getElementById(menu_id).innerHTML += getGradMenu(state, menu_id);

    // left_menu_visibility(false);
}

/**Показывает/скрывает всплывающее меню по нажатии зеленой кнопки "Меню"*/
function show_menu(){
    let x = document.getElementById("menu");
    if (x.style.display === "") {
        x.style.display = "block";
    }
    else if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function left_menu_visibility(show){
    let menu = document.getElementById("menu_left");
    let menu2 = document.getElementById("left_side_menu");
    // let hiddenMenuDiv = document.getElementById("hidden_menu_div");
    // let smallButtons = document.getElementById("hidden_menu_div");

    if (show) menu2.style.display = "block";
    else menu2.style.display = "none";

    menu.hidden = !show;
    // hiddenMenuDiv.hidden = show;
}

function left_menu_visibility_2(){
    let menu = document.getElementsByClassName("left_side_menu")[0];
    let links = document.getElementsByClassName("header_div_2")[0];
    if (menu.style.display === "none") {
        menu.style.display = "block";
        links.style.marginLeft = "470px";
    }
    else {
        menu.style.display = "none";
        links.style.marginLeft = "0px";
    }
}



function insertCalculatorCode() {
    document.getElementById('activity_calculator_block').innerHTML = ''+
    '<div style="padding: 5px">'+
    '    <table style="border:none">'+
    '        <tr>'+
    '            <td style="border:none">'+
    '                <div class="red_light_title">Радиоактивный элемент<br> или источник:</div>'+
    '            </td>'+
    '            <td style="border:none">'+
    '                <div class="red_light_title">А<sub>0</sub> (кБк):</div>'+
    '            </td>'+
    '        </tr>'+
    '        <tr>'+
    '            <td style="border:none">'+
    '                <select id="ra_spinner" onchange="setActivity_0()">'+
    '                    <option value="1">137-Cs</option>'+
    '                    <option value="2">109-Cd</option>'+
    '                    <option value="3">241-Am</option>'+
    '                    <option value="4">№2910</option>'+
    '                    <option value="5">№516</option>'+
    '                    <option value="6">№517</option>'+
    '                    <option value="7">№518</option>'+
    '                    <option value="8">№519</option>'+
    '                    <option value="9">№520</option>'+
    '                    <option value="10">№521</option>'+
    '                    <option value="11">№831</option>'+
    '                    <option value="12">№832</option>'+
    '                    <option value="13">№833</option>'+
    '                    <option value="14">№595</option>'+
    '                    <option value="15">№1079</option>'+
    '                    <option value="16">№1080</option>'+
    '                    <option value="17">№1075</option>'+
    '                    <option value="18">360.2020</option>'+
    '                </select>'+
    '            </td><td style="border:none">'+
    '            <input id="activity_0" type="text" size="12" datatype="number"'+
    '                   title="Активность в день поверки. Для источников с номерами изменить активность нельзя"'+
    '                   oninput="checkIsNumber(\'activity_0\')" onchange="calculate_activity()">'+
    '        </td>'+
    '        </tr>'+
    '        <tr><td colspan="2" style="border:none"><hr color="ff6633"></td></tr>'+
    '        <tr>'+
    '            <td style="border:none">'+
    '                <div class="red_light_title">Дата<br>поверки:</div>'+
    '            </td>'+
    '            <td style="border:none">'+
    '                <div class="red_light_title">Расчетный<br>день:</div>'+
    '            </td>'+
    '        </tr>'+
    '        <tr>'+
    '            <td style="border:none">'+
    '                <input id="date_a0"'+
    '                       title="Дата поверки (А0). Для источников с номерами изменить дату нельзя"'+
    '                       onchange="calculate_activity()"'+
    '                       type="date">'+
    '            </td>'+
    '            <td style="border:none">'+
    '                <input id="date_calc" title="Дата, на момент которой необходимо рассчитать активность"'+
    '                       onchange="calculate_activity();insertDistanceCalculator();insertKermaDistanceCalculator()"'+
    '                       type="date">'+
    '            </td>'+
    '        </tr>'+
    '        <tr>'+
    '            <td colspan="2" style="border:none">'+
    '                <hr color="ff6633">'+
    '            </td>'+
    '        </tr>'+
    '        <tr>'+
    '            <td style="border:none" colspan="2">'+
    '                <div class="red_light_title">Активность, кБк</div>'+
    '            </td>'+
    '        </tr>'+
    '        <tr>'+
    '            <td style="border:none" colspan="2">'+
    '                <input id="activity_now" title="" name="r1" type="text" size="12">'+
    '            </td>'+
    '        </tr>'+
    '    </table>'+
    '</div>'

}