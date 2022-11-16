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

console.log(computerchoice())