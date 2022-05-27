// Code your solutions in this file
function writeCards(strArr,event){
    let newArr = []
    for(let i=0;i<strArr.length;i++){
        newArr.push(`Thank you, ${strArr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr
}

function countDown(int){
while(int>=0){
    console.log(int--)
}
}
