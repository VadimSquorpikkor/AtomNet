const DUNIT = 'DU';
const PULT = 'PU';
const BOX = 'box';
const WIRE = 'wire';
const G = 'gamma';
/*--------------------------------------------------------------------------------------------------------------------*/
/**Родительский класс*/
class Item {
    constructor(name, cat, img) {
        this._name = name;
        this._cat = cat;
        this._img = img;
    }
    /**Имя (БДКГ-02)*/
    get getName() { return this._name;
    }
    /**Категория (DU)*/
    get getCat() {
        return this._cat;
    }
    /**Путь к рисунку*/
    get getImg() {
        return this._img;
    }
}
/**Блок детектирования*/
class DU extends Item{
    constructor(name, img) {
        super(name, DUNIT, img);
        // this._type = type;
    }
}
/**Пульт управления*/
class PU extends Item {
    constructor(name, img) {
        super(name, PULT, img);
    }
}
/**Коробка*/
class Box extends Item {
    constructor(name, img) {
        super(name, BOX, img);
    }
}
/**Провод*/
class Wire extends Item {
    constructor(name, img) {
        super(name, WIRE, img);
    }
}
/**Линия к которой подключены элементы, не рисуется, это структурная единица, в ней хранятся элементы, добавленные пользователем*/
class Line {
    _items = [];
    constructor(name) {
        this._name = name;
    }
    /**Имя линии*/
    get getName() { return this._name; }
    /**Добавление элемента в линию*/
    addItem(item) { this._items.push(item); }
    /**Получение всех элементов подключенных к линии (блоки детектирования и пульты)*/
    get getItems() { return this._items; }
}
/*--------------------------------------------------------------------------------------------------------------------*/

let bdkg02 = new DU('БДКГ-02', 'bdkg02.png');
let pu900 = new PU('ПУ-900', 'pu900.png');
let k2_right = new Box('K2', 'k2_right.png');
let k2_left = new Box('K2', 'k2_left.png');
let k3 = new Box('K3', 'k3.png');
let wire_razyom = new Wire('провод с разъемом', 'provod.png');
let wire_hor = new Wire('провод', 'provod_h.png');
let wire_ver = new Wire('провод', 'provod_v.png');






