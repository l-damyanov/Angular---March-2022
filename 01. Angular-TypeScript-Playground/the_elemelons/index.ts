abstract class Melon {
    public weight: number;
    public melonSort: string;
    public element: string;

    constructor(weigth: number, melonSort: string) {
        this.weight = weigth;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Water';
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() {
        return `Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`
    }
}

class Firemelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Fire';
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() {
        return `Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`
    }
}

class Earthmelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Earth';
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() {
        return `Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`
    }
}

class Airrmelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.element = 'Air';
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() {
        return `
        Element: ${this.element}'\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`
    }
}

class Melolemonmelon extends Watermelon {
    public elementsOrder = ['Water', 'Fire', 'Earth', 'Air'];

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public morph() {
        const currentElement = this.elementsOrder.shift();
        this.elementsOrder.push(currentElement);
        this.element = currentElement;
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let firemelon : Firemelon = new Firemelon(12.5, "Yeet");
console.log(firemelon.toString());
