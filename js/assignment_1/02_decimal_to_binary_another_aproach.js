const a = 12;
let decimal = a;
let binary = 0;

if (a === 0) {
    console.log(a);
}

while(decimal > 0) {
    binary = decimal % 2;
    console.log(binary);
    decimal = (decimal - binary) / 2;

}