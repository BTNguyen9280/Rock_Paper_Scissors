const computerchoice = () =>{
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

let userinput = prompt("Enter rock, paper, or scissors.")
userinput.toLowerCase

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

