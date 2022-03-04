var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = '';
        this.price = 0;
        this.status = '';
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
var tickets = [];
function getTickets(arr, sortedBy) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        var _a = el.split('|'), elDestination = _a[0], elPrice = _a[1], elStatus = _a[2];
        var ticket = new Ticket(elDestination, elPrice, elStatus);
        tickets.push(ticket);
    }
    if (sortedBy == 'destination') {
        return tickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (sortedBy == 'price') {
        return tickets.sort(function (a, b) { return parseFloat(a.price) - parseFloat(b.price); });
    }
    else if (sortedBy == 'status') {
        return tickets.sort(function (a, b) { return a.status.localeCompare(b.status); });
    }
}
getTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'price');
console.log('My tickets' + tickets);
for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
    var ticket = tickets_1[_i];
    console.log(ticket);
}
