let number=1;
let prime=false;
for(let i=2;i<number;i++)
    {
        if (number%i===0){
            prime=false;
            break;
                 
        }
        else {
            prime=true;
        }
    }
console.log(prime);
