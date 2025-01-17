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
 * - hull - between 3 and 6
 * - firepower - between 2 and 4
 * - accuracy - between .6 and .8
 * 
 * You could be battling six alien ships each with unique values.
 * 
 */





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

const attackBtn = document.createElement('button');
attackBtn.innerHTML = 'FIRE!';
const btnCont = document.querySelector('.btnCont');
//btnCont.classList.add('btnCont');
btnCont.appendChild(attackBtn);
attackBtn.hidden = true;

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
 
        // random number between 1-10, inclusive --> Math.floor(Math.random() * 10) + 1;
        // - if <= accuracy*10 --> hit, else --> miss
        let madeHit = Math.floor(Math.random() * 10) + 1;
        /* TEST CODE: */
        console.log("random number: " + madeHit);
        console.log("attacker is an alien: " + isAlien);

        if(madeHit <= (opShip.accuracy*10)){
            this.hull - opShip.firepower < 0 ? this.hull = 0 : this.hull = this.hull - opShip.firepower;
            alert(`${this.name} has been hit!\n${this.name} has lost ${opShip.firepower} hp`);
            console.log("HIT");
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
    //    - hull -> between 3 and 6, - firepower -> between 2 and 4, - accuracy -> between .6 and .8
    constructor(name){
        super((Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3) + 2), (Math.round((((Math.floor(Math.random() * 3) + 6)*0.1))*10)/10), true);
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
let isEarthRetreating = false;

// spaceships
const earthShip = new Defender();

const aliens = [new Invader('Zim'), new Invader('Gir'), new Invader('Tak'), new Invader('Skoodge'), new Invader('Sizz-Iorr'), new Invader('The Almighty Tallest')];

let alienCnt = 0;
let alien = thisAlien(alienCnt);

function startGame(e){
    // reset game
    resetGame();
    alien = thisAlien(alienCnt);

    /*
    if(!isFirstGame){
        //* TEST CODE: 
        console.log("FIRST RUN: " + isFirstGame);
    }else{
        //* TEST CODE: 
        console.log("FIRST RUN: " + isFirstGame);

        isFirstGame = false;
    };*/

    playGame();

}playBtn.addEventListener('click', startGame)

function playGame(){
    // create characters
    // 1. create Defender 
    bottomOfBoard.appendChild(teamEarthShip);
    
    // 2. create Invader   
    teamSpaceShip.innerHTML = alien.name;
    topOfBoard.appendChild(teamSpaceShip);
    alert(`Invader ${alien.name} is waiting to attack Earth!`);

    // 3. wait for attack, then call battle function
    attackBtn.addEventListener('click', battle);
}

function thisAlien(n){
    return aliens[n];
}

function nextAlien(){
    alien = thisAlien(alienCnt);
    teamSpaceShip.innerHTML = alien.name;
    topOfBoard.appendChild(teamSpaceShip);

    if(alienCnt === 4 || alienCnt === 1){
        alert(`${alien.name} is waiting to attack Earth!`);
    }else if(alienCnt === 5){
        alert(`${alien.name} are waiting to attack Earth!`);
    }else{
        alert(`Invader ${alien.name} is waiting to attack Earth!`);
    };
    
    attackBtn.addEventListener('click', battle);
}

// this needs updated to factor in the possiblity that earth retreats after defeating n aliens, where n < 6
function battle(e){
    alienCnt++;
    /* TEST CODE: */
    console.log("battling alien number: " + alienCnt);
    /* TEST CODE: */
    console.log("before loop hull: " + earthShip.hull + " " + alien.hull);
    console.log("before loop firepower: " + earthShip.firepower + " " + alien.firepower);
    console.log("before loop accuracy: " + earthShip.accuracy + " " + alien.accuracy);

    do{
        //    - Defender fires at Invader
        earthShip.attack(alien);
        //      - if Invader has hp left, fire at Defender
        alien.attack(earthShip);

        /* TEST CODE: */
        console.log("in loop: " + earthShip.hull + " " + alien.hull);
    }while(earthShip.hull > 0 && alien.hull > 0);
    /* TEST CODE: */
    console.log("in battle function: " + earthShip.hull + " " + alien.hull); 

    if(alien === aliens[5] || earthShip.hull === 0){
        battleOver();
    }else if(alien.hull === 0){
        topOfBoard.removeChild(teamSpaceShip);
        console.log("Good work!\n" + alien.name + " has been defeated");
        let userResponse = prompt(`Good work!\n${alien.name} has been defeated!\nDo you want to retreat?`, "no");

        if(userResponse.toLowerCase() === 'yes'){
            isEarthRetreating = true;
            battleOver();
        }else{
            nextAlien();
        };
    }
}

// this needs updated to factor in the possiblity that earth retreats after defeating n aliens, where n < 6
function battleOver(){
    /* TEST CODE: */
    console.log("after battle function: " + earthShip.hull + " " + alien.hull);
    /* TEST CODE: */
    console.log("in battleOver function: " + earthShip.name + " " + alien.name);

    // someone loses, call gameOver
    // 4. Display win || lose
    /* TEST CODE: */
    console.log("before if/else if: earth " + earthShip.hull);
    console.log("before if/else if: alien " + alien.hull);
    if(earthShip.hull === 0 || isEarthRetreating){
        // EARTH LOST
        // remove ship from screen
        bottomOfBoard.removeChild(teamEarthShip);
        
        if(isEarthRetreating){
            gameOver("You retreated so Earth was defeated :(");
        }else{
            gameOver("YOU LOSE!\nEarth has been defeated :(");
        };   
    }else if(alien.hull === 0){
        // THIS ALIEN LOST
        // remove ship from screen
        topOfBoard.removeChild(teamSpaceShip);
        gameOver("YOU WIN!\n" + alien.name + " have been defeated");

    };
}

function resetGame(){
    // clear old game
    // remove playBtn
    playBtn.hidden = true;
    // display attackBtn
    attackBtn.hidden = false;

    // reset ships hull 
    earthShip.hull = 20;
    for(let i = 0; i < 6; i++){
        aliens[i].hull = (Math.floor(Math.random() * 4) + 3);
    };
    alienCnt = 0;
    isEarthRetreating = false;
}

function gameOver(str){
    /* TEST CODE: */
    console.log("in gameOver function: " + earthShip.name + " " + alien.name);
    // display win || lose
    console.log(str);
    alert(str);
    playBtn.innerHTML = 'PLAY AGAIN';
    playBtn.hidden = false;
    attackBtn.hidden = true;
}