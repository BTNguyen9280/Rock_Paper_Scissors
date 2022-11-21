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
    capcomp = computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1)
    capuser = userin.charAt(0).toUpperCase() + userin.slice(1)
    if (userin == computerchoice) {
        return `You both chose ${capcomp} It's a tie!`
    }
    else if (userin == `rock` && computerchoice == `scissors`){
    return `You win! ${capuser} beats ${capcomp}.`
    }
    else if (userin == `paper` && computerchoice == `rock`) {
        return `You win! ${capuser} beats ${capcomp}.`
    }
    else if(userin==`scissors` && computerchoice == `paper`) {
        return `You win! ${capuser} beats ${capcomp}.`
    }
    else {
        return `You lose! ${capcomp} beats ${capuser}`
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
        userchoice = userchoice.toLowerCase()
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