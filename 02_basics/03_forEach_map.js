// Array of colors
const colorList = ["red","blue","green","yellow" ]

// Without using forEach
// for(let i=0; i<color.length; i++){
//     console.log(color[i])
// }

// forEach
// function print(ele){
//     console.log(ele)
// }
// color.forEach(print)


// forEach
// color.forEach((ele)=>{
//     console.log(ele) 
// })



// Custom forEach implementation
function customForEach(actionFunction) {
    for (let index = 0; index < colorList.length; index++) {
        actionFunction(colorList[index]);
    }
}

// Callback function
function printColor(colorItem) {
    console.log(colorItem);
}

// Using custom forEach
customForEach(printColor);



// Without using map
// const num = [1,2,3,4,5]
// let results = []

// for(let i=0; i<num.length; i++){
//     results.push(num[i]*2)
// }
// console.log(results)

// map
// const res = num.map((ele)=>{
//     return ele*2
// })
// console.log(res)


// Custom map implementation
const numberList = [1, 2, 3, 4, 5];

function customMap(transformFunction) {
    const transformedResult = [];

    for (let index = 0; index < numberList.length; index++) {
        const currentNumber = numberList[index];
        const updatedValue = transformFunction(currentNumber);
        transformedResult.push(updatedValue);
    }

    return transformedResult;
}

// Callback function for map
function multiplyByTen(number) {
    return number * 10;
}

// Using custom map
console.log(customMap(multiplyByTen));


