const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
console.log('-------------------Exercise 3-----------------------------')

game.difficulty = 'Easy'

console.log('-------------------Exercise 3-----------------------------')
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
console.log('-------------------Exercise 4-----------------------------')

game.party.push(pokemon[6])

console.log('-------------------Exercise 4-----------------------------')
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
console.log('-------------------Exercise 5-----------------------------')

game.party.push(pokemon[121], pokemon[149], pokemon[62])
console.log(game.party)

console.log('-------------------Exercise 5-----------------------------')
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
console.log('-------------------Exercise 6-----------------------------')

for (let i = 0; i < game.gyms.length; i ++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }
}

console.log(game.gyms)

console.log('-------------------Exercise 6-----------------------------')
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
console.log('-------------------Exercise 7-----------------------------')

game.party.splice(2, 2, pokemon[150], pokemon[63]) //=> pokemon[121] Mr. Mime does not evolve
console.log(game.party) 

console.log('-------------------Exercise 7-----------------------------')
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log('-------------------Exercise 8-----------------------------')

game.party.forEach(function (myPokemon) {
  console.log(myPokemon.name);
})

console.log('-------------------Exercise 8-----------------------------')
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
console.log('-------------------Exercise 9-----------------------------')

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    console.log(pokemon[i].name)
  }
}

console.log('-------------------Exercise 9-----------------------------')

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
console.log('-------------------Exercise 10-----------------------------')

game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
}

// game.catchPokemon(pokemon[99])
console.log(game.party)

console.log('-------------------Exercise 10-----------------------------')

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
console.log('-------------------Exercise 11-----------------------------')

game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
  for (let i = 0; i < game.items.length; i++) {
    if (game.items[i].name === 'pokeball') {
      game.items[i].quantity -= 1
    }
  }
}

console.log('-------------------Exercise 11-----------------------------')
/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
console.log('-------------------Exercise 12-----------------------------')

for (let idx = 0; idx < game.gyms.length; idx ++) {
  if (game.gyms[idx].difficulty < 6) {
      game.gyms[idx].completed = true;
  }
}

console.log('-------------------Exercise 12-----------------------------')
/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
console.log('-------------------Exercise 13-----------------------------')

game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };

  game.gyms.forEach(function (gym) {
    if (gym.completed === true) {
      gymTally.completed ++
    } else if (gym.completed === false) {
      gymTally.incomplete ++
    };
  });
  
  console.log(gymTally)
}

console.log('-------------------Exercise 13-----------------------------')
/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = function () {
  return game.party.length
}



/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
console.log('-------------------Exercise 15-----------------------------')

for (let x = 0; x < game.gyms.length; x ++) {
  if (game.gyms[x].difficulty < 8) {
      game.gyms[x].completed = true;
  }
}

console.log('-------------------Exercise 15-----------------------------')

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log('-------------------Exercise 16-----------------------------')

console.log(game)

console.log('-------------------Exercise 16-----------------------------')




/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?

Solve Exercise 17 here:
*/
console.log('-------------------Exercise 17-----------------------------')

game.party.sort(function (a, b) {
  return b.hp - a.hp
})
console.log(game.party)

console.log('-------------------Exercise 17-----------------------------')
/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/
console.log('-------------------Exercise 18-----------------------------')

game.collection = [];
game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
  for (let i = 0; i < game.items.length; i++) {
    if (game.items[i].name === 'pokeball') {
      game.items[i].quantity -= 1
    }
  }
  if (game.party.length > 6) {
    const removedPokemon = game.party.splice(6)
    game.collection.push(...removedPokemon);
    
 }
};

console.log('-------------------Exercise 18-----------------------------')

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/
console.log('-------------------Exercise 19-----------------------------')

game.catchPokemon = function(pokemonObj) {
  for (let i = 0; i < game.items.length; i++) {
    if (game.items[i].name === 'pokeball' && game.items[i].quantity > 0) {
      game.items[i].quantity -= 1;
      game.party.push(pokemonObj);
    } else if (game.items[i].name === 'pokeball' && game.items[i].quantity <= 0) {
      game.message = 'There are not enough pokeballs to catch the desired Pokemon!'
    }
  };
};

// game.catchPokemon(pokemon[11])
// game.catchPokemon(pokemon[15])
// game.catchPokemon(pokemon[20])
// game.catchPokemon(pokemon[25])
// game.catchPokemon(pokemon[88])
// game.catchPokemon(pokemon[27])
// game.catchPokemon(pokemon[89])
// game.catchPokemon(pokemon[77])
// game.catchPokemon(pokemon[63])

console.log(game)
  // if (game.items[1].quantity > 0) {
  //     game.items[1].quantity -= 1;
  //     game.party.push(pokemonObj);
  //     game.message = `${pokemonObj.name} was caught!`;
  // } else {
  //   game.message = 'There are not enough pokeballs to catch the desired Pokemon!';
  // };
console.log('-------------------Exercise 19-----------------------------')
/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/
console.log('-------------------Exercise 20-----------------------------')

game.catchPokemon = function(pokemonName) {
  const pokemonFound = pokemon.find(function (pokey) {
    return pokey.name === pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase()
  });
  for (let i = 0; i < game.items.length; i++) {
    if (game.items[i].name === 'pokeball' && game.items[i].quantity > 0) {
      game.items[i].quantity -= 1;
      game.party.push(pokemonFound);
    } else if (game.items[i].name === 'pokeball' && game.items[i].quantity <= 0) {
      game.message = 'There are not enough pokeballs to catch the desired Pokemon!'
    }
  };
}

game.catchPokemon('caterPIE')
game.catchPokemon('butterFree')
console.log(game)

console.log('-------------------Exercise 20-----------------------------')

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

console.log('-------------------Exercise 21-----------------------------')

const myPokemonObj = {};
const typeKeys = [];
pokemon.forEach(function (eachPokemon) {
  if (!typeKeys.includes(eachPokemon.type)) {
    typeKeys.push(eachPokemon.type)
  };
  return typeKeys
})

for (let i = 0; i < typeKeys.length; i ++) {
  myPokemonObj[typeKeys[i]] = []
  for (let x = 0; x < pokemon.length; x ++) {
    if (pokemon[x].type === typeKeys[i]) {
      myPokemonObj[typeKeys[i]].push(pokemon[x])
    }
  }
}

console.log(myPokemonObj)


console.log('-------------------Exercise 21-----------------------------')