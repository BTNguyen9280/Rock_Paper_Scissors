const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const roundResults = document.querySelector('#roundResults')
const score = document.querySelector('#score')

let userscore = 0
let computerscore = 0
score.textContent = `Player score: ${userscore} --- Computer score: ${computerscore}`

const computerinput = () =>{
    ind = Math.floor(Math.random()*3+1)
    if (ind <= 1) {
        return computer = `rock`
    }
    else if (ind > 1 && ind <=2) {
        return computer = `paper`
    }
    else {
        return computer = `scissors`
    }
}

const playround = (userin,computerchoice) => {
    capcomp = computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1);
    capuser = userin.charAt(0).toUpperCase() + userin.slice(1);
    if (userin == computerchoice) {
        roundResults.textContent=`You both chose ${capcomp} It's a tie!`
        return `tie`
    }
    else if (userin == `rock` && computerchoice == `scissors`){
        roundResults.textContent=`You win! ${capuser} beats ${capcomp}.`
    return 'win';
    }
    else if (userin == `paper` && computerchoice == `rock`) {
        roundResults.textContent=`You win! ${capuser} beats ${capcomp}.`
        return 'win';
    }
    else if(userin==`scissors` && computerchoice == `paper`) {
        roundResults.textContent=`You win! ${capuser} beats ${capcomp}.`
        return 'win';
    }
    else {
        roundResults.textContent=`You lose! ${capcomp} beats ${capuser}`
        return 'lose';
    }
}

rock.addEventListener('click', function(e) {
    let computerchoice = computerinput();
    let round = playround('rock',computerchoice);
    if (round=='win') {
        ++userscore
    }
    else if (round == 'lose') {
        ++computerscore
    }
    score.textContent = `Player score: ${userscore} --- Computer score: ${computerscore}`
    if (userscore == 5) {
        alert ('User wins! They reached a score of 5 first.')
        userscore = 0 
        computerscore = 0
    }
    if (computerscore ==5) {
        alert('Computer wins! They reached a score of 5 first.')
        userscore = 0 
        computerscore = 0
    }

})
paper.addEventListener('click', function(e) {
    let computerchoice = computerinput();
    let round = playround('paper', computerchoice);
    if (round=='win') {
        userscore++
    }
    else if (round == 'lose') {
        computerscore++
    }
    score.textContent = `Player score: ${userscore} --- Computer score: ${computerscore}`
    if (userscore == 5) {
        alert ('User wins! They reached a score of 5 first.')
        userscore = 0 
        computerscore = 0
    }
    if (computerscore ==5) {
        alert('Computer wins! They reached a score of 5 first.')
        userscore = 0 
        computerscore = 0
    }

})
scissors.addEventListener('click', function(e) {
    let computerchoice = computerinput();
    let round = playround('scissors', computerchoice)
    if (round=='win') {
        userscore++
    }
    else if (round == 'lose') {
        computerscore++
    }
    score.textContent = `Player score: ${userscore} --- Computer score: ${computerscore}`
    if (userscore == 5) {
        alert ('User wins! They reached a score of 5 first.')
        userscore = 0 
        computerscore = 0
    }
    if (computerscore ==5) {
        alert('Computer wins! They reached a score of 5 first.')
        userscore = 0 
        computerscore = 0
    }

})



/*const game = (i=1, userscore=0, computerscore=0) =>{
    if (i>5) {
        if (userscore > computerscore) {
            return `You win! Final score is ${userscore} - ${computerscore}.`;
        }
        else if (userscore < computerscore) {
            return `You lose! Final score is ${userscore} - ${computerscore}.`;
        }
        else {
            return `It is a tie! Final score is ${userscore} - ${computerscore}.`;
        }
    }
    else {
        let userchoice = prompt("Enter rock, paper, or scissors.");
        userchoice = userchoice.toLowerCase();
        let computerchoice = computerinput();
        let round = playround(userchoice,computerchoice);
        console.log(round);
        if (round.includes(`You win!`)) {
            return (game(++i,++userscore,computerscore));
        }
        else if (round.includes(`You lose!`)){
            return (game(++i,userscore,++computerscore));
        }
        else {
            return (game(++i,userscore,computerscore));
        }
    }
}
*/


