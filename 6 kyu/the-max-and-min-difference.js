// Consonant value

// Task:

// Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2),
// their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible.
// Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

// For example:

// Given arr1 = [3,10,5], arr2 = [20,7,15,8]
// should return [17,2] because 20 - 3 = 17, 10 - 8 = 2

// Note:

//     arr1 and arr2 contains only integers(positive, negative or 0);
//     arr1 and arr2 may have different lengths, they always has at least one element;
//     All inputs are valid.


// My solution:

function maxAndMin(arr1, arr2) {
    let max = 0
    let min = 1000000
    arr1.forEach((num1) => {
        arr2.forEach((num2) => {
            const diff = Math.abs(num1 - num2)
            max = diff > max ? diff : max
            min = diff < min ? diff : min
        })
    })
    return [max, min]
}
