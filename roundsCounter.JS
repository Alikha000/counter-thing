let count = 0
let round = 0






//inc fun-------------------------
function inc() {
    let rounds = document.getElementById("rounds")
    let counts = document.getElementById("count")
    let roundMax = document.getElementById("round-max").value;
    count += 1
 
   if (count >= roundMax) {
        count = 0
        round += 1
    }

    counts.textContent = count

    rounds.textContent = "rounds:" + round

}
//inc fun-------------------------


//dec fun-------------------------
function dec() {
    let counts = document.getElementById("count")
    count -= 1
    counts.textContent = count

}
//dec fun-------------------------




