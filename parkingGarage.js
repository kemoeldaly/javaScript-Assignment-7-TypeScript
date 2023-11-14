var ParkingGarage = /** @class */ (function () {
  function ParkingGarage() {
    this.tickets = Array.from({ length: 10 }, function (_, i) {
      return i + 1;
    });
    this.parkingSpaces = Array.from({ length: 10 }, function (_, i) {
      return i + 1;
    });
    this.currentTicket = {
      ticketNumber: 0,
      parkingSpaceNumber: 0,
      paid: false,
    };
  }
  ParkingGarage.prototype.takeTicket = function () {
    if (this.tickets.length === 0) {
      console.log("Sorry, the parking garage is full.");
      return;
    }
    if (this.parkingSpaces.length === 0) {
      console.log("All parking spaces are occupied.");
      return;
    }
    var ticketNumber = this.tickets.pop();
    var parkingSpaceNumber = this.parkingSpaces.pop();
    this.currentTicket = {
      ticketNumber: ticketNumber,
      parkingSpaceNumber: parkingSpaceNumber,
      paid: false,
    };
    console.log(
      "Ticket "
        .concat(ticketNumber, " issued. Park in space ")
        .concat(parkingSpaceNumber, ".")
    );
  };
  ParkingGarage.prototype.payForParking = function () {
    if (this.currentTicket.ticketNumber === 0) {
      console.log("No active ticket. Please take a ticket first.");
      return;
    }
    var payment = prompt("Enter the amount to pay for parking:");
    if (payment) {
      this.currentTicket.paid = true;
      console.log("Ticket has been paid. You have 15 minutes to leave.");
    } else {
      console.log("Payment not received. Please pay for parking.");
    }
  };
  ParkingGarage.prototype.leaveGarage = function () {
    if (this.currentTicket.ticketNumber === 0) {
      console.log("No active ticket. Please take a ticket first.");
      return;
    }
    if (this.currentTicket.paid) {
      console.log("Thank you, have a nice day!");
      this.parkingSpaces.push(this.currentTicket.parkingSpaceNumber);
      this.tickets.push(this.currentTicket.ticketNumber);
      this.currentTicket = {
        ticketNumber: 0,
        parkingSpaceNumber: 0,
        paid: false,
      };
    } else {
      var payment = prompt("Please pay for parking before leaving:");
      if (payment) {
        console.log("Thank you, have a nice day!");
        this.parkingSpaces.push(this.currentTicket.parkingSpaceNumber);
        this.tickets.push(this.currentTicket.ticketNumber);
        this.currentTicket = {
          ticketNumber: 0,
          parkingSpaceNumber: 0,
          paid: false,
        };
      } else {
        console.log("Payment not received. Please pay for parking.");
      }
    }
  };
  return ParkingGarage;
})();
var garage = new ParkingGarage();
garage.takeTicket();
garage.payForParking();
garage.leaveGarage();
