const p = 100;
const r = 5;
const t = 2;

let principle = p;
let compoundInterest = 0;

for (let noOfYears = t;noOfYears > 0; noOfYears-- ) {
    const simpleInterest = (principle * r) / 100;
    const compoundAmount = simpleInterest + principle;
    principle = compoundAmount;
    compoundInterest = compoundAmount - p;
}

console.log(compoundInterest);
