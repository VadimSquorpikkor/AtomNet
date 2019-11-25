function includeHTML(mode_1) {
    let mode;
    let id;
    if (mode_1 === open) {
        mode = 'open';
        id = 'menu_left';
    } else if (mode_1 === 'index') {
        id = 'index_menu';
        mode = '';
    } else {
        id = 'menu';
        mode = '';
    }
    document.getElementById(id).innerHTML =
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Система радиационного контроля</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../srk2327/2327.html">Настройка СРК</a></li>' +
        '        <li><a href="../srk2327/mrp.html">&bullet; МРП (Пешеходный монитор)</a></li>' +
        '        <li><a href="../srk2327/portal.html">&bullet; Портальный монитор</a></li>' +
        '        <li><a href="../srk2327/BR.html">&bullet; ДРГ. Блок регистрации</a></li>' +
        '        <li><a href="../srk2327/941adapter.html">Адаптер интерфейсный АИ-АТ941</a></li>' +
        '        <li><a href="../srk2327/942.html">Адаптер интерфейсный АИ-АТ942</a></li>' +
        '        <li><a href="../srk2327/943.html">Адаптер интерфейсный АИ-АТ943</a></li>' +
        '        <li><a href="../srk2327/p900.html">Пульт управления ПУ-АТ900</a></li>' +
        '        <li><a href="../srk2327/sark2mrp.html">SARK2 и МРП</a></li>' +
        '        <li><a href="../docs/SRK_Title.odt">Шаблон листа заказов</a></li>' +
        '        <li><a href="../docs/Выходной%20контроль.doc">Выходной контроль СРК</a></li>' +
        '        <li><a href="../docs/АТ2327_РЭ_чI_2016.doc">AT2327 РЭ 2016</a></li>' +
        '        <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/Instruction/СРК_заказать.xls">ЗАКАЗАТЬ</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>БД альфа излучения</span>' +
        '    </summary>' +
        '    <ul>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>БД бета излучения</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../other/bdpb-01.html">БДПБ-01</a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>БД гамма излучения </span>' +
        '    </summary>' +
        '    <!--<div>-->' +
        '    <ul>' +
        '        <li><a href="../bdkg/bdkg01.html">БДКГ-01</a>' +
        '        </li>' +
        '        <li><a href="../bdkg02/bdkg02.html">БДКГ-02</a>' +
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="../bdkg02/bdkg-02rem.html">РЕМОНТ</a></li>' +
        '                    <li><a href="../bdkg02/bdkg-02_100-200.html">Как поменять напряжение 100 &rarr; 200 вольт</a></li>' +
        '                    <li><a href="../bdkg02/bdkg02-bgcalibration.html">Как сделать калибровку по фону и снять' +
        '                        градуировочное число</a></li>' +
        '                    <li><a href="../docs/bdkg-02/Passport_Nastroiki_bdkg-02.doc">Паспорт настройки</a></li>' +
        '                    <li><a href="../docs/Расчет%20протоколов%20поверки%20БДКГ-02.ods">Расчет протокола поверки</a>' +
        '                    </li>' +
        '                    <li><a href="../templates/BDKG-02_template.odt">Шаблон для записи данных</a></li>' +
        '                    <li><a href="//Inv-996/журналы градуировок/BDKG02.ods">Журнал градуировки БДКГ-02</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../bdkg/bdkg04.html">БДКГ-04</a>' +
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/BDKG04.ods">База' +
        '                        настройки' +
        '                        БДКГ-04</a></li>' +
        '                    <li><a href="file://///Inv-996/журналы градуировок/BDKG04.ods">Данные с линейки</a></li>' +
        '                </ul>' +
        '            </div>' +
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
        '                    <li><a href="../docs/sertificate/bdkg22_pov.odt">Протокол поверки</a></li>' +
        '                    <li><a href="../docs/bdkg22/bdkg-23-bg.ods">Таблица записи фона</a></li>' +
        '                    <li><a href="../docs/bdkg22/perechen_bdkg22.odt">Перечень</a></li>' +
        '                    <li><a href="../templates/bdkg-23.1_calibr_rus.doc">Калибровочный сертификат</a></li>' +
        '                    <li>' +
        '                        <a href="file://///Inv-996/журналы градуировок/BDKG22.ods">Журнал' +
        '                            градуировок БДКГ-22</a></li>' +
        '                    <li>' +
        '                        <a href="file://///Inv-996/журналы градуировок/BDKG23.ods">Журнал' +
        '                            градуировок БДКГ-23</a></li>' +
        '                    <li>' +
        '                        <a href="file://///Inv-996/журналы градуировок/BDKG23_1.ods">Журнал' +
        '                            градуировок БДКГ-23/1</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../bdkg/bdkg-25.html">БДКГ-25</a></li>' +
        '        <li><a href="../bdkg/bdkg27.html">БДКГ-27. Как сделать протокол поверки.</a>' +
        '            <div>' +
        '                <ul>' +
        '' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../bdkg/bdkg35.html">БДКГ-35</a></li>' +
        '        <li><a href="../bdkg/bdkg-204.html">БДКГ-204</a></li>' +
        '        <li><a href="../bdkg/bdkg-224.html">БДКГ-224</a></li>' +
        '        <li><a href="../bdmg/bdmg_rem.html">БДМГ-АТ2343</a>' +
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="../bdmg/bdmg_trouble.html">Если не подключается</a></li>' +
        '                    <li><a href="../bdmg/static.html">Защита от статики</a></li>' +
        '                    <li><a href="../bdmg/bdmg_separate.html">Посмотреть работу каждого счетчика</a></li>' +
        '                    <li><a href="../templates/BDMG_template.odt">Шаблон для распечатывания коэффициентов</a></li>' +
        '                    <li><a href="../bdmg/bdmg_trouble2.html">Если не прошел линейку</a></li>' +
        '                    <li><a href="../bdmg/bdmg_call.html">Как сделать автокалибровку</a></li>' +
        '                    <li><a href="../bdmg/bdmg_pult.html">Как сделать проверку "пультом"</a></li>' +
        '                    <li><a href="../bdmg/bdmg_osh.html">Как снять показания с "ошейником"</a></li>' +
        '                    <li><a href="../docs/БДМГ%20Паспорт.docx">Паспорт настройки</a></li>' +
        '                    <li>' +
        '                        <a href="../docs/sertificate/2343_Pov_Rus.doc">Шаблон' +
        '                            протокола поверки</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>БД нейтронного излучения</span>' +
        '    </summary>' +
        '    <ul id="neutron">' +
        '        <li><a href="../bdkn/6102.html">6102. Настройка нейтронного детектора</a></li>' +
        '        <li><a href="../bdkn/bdkn-01.html">Проверка плат БДКН-01/04<span class="under_construction"></span></a></li>' +
        '        <li><a href="../bdkn/bdkn_02.html">БДКН-02. Установить коэффициенты. Прошить</a></li>' +
        '        <li><a href="../bdkn/bdkn-03.html">БДКН-03</a></li>' +
        '        <li><a href="../bdkn/bdkn_01_03.html">БДКН-01/БДКН-03<span class="under_construction"></span></a></li>' +
        '    </ul>' +
        '</details>' +
        '' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>11ХХ</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../1103/1103.html">ДКР-АТ1103М</a>' +
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="../1103/1103_prosh.html">Как прошить</a></li>' +
        '                    <li><a href="../1103/1103_957.html">Как сделать инициализацию 957</a></li>' +
        '                    <li><a href="../1103/1103_potreb.html">Как проверить ток потребления и ток заряда</a></li>' +
        '                    <li><a href="../1103/1103_smesch.html">Смещение -3В...-5В</a></li>' +
        '                    <li><a href="../1103/1103_spectr.html">Как включить спектрометрический режим</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../1123/1121.html">ДКС-АТ1121</a>' +
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/AT1121.ods">База' +
        '                        настройки' +
        '                        АТ1121</a></li>' +
        '                    <li><a href="file://///Inv-996/журналы градуировок/АТ1121.ods">Данные с линейки</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../1123/1123.html">ДКС-АТ1123</a>' +
        '            <div>' +
        '                <ul>' +
        '                    <li><a href="file://///FILESERVER/Manufacture/Uchastok.RIR/База настроек/AT1123.ods">База' +
        '                        настройки' +
        '                        АТ1123</a></li>' +
        '                    <li><a href="../1123/1123_umnoz.html">Проверка умножителя</a></li>' +
        '                </ul>' +
        '            </div>' +
        '        </li>' +
        '        <li><a href="../1123/1123_umnoz.html">Проверка умножителя 1123</a></li>' +
        '        <li><a href="../other/1125_uo.html">1125, 1103М. Проверка платы УО</a></li>' +
        '        <li><a href="../other/signalizator.html">Устройство сигнализации 1121,1123</a></li>' +
        '    </ul>' +
        '</details>' +
        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Умножители / делители</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../other/delitel.html">Проверка делителя</a></li>' +
        '        <li><a href="../other/umnoz_1121.html">Проверка умножителя 1121,α,β,1103,1125</a></li>' +
        '        <li><a href="../1123/1123_umnoz.html">Проверка умножителя 1123</a></li>' +
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
        '        <li><a href="../boi/boi1-uo.html">БОИ-1. Устройство Обработки<span class="under_construction"></span></a></li>' +
        '        <li><a href="../boi/boi.html">БОИ, БОИ-2. Преобразователь напряжения</a></li>' +
        '        <li><a href="../boi/boi2.html">БОИ2 (Блок обработки информации)</a></li>' +
        '        <li><a href="../boi/boi2-prog.html">БОИ-2. Прошивка</a></li>' +
        '        <li><a href="../boi/boi2-prov.html">БОИ-2. Проверка</a></li>' +
        '        <li><a href="../boi/boi4_pp_prosh.html">БОИ-4. Прошивка платы преобразователя</a></li>' +
        '        <li><a href="../boi/pda1120_pu4.html">КПК 1120 БОИ4</a></li>' +
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
        '        <li><a href="../other/bdrm-05m.html">БДРМ-05М. Настройка</a></li>' +
        '        <li><a href="../other/adapter.html">Адаптер USB-БД</a></li>' +
        '        <li><a href="../other/6130.html">АТ6130</a></li>' +
        '        <li><a href="../other/pdu.html">ПДУ</a></li>' +
        '        <li><a href="../other/flip.html">Flip. Как шить</a></li>' +
        '        <li><a href="../other/ed2_prosh.html">Прошивка ED2 (ChipProg)</a></li>' +
        '        <li><a href="../other/odu_to7.html">Переходник ODU на ТО-7</a></li>' +
        '' +
        '    </ul>' +
        '</details>' +

        '<details ' + mode + '>' +
        '    <summary>' +
        '        <span>Файлы, документы</span>' +
        '    </summary>' +
        '    <ul>' +
        '        <li><a href="../sertif_prosh/prosh.html">Список актуальных прошивок</a></li>' +
        '        <li><a href="../sertif_prosh/sertificate.html">Сертификаты и протоколы поверки</a></li>' +
        '        <li><a href="../sertif_prosh/macro.html">Как установить макрос для протоколов</a></li>' +
        '        <li><a href="../docs/AtomtexLibrary.zip">Макрос для протоколов поверки 1.21</a></li>' +
        '        <li><a href="../docs/GMS%20for%20Corel.rar">Макрос для CorelDraw</a></li>' +
        '        <li><a href="../docs/gurachevskiy-vl-radiacionnyy-kontrol-fizicheskie-osnovy-i-pribornaya-baza.pdf">Гурачевский.Радиационный контроль</a></li>' +
        '        <li><a href="../docs/catalogue_ru.pdf">Каталог продукции АТОМТЕХ</a></li>' +
        '' +
        '    </ul><br>' +
        '</details>';

}
