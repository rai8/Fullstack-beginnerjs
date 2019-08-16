//restructing is the process of bringing back things together
var name = "Everest";
var height = 8778;
var output = () => console.log(`Mt.${name} is ${height} m tall`);
//the idepedent variables will be grouped together to form an object
let adventureClimbing = { name, height, output };
adventureClimbing.output();
