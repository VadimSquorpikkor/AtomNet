const DUNIT = 'DU';
const PULT = 'PU';
const BDKG02 = 'bdkg-02';
const G = 'gamma';





class Item {
    constructor(name, type, cat) {
        this._name = name;
        this._type = type;
        this._cat = cat;
    }

    get getName() { return this._name;
    }

    get getType() {
        return this._type;
    }
    get getCat() {
        return this._cat;
    }
}

class DU extends Item{
    constructor(name, type) {
        super(name, type, DUNIT);
    }
}

class PU extends Item {
    constructor(name) {
        super(name, 'no_type', PULT);
    }
}

class Line {
    _items = [];

    constructor(name) {
        this._name = name;
    }

    get name() { return this._name; }

    addItem(item) { this._items.push(item); }

    get getItems() { return this._items; }
}





function addItemToLine(line, item) {
    line.addItem(item);
}

function calculatedLine(line) {
    let list = [];
    let boxType;
    let items = line.getItems;
    for (let i = 0; i < items.length; i++) {
        list.push(items[i].getName);
        if (items[i].getCat===DUNIT) list.push('провод с разъемом');
        if (items[i].getCat===PULT) list.push('адаптер питания');

        if (i === 0) boxType = 'K2';
        else if (i===items.length-1) boxType = 'K2';
        else boxType = 'K3';
        list.push(boxType);

        drawSet(items[i], 'провод', boxType);
    }
    return list;
}

function drawSet(item, provod, box) {
    let itemImg = getImage(item);
    let provodImg = getImage(provod);
    let boxImg = getImage(box);
}

function getImage(stuff) {

}


