/* let uniStudent = student => {
  console.log(`${student.name} form ${student.university}`);
};

uniStudent({
  name: "Rhytonne",
  university: "Jaramogi university"
}); */

// destructuring comes here

let uniStudent = student => {
  let { name, university } = student;
  console.log(`${name} form ${university}`);
};

uniStudent({
  name: "Rhytonne",
  university: "Jaramogi university"
});
