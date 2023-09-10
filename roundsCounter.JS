let count = 0
let round = 0



//inc fun-------------------------
function inc() {
    
    let rounds = document.getElementById("rounds")
    let counts = document.getElementById("count")




    if (count >= 10) {
        count = 0
        round += 1
    }


    count += 1
    counts.textContent = count
    rounds.textContent = "rounds:" + round

}
//inc fun-------------------------


//dec fun-------------------------
function dec() {
    count -= 1
    counts.textContent = count

}
//dec fun-------------------------




