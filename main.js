document.addEventListener("DOMContentLoaded", function (event) {

    //Populating Input-Box Values
    for (let i = 0; i < origArray.length; i++){
        document.getElementById(i+1).value = origArray[i]
    }

});

let origArray = [2,3,4]
let powerOf = function(j){ //Function merging previously copypasted code. 
    //Returns (each element in origArray to the power of the inserted #) to its designated Input

    let newArray = origArray.map(i => {return (Math.pow(i, j))}) //x.map(function(item, index, array){});
    for (i = 0; i < newArray.length; i++){
        document.getElementById(i+1).value = newArray[i]
    }
}

//FUNCTION 1 (Onclick)
function square() {powerOf(2)}

//FUNCTION 2 (Anonymous)
document.getElementById("bCube").addEventListener("click", function() {powerOf(3)})

//FUNCTION 3 (Calling by name)
document.getElementById("bFourth").addEventListener("click", b3Function)
function b3Function() {powerOf(4)}