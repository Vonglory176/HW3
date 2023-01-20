document.addEventListener("DOMContentLoaded", function (event) {

    //Populating Input-Box Values
    for (let i = 0; i < origArray.length; i++){
        document.getElementById(i+1).value = origArray[i]
    }

});

let origArray = [2,3,4]

//FUNCTION 1 (Onclick)
function square() {
    
    let newArray = origArray.map(i => {return (Math.pow(i, 2))}) //x.map(function(item, index, array){});
    for (i = 0; i < newArray.length; i++){
        document.getElementById(i+1).value = newArray[i]
    }
}

//FUNCTION 2 (Anonymous)
document.getElementById("bCube").addEventListener("click", function() {
    
    let newArray = origArray.map(i => {return (Math.pow(i, 3))}) 
    for (i = 0; i < newArray.length; i++){
        document.getElementById(i+1).value = newArray[i]
    }
})

//FUNCTION 3 (Calling by name)
document.getElementById("bFourth").addEventListener("click", b3Function)
function b3Function() {

    let newArray = origArray.map(i => {return (Math.pow(i, 4))}) 
    for (i = 0; i < newArray.length; i++){
        document.getElementById(i+1).value = newArray[i]
    }
}