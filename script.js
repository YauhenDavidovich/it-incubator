//mini Google
const inputField = document.querySelector('input');
const inputButton = document.querySelector('button');
inputButton.addEventListener('click', () => {
    if (inputField.value === "google") {
        setTimeout(function(){
            alert('Yandex круче. Но это не точно');             //Search with delay
       }, 3000);        
    } else if (inputField.value === "") {
        setTimeout(function(){
            alert(arrObjects[0].name); 
       }, 3000);         
    } else {
        setTimeout(function(){
            alert(inputField.value); 
       }, 3000); 
    }
})


let arrObjects = [];
arrObjects[0] = {
    name: "Jack",
    age: "25"
}

arrObjects[1] = {
    name: "Kate",
    age: "20"
}

arrObjects[2] = {
    name: "Pete",
    age: "30"
}

///SuperSum
function superSum(a, b) {
    alert(Number(a) + Number(b));
}

superSum('6', 6)

///Max and min number
let myArray = [1, 6, 56, 55, 8, 5, 32];
let maxValue = myArray[0];
let minValue = myArray[0];
for (let i = 1; i < myArray.length; i++) {
    let currentValue = myArray[i];
    if (currentValue > maxValue) {
        maxValue = currentValue;
    }
    if (currentValue < minValue) {
        minValue = currentValue;
    }
}

console.log(myArray, maxValue, minValue)

//Swap
let a = "XXX";
let b = "YYY";
[b, a] = [a, b];
console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a

//Find max in array

function findMaxarr(arr) {    
    let maxValue = arr[0];    
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }                
    }
    return maxValue;  

}
let justArray = [2,4,78,43,6]
console.log(findMaxarr(justArray));


