const STEP = 60;
let y_start_pos;
let x_pos;
let y_pos;

/**Из списка БД и/или пультов: а) получает список деталей вместе с проводами и коробками (подбирая нужный тип провода и
 * коробок); б) из полученного списка рисует схему СРК*/
function calculatedLine(line) {
    let list = [];
    let items = line.getItems;
    for (let i = 0; i < items.length; i++) {
        //Добавление блока или пульта
        list.push(items[i]);

        //Добавление провода между блоком и коробкой
        let wire;
        if (items[i].getCat===DUNIT) {
            wire = wire_razyom;
            list.push(wire);
        }
        if (items[i].getCat===PULT) {
            wire = wire_ver;
            // list.push('адаптер питания');//todo
        }

        //Добавление коробки
        let box;
        if (i === 0) box = k2_right;//boxType = 'K2';
        else if (i===items.length-1) box = k2_left;
        else box = k3;
        list.push(box);

        //Рисование деталей и проводов
        drawSet(items[i], wire, box);
        if (i!==items.length-1) drawWire();
    }
    return list;
}

/**Рисует вертикальную стопку из трех элементов: БД(или пульта), провода, коробки. Перед началом рисования сбрасывает
 * координату по высоте*/
function drawSet(item, provod, box) {
    y_pos = y_start_pos;
    drawItem(item.getImg, x_pos, y_pos);
    y_pos+=STEP*2;
    drawItem(provod.getImg, x_pos, y_pos);
    y_pos+=STEP;
    drawItem(box.getImg, x_pos, y_pos);
    x_pos+=STEP;
}

/**Рисует горизонтальный провод соединяющий две коробки. Следует после вертикальной стопки (не последней). Так как в
 * этом методе нет сброса координат по высоте, то провод в итоге рисуется на высоте нижнего элемента стопки (коробки)*/
function drawWire() {
    drawItem(wire_hor.getImg, x_pos, y_pos);
    x_pos+=STEP;
}

/**Из списка объектов создает map, где ключ — это название, а значение — это количество элементов*/
function makeCountMapDataFromList(list) {
    let book = new Map();
    for (let item of list) {
        if (book.has(item.getName)) {
            let count = book.get(item.getName);
            count++;
            book.set(item.getName, count);
        } else {
            book.set(item.getName, 1);
        }
    }
    return book;
}


