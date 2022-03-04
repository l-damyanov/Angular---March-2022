class Box<T> {
    private _boxes = [];

    public add(el) {
        this._boxes.push(el);
    }

    public remove() {
        this._boxes.pop();
    }

    get count(): number {
        return this._boxes.length;
    }
}


let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let newBox = new Box<String>();
newBox.add("Pesho");
newBox.add("Gosho");
console.log(newBox.count);
newBox.remove();
console.log(newBox.count);


