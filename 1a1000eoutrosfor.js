/*
1. Escrever um código Javascript para exibir os
números de 1 até 1000 no terminal

(contador+1000 => contador + 1000)
*/

for (let contador = 1; contador < 1001; contador++) {
    console.log(contador);
}

/*
Outra resolução
*/

for (let contador = 0; contador <= 1000; contador++) {
    console.log(contador);
}

/*
2. Encontre e exiba na tela todos os números
pares entre 1 e 200
*/

for (let i = 2; i <= 200; i = i + 2) {
    if (i % 2 === 0) {
        console.log("Par: " + i);
    } else {
        console.log("Ímpar: " +i)
    }
    }

// ou

for (let i = 2; i <= 200; i = i + 2) {
        console.log(i);
        }

// ou

for (let i = 2; i <= 200; i++) {
    if (i % 2 === 0) {
         console.log(i);
         }
 }
 
/*
2. Encontre e exiba na tela todos os números
ímpares entre 1 e 200
*/

for (let i = 1; i <= 200; i = i + 2) {
    console.log(i);
    }

/*
Julia gosta de se esconder, porém não gosta de contar.
Ela pediu para vocês criarem um código Javascript para
contar até 10 e quando acabar a contagem,
imprimir a mensagem na tela: "Prontas ou não, lá vou eu!!!"
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
    console.log("Prontas ou não, lá vou eu!!!");
}

// ou

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("Prontas ou não, lá vou eu!!!");