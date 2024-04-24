
// Object Literal
let houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"] 
}

// console.log(houseKeeper1);

// Contructor Function
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = (location) => {
        console.log(`${this.name} is cleaning ${location}`);
    }
}


// instance of the HouseKeeper object
houseKeeper1 = new HouseKeeper(8, "Marry", ["bathroom", "lobby", "bedroom"]);
// console.log(houseKeeper1);

houseKeeper1.clean("lobby");

