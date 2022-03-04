class Box {
    constructor() {
        this._boxes = [];
    }
    add(el) {
        this._boxes.push(el);
    }
    remove() {
        this._boxes.pop();
    }
    get count() {
        return this._boxes.length;
    }
}
let box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
let newBox = new Box();
newBox.add("Pesho");
newBox.add("Gosho");
console.log(newBox.count);
newBox.remove();
console.log(newBox.count);
