//tip calculator


const billvalue  = 430;

const tip = billvalue >= 50 && billvalue <= 300? billvalue * 0.15 : billvalue*0.20;

console.log('Bill value '+ billvalue+ ' tip value '+tip +' and the total is '+ (billvalue+tip));