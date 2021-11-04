//task 1
console.log("Task 1: ");
function symbolCheck(str, symbol){
    return str.includes(symbol);
}
console.log(symbolCheck("My name is Pavlo", "a"));
console.log(symbolCheck("My name is Pavlo", "b"));

//task 2
console.log("Task 2: ");
function emptyCheck(str) {
    let withoutSpaces = str.split(' ').join('');

    if(withoutSpaces.length == 0){
        return true
    } else{
        return false
    }
}
console.log(emptyCheck(""));
console.log(emptyCheck("Word"));
console.log(emptyCheck(" "));

//task 3
console.log("Task 3: ");
function initials(fullName) {
    let arr = fullName.split(' ');
    let firstName = arr[0][0].toUpperCase();
    let secondName = arr[1][0].toUpperCase(); 
    return `${firstName}.${secondName}.`
}
console.log("Full name:\nPavlo Tymofiiuk \nShort name: ")
console.log(initials('Pavlo Tymofiiuk'));

//task 4
console.log("Task 4: ");
function biggerInteger(firsInt, secondInt) {
    if(firsInt > secondInt){
        return "First int > second int = " + firsInt;
    } else if(secondInt > firsInt) {
        return "Second int > first int = " + secondInt;
    } else {
        return `This integers are equal and their value = ${firsInt}`;
    }
}
console.log(biggerInteger(100, 200));
console.log(biggerInteger(100, 100));

//task 5
console.log("Task 5: ");
function sortBiggerToLower(firstInt, secondInd, thirdInt){
    if(firstInt > secondInd && secondInd > thirdInt){
        return `${firstInt} ${secondInd} ${thirdInt}`
    } else 
    if(firstInt > secondInd && thirdInt > secondInd && firstInt > thirdInt){
        return `${firstInt} ${thirdInt} ${secondInd}`;
    } else 
    if(secondInd > firstInt && firstInt > thirdInt){
        return `${secondInd} ${firstInt} ${thirdInt}`;
    } else 
    if(secondInd > firstInt && thirdInt > firstInt && secondInd > thirdInt){
        return `${secondInd} ${thirdInt} ${firstInt}`;
    } else 
    if(thirdInt > firstInt && firstInt > secondInd){
        return `${thirdInt} ${firstInt} ${secondInd}`;
    } else 
    if(thirdInt > firstInt && secondInd > firstInt){
        return `${thirdInt} ${secondInd} ${firstInt}`;
    } else  if (firstInt == secondInd && firstInt > thirdInt){
        return `${firstInt} ${secondInd} ${thirdInt}`;
    } else  if (firstInt == secondInd && thirdInt > firstInt){
        return `${thirdInt} ${firstInt} ${secondInd}`;
    } else  if (firstInt == thirdInt && thirdInt > secondInd){
        return `${thirdInt} ${firstInt} ${secondInd}`;
    } else  if (firstInt == thirdInt && secondInd > thirdInt){
        return `${secondInd} ${firstInt} ${thirdInt}`;
    } else  if (secondInd == thirdInt && secondInd > firstInt){
        return `${secondInd} ${thirdInt} ${firstInt}`;
    } else {
        return `${firstInt} ${secondInd} ${thirdInt}`;
    }
}
console.log(sortBiggerToLower(15,18,13));