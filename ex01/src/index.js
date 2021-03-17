var myPet = {
    species: "Doberman",
    name: "Reks",
    legs: 2,
    friends: ["Lilla", "Seff"]
} 
    function myFunction(myObj){
        return myObj;
    }

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };