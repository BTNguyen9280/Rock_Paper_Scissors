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


//FIX LOGIC
const playround = (userin,computerchoice) => {
    if (userin == computerchoice) {
        return `You both chose ${userchoice} It's a tie!`
    }
    else if (userin == `rock` && computerchoice == `scissors`){
    return `You win! rock beats scissors.`
    }
    else if (userin == `paper` && computerchoice == `rock`) {
        return `You win! paper beats rock.`
    }
    else if(userin==`scissors` && computerchoice == `paper`) {
        return `You win! scissors beats paper`
    }
    else {
        return `You lose! ${computerchoice} beats ${userin}`
    }       
}

const game = (i=1, userscore=0, computerscore=0) =>{
    if (i>5) {
        if (userscore > computerscore) {
            return `You win! Final score is ${userscore} - ${computerscore}.`
        }
        else if (userscore < computerscore) {
            return `You lose! Final score is ${userscore} - ${computerscore}.`
        }
        else {
            return `It is a tie! Final score is ${userscore} - ${computerscore}.`
        }
    }
    else {
        let userchoice = prompt("Enter rock, paper, or scissors.")
        userchoice.toLowerCase
        let computerchoice = computerinput()
        let round = playround(userchoice,computerchoice)
        console.log(round)
        if (round.includes(`You win!`)) {
            return (game(++i,++userscore,computerscore))
        }
        else if (round.includes(`You lose!`)){
            return (game(++i,userscore,++computerscore))
        }
        else {
            return (game(++i,userscore,computerscore))
        }
    }
}