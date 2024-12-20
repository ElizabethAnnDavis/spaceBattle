/*
 * Space Battle OOP Lab
 * 
 * Today, you will be using your knowledge of OOP, loops, and functions to build a rudimentary space battle game.
 * The game will be programmed for, and played using window.prompt to get input from the user and buttons in the browser, 
 * you can also use console.log and window.alert. This is your first mini-project. 
 * You should not style the page until you first get all the functionality down.
 * 
 * 
 * SPECIFICATIONS:
 * Build a game of battling alien spaceships using Javascript.
 * Earth has been attacked by a horde of aliens! 
 * You are the captain of the USS Assembly, on a mission to destroy every last alien ship.
 * Battle the aliens as you try to destroy them with your lasers.
 * There are six alien ships. 
 * The aliens' weakness is that they are too logical and attack one at a time: 
 * - they will wait to see the outcome of a battle before deploying another alien ship. 
 * Your strength is that you have the initiative and get to attack first. 
 * However, you do not have targeting lasers and can only attack the aliens in order. 
 * After you have destroyed a ship, you have the option to make a hasty retreat.
 * 
 * A game round would look like this:
 * - You attack the first alien ship
 * - If the ship survives, it attacks you
 * - If you survive, you attack the ship again
 * - If it survives, it attacks you again ... etc
 * - If you destroy the ship, you have the option to attack the next ship or to retreat
 * - If you retreat, the game is over, perhaps leaving the game open for further developments or options
 * - You win the game if you destroy all of the aliens
 * - You lose the game if you are destroyed
 * 
 * Ship Properties:
 * - hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
 * - firepower is the amount of damage done to the hull of the target with a successful hit
 * - accuracy is the chance between 0 and 1 that the ship will hit its target
 * 
 * Your spaceship, the USS Assembly should have the following properties:
 * - hull - 20
 * - firepower - 5
 * - accuracy - .7
 * 
 * The alien ships should each have the following ranged properties determined randomly:
 * - hull - between 3and 6
 * - firepower - between 2and 4
 * - accuracy - between .6and .8
 * 
 * You could be battling six alien ships each with unique values.
 * 
 */





class SpaceShip{
    constructor (hull, firepower, accuracy) {
        //this.name = ;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    move(){
        // moves left/right
    }

    fire(){
        // fires one shot at OP
    }
}

class Defender extends SpaceShip{
    constructor(){
        super(20, 5, .7);
        this.name = 'The USS Assembly';
    }

    attack(){
        // calls move() & fire() 
    }

    retreat(){
        // calls move() to move away from OP
    }
}

class Invader extends SpaceShip{
    // need to add random number ranges for these values but hard coding for the time being
    constructor(name){
        super(3, 2, .6);
        this.name = this.name;
    }

    attack(){
        // calls move() & fire() 
    }

    moveDown(){
        // moves down, closer to OP
    }
}

// 1.
// create Defender                                  <-- functional
// place on game board (ground - bottom of screen)  <-- display

// 2.
// create Invader                                   <-- functional
// place on game board (sky - top of screen)        <-- display

// 3. Round Loop, while Defender || Invader have hp left
//    - Defender fires at Invader
//      - hit or miss
//    - if Invader has hp left, fire at Defender
//      - hit or miss