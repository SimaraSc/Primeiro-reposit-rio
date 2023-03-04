/*
6. Imprima os números de 0 até 40 na tela e em seguida, quantos números pares
e quantos números ímpares foram impressos.
7. Dado um numero qualquer, crie um código em Javascript que diga se ele é primo ou não.

console.log("Números pares: ")
for (let i = 2; i <= 40; i++) {
    if (i % 2 === 0) {
         console.log(i);
         }
 }
console.log("Números ímpares: ")

for (i = 1; i <= 40; i = i + 2) {
        console.log(i);
}

for (let i = 1; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par ");
    } else if (i % 2 === 1) {
        console.log(i + " é impar");
    }
}
*/

let totalPares = 0;
let totalImpares = 0; 

for (let i = 1; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par ");
        totalPares++
    } else if (i % 2 === 1) {
        console.log(i + " é impar");
        totalImpares++
    }
}
console.log(" O total de números pares é " + totalPares)
console.log(" O total de números ímpares é " + totalImpares)


let esteNumeroEPrimo = true;
let numero = 7
    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            esteNumeroEPrimo = false;
            break;
        }
}
 
    if (esteNumeroEPrimo)
        console.log("O número ", numero, " é primo")
    else {
        console.log("O número ", numero," NÃO é primo");
}