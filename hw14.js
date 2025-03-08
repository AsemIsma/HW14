function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

let t1 = performance.now();
add(1000, 1000, 1000); // i am going to use 1 000  instead of 1 000 000 000 because chrome is not answering
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}`);

//time complexity O(1), because nums are constant
//space complexity O(1), because only 1 answer is returned
//run time Time Elapsed: 0
//alone Time Elapsed: 0

function sayHello (numberOfTimes) {
    for (var i = 0; i < numberOfTimes; i++) {
        console.log('Hello');
    }
}

t1 = performance.now();
sayHello(1000);
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}`);

//time complexity O(n), because i is tied to numberOfTimes in Loop
//space complexity O(1), because answer in console is not considered new data and is not included in space compx analisys
//run time Time Elapsed: 0.011900000035762788
//alone Time Elapsed: 0.012599999964237213

function logMultiples(n) {
    for (var num1 = 1; num1 <= n; num1++) {
        for (var num2 = 1; num2 <= n; num2++) {
            console.log(num1 * num2);
        }
    }
}

t1 = performance.now();
logMultiples(1000);
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}`);

//time complexity O(n**2), because nums are tied to n in Loop
//space complexity O(1), because answer in console is not considered new data and is not included in space compx analisys
//run time Time Elapsed: 15.494099999964238
//alone Time Elapsed: 4.5606999999880795

function logMultiples2 (a, b) {
    for (var num1 = 1; num1 <= a; num1++) {
        for (var num2 = 1; num2 <= b; num2++) {
            console.log("test");
        }
    }
}

t1 = performance.now();
logMultiples2(1000, 1000);
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}`);

//time complexity O(n**2), because nums are tied to a,b in Loops
//space complexity O(1), because answer in console is not considered new data and is not included in space compx analisys
//run time Time Elapsed: 15.057900000035763
//alone Time Elapsed: 15.079

function sum(x) {
    for (var i = 0; i < x; i++) {
        console.log("test");
    }
}

t1 = performance.now();
sum(1000);
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}`);

//time complexity O(n), because x are unknown limit to i in Loop
//space complexity O(1), answer in console is not considered new data and is not included in space compx analisys
//run time Time Elapsed: 0.01430000001192093
//alone Time Elapsed: 0.013