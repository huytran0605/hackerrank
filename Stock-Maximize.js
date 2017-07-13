process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on('end', function () {
    input_stdin_array = input.match(/[^\s]+/g);
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var size = readLine();
    for(let i = 0; i < size; i++){
        let numOfDays = readLine();
        const prices = [];
        for (let j = 0; j < numOfDays; j ++){
            prices[j] = +readLine();
        }
        console.log(getMaxProfit(prices));
    }
}
function getMaxProfit(prices) {
    let profit = 0;
    let maxSoFar = 0;
    for (let i = prices.length - 1; i > -1; i--) {
        if (prices[i] >= maxSoFar) {
            maxSoFar = prices[i];
            
        }
        profit += maxSoFar - prices[i]
    }
    return profit;
}