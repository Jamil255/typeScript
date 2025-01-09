"use strict";
var Ticket;
(function (Ticket) {
    Ticket["VIP"] = "vip";
    Ticket[Ticket["BUSSINES"] = 1] = "BUSSINES";
    Ticket[Ticket["ECNOMIC"] = 2] = "ECNOMIC";
    Ticket[Ticket["BUSSINES_CLASS"] = 3] = "BUSSINES_CLASS";
    Ticket[Ticket["ECNOMIC_LOCAL"] = 4] = "ECNOMIC_LOCAL";
})(Ticket || (Ticket = {}));
const jSeat = Ticket.VIP;
console.log(jSeat);
