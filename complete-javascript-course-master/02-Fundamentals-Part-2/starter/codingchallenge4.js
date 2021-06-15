const bills = [22,295,176,440,37,105,10,1100,86,52];

const tips = [];

const totals = [];

const calcTip = function (billValue){

    const tip = billValue > 50 && billValue <300 ? billValue*0.15  : billValue * 0.20; 

    tips.push(tip);

    totals.push(billValue+tip);

    return tip;

}

for(let i=0;i<bills.length;i++){
    calcTip(bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);


const calcAverage = function(arr){

    let sum=0;
    for(let i=0;i<arr.length;i++){
            sum+=arr[i];
    }

    let avg = sum/(arr.length);

    return avg;

}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
