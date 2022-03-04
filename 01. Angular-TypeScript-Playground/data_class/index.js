var RequestClass = /** @class */ (function () {
    function RequestClass(method, uri, version, message) {
        this.method = '';
        this.uri = '';
        this.version = '';
        this.message = '';
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    return RequestClass;
}());
var myData = new RequestClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
