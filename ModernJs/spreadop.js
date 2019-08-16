var kenyaMountains = ["Mt.Kenya", "Mt.Longonot"];
var tzMountains = ["Mt.Kilimajaro", "Mt.Everest"];
var eastAfricaMountains = [...tzMountains, ...kenyaMountains];
console.log(eastAfricaMountains);

//using spread operators with objects
var day = {
  morning: "toast with milk",
  lunch: "fried chicken with chips"
};
var evening = {
  dinner: "wine and champaigne"
};
var picnic = { ...day, ...evening };
console.log(picnic);
