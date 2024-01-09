// Part 1, create adventurer object manually
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "tiny sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}`)
    }
}

// Part 2, making a Character class and recreating the adventurer using the class
// Part 4, adding static properties
class Character {
    // maxHealth = 100
    static maxHealth = 100
    constructor (name){
        this.name = name
        this.health = 100
        this.inventory = []
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}`)
        return result
    }
}

// Part 3, adding Class Features by extending the class
class Adventurer extends Character {
    static roles = ["Fighter", "Healer", "Wizard"]
    constructor(name, role, pronoun){
        super(name)
        for(const type of Adventurer.roles){
            if(Adventurer.roles[type] = role){
                this.role = role
            }else{
                this.role = "Error! Invalid role!"
            }
        }
        this.inventory.push("bedroll", "50 gold coins")
        this.pronouns = pronoun
    }
    scout (){
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }
    attack (target){
        console.log(`${this.name} is attacking ${target} for...`)
        super.roll()
    }
    duel(defender){
        while(50 < this.health && 50 < defender.health){
            let attackerRoll = this.roll()
            let defenderRoll = defender.roll()
            if(attackerRoll > defenderRoll){
                defender.health = defender.health - 10
                console.log(`This round ${this.name} wins! ${defender.name} loses 10 health. ${this.name}'s health = ${this.health}. ${defender.name}'s health = ${defender.health}`)
            }else if(attackerRoll < defenderRoll){
                this.health = this.health - 10
                console.log(`This round ${defender.name} wins! ${this.name} loses 10 health. ${this.name}'s health = ${this.health}. ${defender.name}'s health = ${defender.health}`)
            }else if (attackerRoll === defenderRoll){
                console.log(`This round has ended in a draw. Roll again!`)
            }
        }if(50 == this.health){
            console.log(`Duel over! ${defender.name} wins!`)
        }else if(50 == defender.health){
            console.log(`Duel over! ${this.name} wins!`)
        }
    }
}

class Companion extends Character{
    constructor(name, type){
        super(name)
        this.type = type
    }
}

// Part 5, using a factory to create Healer role adventurers
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  

const robin = new Adventurer("Robin", "Healer", "he")
robin.inventory.push("sword", "potion", "artifact")
robin.companion = new Companion("Leo", "Cat")
robin.companion.companion = new Companion("Frank", "Flea")
robin.companion.companion.inventory.push("small hat", "tiny sunglasses")

console.log(robin)
console.log(robin.companion.companion.inventory)
const sparrow = new Adventurer("Sparrow", "Fighter", "Wizard")
sparrow.duel(robin)

