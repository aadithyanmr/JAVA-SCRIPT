let number=376;
let diff=(number**2)-number;
let noOfDigits=0;
while(number>0){
    let rem=number%10
    let noOfTens=(number-rem)/10
    noOfDigits=noOfDigits+1
    number=noOfTens
}
let divisor=10**noOfDigits
if ((diff**2)%divisor===0){console.log(true)}
else {console.log(false)}
