/*
Revisão geral
1. Tipos de variáveis
2. Variáveis e constantes / Concatenação (textos e números)
3. Operadores aritméticos
4. Condicional (if/else) * uso do else if
5. Operadores lógicos
6. Extensões de arquivos

A string é para escrever qualquer coisa entre as aspas, se usar números
e querer somar, a função vai entender que vc quer concatenar a info
*/

const number = 0.21;
const string = "hghdebud";
const stringTexto = "kkmkmkcm";
const stringCPF = "09876654433";
const booleanTrue = true;
const booleanFalse = false;

const empty = null;
const noData = undefined;

let cor = "laranja";
console.log(cor);

cor = cor + ", azul";
console.log(cor);

cor = cor + ", verde";
console.log(cor);

cor = cor + ", rosa";
console.log(cor);

let qtddFilhos = 0;
let nomeFilho1 = "";

qtddFilhos = 1;
nomeFilho1 = "Lucas";

//tradicional
console.log("Juliana tem " + qtddFilhos + " filho e ele se chama " 
+ nomeFilho1)

//template spring
console.log(
    `Juliana tem ${qtddFilhos} filho e ele se chama ${nomeFilho1}`
);


qtddFilhos = 2;
qtddFilhos = 0;
qtddFilhos = -2;

if(qtddFilhos > 1) {
    console.log(`Juliana tem ${qtddFilhos} filhos`);
} else if (qtddFilhos === 1) {
    console.log(`Juliana tem ${qtddFilhos} filho`);
} else if (qtddFilhos === 0) {
    console.log(`Pelo visto...Juliana não tem filhos!`);
} else {
    console.log("Passa amanhã");
}