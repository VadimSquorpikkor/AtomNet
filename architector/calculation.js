let line;

let dataDiv = document.getElementById('data');
let resultDiv = document.getElementById('result');
let playground = document.getElementById('playground');

let insertDUButton = document.getElementById('insert_du');
let insertPUButton = document.getElementById('insert_pu');
let calculateButton = document.getElementById('calculate');
let resetButton = document.getElementById('reset');

insertDUButton.addEventListener("click", function () { addItem(bdkg02); });
insertPUButton.addEventListener("click", function () { addItem(pu900); });
resetButton.addEventListener("click", function () { resetPlayground(); });
calculateButton.addEventListener("click", function () { calculate(); });
/*--------------------------------------------------------------------------------------------------------------------*/

/**Выводит рисунок по заданным координатам*/
function drawItem(src, x, y) {
    playground.innerHTML += '<img src="'+src+'" style="position: absolute; margin-left: '+x+'px; margin-top: '+y+'px"  alt="нет рисунка">';
}

/**Добавляет item к линии и выводит его имя в список*/
function addItem(item) {
    line.addItem(item);
    dataDiv.innerHTML += '<span class="data_span">'+item.getName+'</span><br>';
}

/**Сброс данных*/
function resetPlayground() {
    x_pos = STEP;
    y_pos = STEP;
    y_start_pos = STEP;
    line = new Line('line1');
    dataDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    playground.innerHTML = '';
}

/**Расчет. Получение списка деталей из списка блоков с добавлением необходимых коробок и проводов.
 * Вывод данных в виде таблицы*/
function calculate() {
    let list = calculatedLine(line);
    let map = makeCountMapDataFromList(list);
    createTableFromMap(map);
}

/**Перевод JS Map в HTML Table*/
function createTableFromMap(book) {
    let data = '<table style="max-width: 500px; margin: 5px auto">';
    data+='<tr><th>Наименование</th><th>Количество</th></tr>';
    book.forEach((value, key, map) => {
        console.log(key+' - '+value);
        data+='<tr><td>'+key+'</td><td>'+value+'</td></tr>';
    });
    data+='</table>';
    resultDiv.innerHTML=data;
}

resetPlayground();