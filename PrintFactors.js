const num = 1080;
let factors = 0;
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors = i;
        console.log(factors);
    }
}
