const STEP = 60;
let y_start_pos;
let x_pos;
let y_pos;

function addItemToLine(line, item) {
    line.addItem(item);
}

function calculatedLine(line) {
    let list = [];
    let items = line.getItems;
    for (let i = 0; i < items.length; i++) {
        list.push(items[i]);

        let wire;
        if (items[i].getCat===DUNIT) {
            wire = wire_razyom;
            list.push(wire);
        }
        if (items[i].getCat===PULT) {
            wire = wire_ver;
            // list.push('адаптер питания');//todo
        }

        let box;
        if (i === 0) box = k2_right;//boxType = 'K2';
        else if (i===items.length-1) box = k2_left;
        else box = k3;
        list.push(box);

        drawSet(items[i], wire, box);
        if (i!==items.length-1) drawWire();
    }
    return list;
}

function drawSet(item, provod, box) {
    y_pos = y_start_pos;
    drawItem(item.getImg, x_pos, y_pos);
    y_pos+=STEP*2;
    drawItem(provod.getImg, x_pos, y_pos);
    y_pos+=STEP;
    drawItem(box.getImg, x_pos, y_pos);
    x_pos+=STEP;

}

function drawWire() {
    drawItem(wire_hor.getImg, x_pos, y_pos);
    x_pos+=STEP;
}

function makeCountDataFromList(list) {
    let book = [];
    for (let s in list) {

    }
}


