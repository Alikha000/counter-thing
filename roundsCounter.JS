let count = 0
let round = 0



//inc fun-------------------------
function inc() {


    let rounds = document.getElementById("rounds")
    let cunt = document.getElementById("count")



    if (count >= 10) {
        count = 0
        round += 1
    }


    count += 1
    cunt.textContent = count
    rounds.textContent = "rounds:" + round
}
//inc fun-------------------------


//dec fun-------------------------
function dec() {
    count -= 1
    document.getElementById("count").textContent = count

}
//dec fun-------------------------




