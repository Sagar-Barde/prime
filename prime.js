const number=parseInt(prompt("Enter the positive number:"));

let isPrime=true;

if(number===1){
console.log("prime nor composite number ");

}
else if(number>1){


    for(let i=2;i<number;i++){

        if(number%i==0){
            isPrime =false;

        }
    }
    if(isPrime)
{
    console.log(`${number} is prime number`);


    }
else{
    console.log(`${number} no is not prime number `);
}
}
else{
    console.log("th number is prime number ");
}