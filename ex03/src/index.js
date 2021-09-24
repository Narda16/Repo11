var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  myNewPets.push("Bird", "Fish");
//   console.log(myNewPets);
  var firstPet = myNewPets.shift();
//   console.log(firstPet);
  var lastPet = myNewPets.pop();
//   console.log(lastPet);
  myNewPets.unshift("Lion");
//   console.log(myNewPets);
  return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
