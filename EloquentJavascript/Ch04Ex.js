

//Ex1 Range

function range(start, stop, step)
{
    var result = [];
    if (step == null)
        step = 1;
    
        if (step >= 0)
        {
            for (var i = start; i <= stop; i += step) {
                result.push(i);
            }
        }
        else
            for (var i = start; i >= stop; i += step) {
                result.push(i);
            }
      
    //for (var i = start; i <= stop; step ? i += step : i++) {
    //    result.push(i);
    //}
    return result;
}

console.log(range(5, 2, -1));

function sum(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

console.log(sum(range(1, 10)));

//Ex 2 Reverse array

function reverseArray(array)
{
    var reversed = [];
    for (var i = array.length -1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array)
{
    for (var i = 0; i < Math.floor(array.length / 2) ; i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


//Ex3 list

function arrayToList(array)
{
    var list = null;
    
    while(array.length > 0) 
        list = { value: array.pop(), rest: list };
    
    return list;    
}



console.log(arrayToList([10, 20]));