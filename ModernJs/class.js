class Holiday {
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }
  info() {
    console.log(this.destination + " will take " + this.days + " days");
  }
}
const trip = new Holiday("Takizawa, China", 7);

console.log(trip.info());
