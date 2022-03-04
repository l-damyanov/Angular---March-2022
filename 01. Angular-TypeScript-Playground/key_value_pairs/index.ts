class KeyValuePair<T, U> {
    private key: T;
    private val: U;

    public setKeyValue(k, v) {
        this.key = k;
        this.val = v;
    } 

    public display() {
        console.log(`key = ${this.key}, value = ${this.val}`);
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();
