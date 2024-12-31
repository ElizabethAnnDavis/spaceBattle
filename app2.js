/* SECOND DRAFT */

const topOfBoard = document.getElementById('row1');
const middleOfBoard = document.getElementById('row4');
const bottomOfBoard = document.getElementById('row8');

const playBtn = document.querySelector('.playBtn');

const teamEarthShip = document.createElement('div');
teamEarthShip.classList.add('trapezoid');
teamEarthShip.id = 'earthShip';
const teamSpaceShip = document.createElement('div');
teamSpaceShip.classList.add('trapezoid');
teamSpaceShip.id = 'alienShip';

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
        /*
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') {
              // Up arrow key pressed
              console.log('Up arrow pressed'); 
            } else if (event.key === 'ArrowDown') {
              // Down arrow key pressed
              console.log('Down arrow pressed'); 
            } else if (event.key === 'ArrowLeft') {
              // Left arrow key pressed
              console.log('Left arrow pressed'); 
            } else if (event.key === 'ArrowRight') {
              // Right arrow key pressed
              console.log('Right arrow pressed'); 
            }
        });*/
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
            console.log("HIT");
        }else if(madeHit = 7 && !isAlien){
            console.log("HIT - 7");
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
        this.name = name;
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



// boolean
let isFirstGame = true;
let keepPlayingGame = true;

function startGame(){//e){
    // reset game
    if(!isFirstGame){
        /* TEST CODE: */
        console.log("FIRST RUN: " + isFirstGame);

        resetGame();
    }else{
        /* TEST CODE: */
        console.log("FIRST RUN: " + isFirstGame);

        isFirstGame = false;
    };

    playGame();

}//playBtn.addEventListener('click', startGame)

function playGame(){
    // create characters
    // 1.
    // create Defender                                             <-- functional
    const earthShip = new Defender();
    // place on game board (ground - bottom of screen)             <-- display
    bottomOfBoard.appendChild(teamEarthShip);
    
    // 2.
    //  create Invader                                              <-- functional
    const alien = new Invader("Zim");
    // place on game board (sky - top of screen)                    <-- display
    topOfBoard.appendChild(teamSpaceShip);
    // may need an InvaderFactory to genorate many alien ships 

    // game play logic
    /* TEST CODE: */
    console.log("before loop: " + earthShip.hull + " " + alien.hull);

    // 3. do Round Loop, while Defender || Invader have hp left    <-- functional
    do{
        //    - Defender fires at Invader
        earthShip.attack(alien);
        //      - hit or miss
        //alien.gotHit(earthShip);
        //      - if Invader has hp left, fire at Defender
        alien.attack(earthShip);
        //       - hit or miss
        // earthShip.gotHit(alien);
        /* TEST CODE: */
        console.log("in loop: " + earthShip.hull + " " + alien.hull);
    }while(earthShip.hull > 0 && alien.hull > 0);

    /* TEST CODE: */
    console.log("after loop: " + earthShip.hull + " " + alien.hull);

    // someone loses, call gameOver
    // 4. Display win || lose
    /* TEST CODE: */
    console.log("before if/else if: earth " + earthShip.hull);
    console.log("before if/else if: alien " + alien.hull);
    if(earthShip.hull === 0){
        // EARTH LOST
        // remove ship from screen
        bottomOfBoard.removeChild(teamEarthShip);
        console.log("YOU LOSE!\nEarth has been defeated :(");
        //gameOver("YOU LOSE!\nEarth has been defeated :(");
    }else if(alien.hull === 0){
        // THIS ALIEN LOST
        // remove ship from screen
        topOfBoard.removeChild(teamSpaceShip);
        console.log("YOU WIN!\n" + alien.name + " has been defeated");
        //gameOver("YOU WIN!\n" + alien.name + " has been defeated");

    };
    //     - call gameOver
}

function resetGame(){
    // clear old game
    // remove playBtn
    // place inital characters
    // set playGame = true
}

function gameOver(str){
    // display win || lose
    console.log(str);
    // display playBtn
}


do{
    for(let i = 0; i < 3; i++){
        /* TEST CODE: */
        //console.log("Game Loop: " + (i+1));
        //startGame();
        //if(i === 2){
          //  keepPlayingGame = false;
        //};
        /* TEST CODE: */
        //console.log("Play Again: " + keepPlayingGame);
    };
    startGame();
    keepPlayingGame = false;

}while(keepPlayingGame === true);