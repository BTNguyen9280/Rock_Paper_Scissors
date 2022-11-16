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



const playround = (userchoice,computerchoice) => {
    if (userchoice == computerchoice) {
        return `You both chose ${userchoice} It's a tie!`
    }
    else if (userchoice == `rock` && computerchoice == `paper`){
    return `You win! rock beats paper.`
    }
    else if (userchoice == `paper` && computerchoice == `rock`) {
        return `You win! paper beats rock.`
    }
    else if(userchoice==`scissors` && computerchoice == `paper`) {
        return `You win! scissors beats paper`
    }
    else {
        return `You lose! ${computerchoice} beats ${userchoice}`
    }       
}

const game = (i=1, userscore=0, computerscore=0) =>{
    let userchoice = prompt("Enter rock, paper, or scissors.")
    userchoice.toLowerCase
    let computerchoice = computerinput()
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