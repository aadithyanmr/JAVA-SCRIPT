let number=124;
let tempNumber=number;
let reversedNumber=0
while (tempNumber>0){
    let rem=tempNumber%10
    let noOfTens=(tempNumber-rem)/10
    reversedNumber=(reversedNumber*10)+rem
    tempNumber=noOfTens
}
if (reversedNumber==number){
    console.log(true);
} 
else{
    console.log(false);
    
}
