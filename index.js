const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var count = 0;
var sum = 0;


function hitMe() {
    return Math.floor((Math.random()*13)+1); // generate random number between 1 and 13
}

// check wether to score is above 21
// if above 21 - lose game and exit
// else - prints the score and asks continue the game or stop 
function checkScore() {
    if (sum > 21) {
        console.log('your score is:', sum, 'you lose!');
        process.exit();
    } else {
        console.log('your score is:', sum);
        ask();
    }
}


function ask() {
    if (count < 2) {
        rl.question('type "hit" to draw a card or "stay" to stay: ', (answer) => {
            count++;
            if (answer === 'hit') {
                sum += hitMe();
                checkScore();
            } else if (answer === 'stay') {
                console.log('Your score is:', sum);
                process.exit();
            } else {
                console.log('Please type "hit" or "stay"');
                ask();
            }
        });
    } else {
        if (sum > 21) {
            console.log('your score is:', sum, 'you lose!');
        } else {
            console.log('your score is:', sum);
        }
        process.exit();
    }
}
// start here
ask();

