class Ticket {
    destination: string = '';
    price: number = 0;
    status: string = '';

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

let tickets: object[] = [];

function getTickets(arr, sortedBy: string) {
    for (let el of arr) {
        let [elDestination, elPrice, elStatus] = el.split('|');
        let ticket = new Ticket(elDestination, elPrice, elStatus)
        tickets.push(ticket);
    }

    if (sortedBy == 'destination') {
        return tickets.sort((a: any, b: any) => a.destination.localeCompare(b.destination));
    } else if (sortedBy == 'price') {
        return tickets.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortedBy == 'status') {
        return tickets.sort((a: any, b: any) => a.status.localeCompare(b.status));
    }
}

getTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination');
console.log('My tickets' + tickets);
for (let ticket of tickets) {
    console.log(ticket);
}
