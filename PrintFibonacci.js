let lastTerm=1;
let secLast=0;
console.log(secLast);
console.log(lastTerm);
let nthTermValue=0;
let nthTerm=10;
for (let i=0;i<=nthTerm;i++){
    nthTermValue=lastTerm+secLast
    secLast=lastTerm
    lastTerm=nthTermValue
    console.log(nthTermValue)
}
