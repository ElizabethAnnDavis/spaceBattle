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
    constructor (hull, firepower, accuracy){ //, alien) {
        //this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        //this.alien = alien;
    }

    move(){
        // moves left/right
        // - change this x position
        //   - controlled by left/right arrows
    }

    fire(opShip, isAlien){
        // fires one shot at OP
        opShip.gotHit(this, isAlien);

    }

    gotHit(opShip, isAlien){
        // reduce hull when ship is hit
        //let newHull = this.hull - opShip.firepower;
        //this.hull - opShip.firepower < 0 ? this.hull = 0 : this.hull = this.hull - opShip.firepower;
        

        // NOT THIS, i think
        // if op x position is within 25px of this x position, hit
        // - reduce op.hull by this.firepower

        // actually THIS
        // random number between 1-10, inclusive 
        // Math.floor(Math.random() * 10) + 1;
        // - isNotAlien passed in
        //   - if 1-6, hit
        //   - if 7 && !isAlien, hit
        let madeHit = Math.floor(Math.random() * 10) + 1;
        /* TEST CODE: */
        console.log("random number: " + madeHit);
        console.log("attacker is and alien: " + isAlien);

        if(madeHit < 7){
            this.hull - opShip.firepower < 0 ? this.hull = 0 : this.hull = this.hull - opShip.firepower;
            console.log("HIT");//}else if(madeHit = 7 && !isAlien){console.log("HIT");
        }else{
            console.log("MISS");
        };
    }
    
}

class Defender extends SpaceShip{
    constructor(){
        super(20, 5, .7, false);
        this.name = 'The USS Assembly';
        this.alien = false;
    }

    attack(opShip){
        // calls move() & fire()
        if(this.hull === 0){
            return;
        };
        this.fire(opShip, this.alien);
    }

    retreat(opShip){
        // calls move() to move away from OP
    }
}

class Invader extends SpaceShip{
    // need to add random number ranges for these values but hard coding for the time being
    constructor(name){
        super(6, 2, .6, true);//super(3, 2, .6);
        this.name = this.name;
        this.alien = true;
    }

    attack(opShip){
        // calls move() & fire()
        if(this.hull === 0){
            return;
        };
        this.fire(opShip, this.alien);
    }

    moveDown(){
        // moves down, closer to OP
        // - change this y position
        //   - controlled by down arrow
    }
}

// may need an InvaderFactory to genorate many alien ships 



// 1.
// create Defender                                             <-- functional
const earthShip = new Defender();
// place on game board (ground - bottom of screen)             <-- display

// 2.
// create Invader                                              <-- functional
const alien = new Invader("Zim");
// place on game board (sky - top of screen)                   <-- display

/* TEST CODE: */
console.log("before loop: " + earthShip.hull + " " + alien.hull);

// 3. do Round Loop, while Defender || Invader have hp left    <-- functional
do{
    //    - Defender fires at Invader
    earthShip.attack(alien);
    //      - hit or miss
    //alien.gotHit(earthShip);
    //     - if Invader has hp left, fire at Defender
    alien.attack(earthShip);
    //       - hit or miss
    //earthShip.gotHit(alien);

    /* TEST CODE: */
    console.log("in loop: " + earthShip.hull + " " + alien.hull);
}while(earthShip.hull > 0 && alien.hull > 0);

/* TEST CODE: */
console.log("after loop: " + earthShip.hull + " " + alien.hull);

// 4. Display win || lose
//    - call gameOver



/*
// boolean
let isfirstGame = true;

function startGame(e){
    // reset game
    // game play logic
    // someone loses, call gameOver
}playBtn.addEventListener('click', startGame)

function resetGame(){
    // clear old game
    // set isFirstGame = false
    // remove playBtn
    // place inital characters
}

function gameOver(){
    // display win || lose
    // display playBtn
}
 */