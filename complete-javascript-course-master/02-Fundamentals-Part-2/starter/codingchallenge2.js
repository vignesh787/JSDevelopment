tipArray=[];

const calcTip = (billValue) => {

    var tip;
    if(billValue > 50 && billValue < 300){
        tip = billValue * 0.15
    } else {
        tip = billValue * 0.20
    }
    tipArray.push(tip);
    return tip;

}

bills = [125,555,44];

for(var i=0;i<bills.length;i++){
    calcTip(bills[i]);
}


total=[];

for(var i=0;i<bills.length;i++){
    total[i]=bills[i]+tipArray[i];
}

console.log(bills,tipArray);
console.log(total);