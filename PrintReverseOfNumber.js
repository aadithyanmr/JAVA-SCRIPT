let number=123;
let tempNumber=number;
let reversedNumber=0
while (tempNumber>0){
    let rem=tempNumber%10
    let noOfTens=(tempNumber-rem)/10
    reversedNumber=(reversedNumber*10)+rem
    tempNumber=noOfTens
}
console.log(reversedNumber);

