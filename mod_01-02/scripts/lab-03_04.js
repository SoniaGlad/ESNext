console.clear();

// Lab 3

let d = [45, 78, 10, 3];
d[7] = 100;

let arrSum = (arr) => {
    let sum = 0;

    for (let item of arr) {
        if (item) {
            sum += item;
        }
    }

    return sum;
}
console.log(arrSum(d));
console.log(d.length); // длина массива

// reduce - присвоили переменной

let arrSumReduce = d.reduce((sum, currentNum) => sum + currentNum, 0); 
console.log(arrSumReduce);

// reduce - со стрелочной функцией

let newArrSum = arr => arr.reduce((sum, currentNum) => sum + currentNum, 0);
console.log(newArrSum(d));



