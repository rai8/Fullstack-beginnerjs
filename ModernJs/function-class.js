//this was the old way of creating class before the ecma6 came into play

function Holiday(destination, days) {
  this.destination = destination;
  this.days = days;
}
//adding a method to this function using prototype
//using an arrow function here will throw an error
Holiday.prototype.info = function() {
  console.log(this.destination + " |" + this.days + " days");
};

var nepal = new Holiday("Nepal", 30);
console.log(nepal.info());
