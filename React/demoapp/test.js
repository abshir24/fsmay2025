let isLeaving = true
let message = ""

if( isLeaving === true){
    message = "Drive safe. Have a good night!"
}else{
    message = "Feel free to stay as long as you want."
}

message = isLeaving === true ? "Drive safe. Have a good night!" : "Feel free to stay as long as you want."

console.log(message)