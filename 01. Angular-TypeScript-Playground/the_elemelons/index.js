class Melon {
    constructor(weigth, melonSort) {
        this.weight = weigth;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Water';
    }
    get elementIndex() {
        return this._elementIndex;
    }
    toString() {
        return `Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Fire';
    }
    get elementIndex() {
        return this._elementIndex;
    }
    toString() {
        return `Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Earth';
    }
    get elementIndex() {
        return this._elementIndex;
    }
    toString() {
        return `Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Airrmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Air';
    }
    get elementIndex() {
        return this._elementIndex;
    }
    toString() {
        return `
        Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementsOrder = ['Water', 'Fire', 'Earth', 'Air'];
    }
    morph() {
        const currentElement = this.elementsOrder.shift();
        this.elementsOrder.push(currentElement);
        this.element = currentElement;
    }
}
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let firemelon = new Firemelon(12.5, "Yeet");
console.log(firemelon.toString());
