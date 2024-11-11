let nums = [1,2,3,4,5,6];
nums.unshift(0)
console.log(
    nums
);
let moreNums = [7,8,9];


let zero = nums.shift()
console.log(zero);

let singles = nums.concat(moreNums);
console.log(singles);

let joined = singles.join(); //turn array into a string

console.log(joined);

let xArr = ["X","X","X"]
xArr = xArr.join("o");
console.log(xArr);

