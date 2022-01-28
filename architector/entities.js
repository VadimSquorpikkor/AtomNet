const DUNIT = 'DU';
const PULT = 'PU';
const BOX = 'box';
const WIRE = 'wire';
const G = 'gamma';

class Item {
    constructor(name, cat, img) {
        this._name = name;
        this._cat = cat;
        this._img = img;
    }

    get getName() { return this._name;
    }

    get getCat() {
        return this._cat;
    }

    get getImg() {
        return this._img;
    }
}

class DU extends Item{
    constructor(name, img) {//todo img
        super(name, DUNIT, img);
        // this._type = type;
    }
}

class PU extends Item {
    constructor(name, img) {
        super(name, PULT, img);
    }
}

class Box extends Item {
    constructor(name, img) {
        super(name, BOX, img);
    }
}

class Wire extends Item {
    constructor(name, img) {
        super(name, WIRE, img);
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


let bdkg02 = new DU('БДКГ-02', 'bdkg02.png');
let pu900 = new PU('ПУ-900', 'pu900.png');
let k2_right = new Box('K2', 'k2_right.png');
let k2_left = new Box('K2', 'k2_left.png');
let k3 = new Box('K3', 'k3.png');
let wire_razyom = new Wire('провод с разъемом', 'provod.png');
let wire_hor = new Wire('провод', 'provod_h.png');
let wire_ver = new Wire('провод', 'provod_v.png');






