function first(){
    console.log("Remaining time = 3 second")
}
setTimeout(first , 0)

function second(){
    console.log("Remaining time = 2 second")
}
setTimeout(second , 1000)

function Third(){
    console.log("Remaining time = 1 second")
}
setTimeout(Third , 2000)

function rendomNum(){
    console.log("The Rendom Number Is :", Math.floor(Math.random() *1000));
}
setTimeout(rendomNum , 3000)

//
