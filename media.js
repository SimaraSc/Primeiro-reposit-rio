//== comparação (valor)
//
//=== estritamente igual (valor e tipo)

//&& = E
//|| = OU

//Joaozinho tirou 5 na primeira prova, e tirou 7 na segunda prova. Amédia para que Joao seja aprovado é: 6.

let notaProva1 = 5;
let notaProva2 = 3;

let media = (notaProva1 + notaProva2) / 2;

if(media >= 6){
    console.log("Joao, arrasou! Sua média foi: " + media);
} else if(media < 6 && media >= 5) {
    console.log("Joao, não desista. Faça uma pesquisa e me traga na segunda. Sua média foi: " + media);
} else {
    console.log("Vá estudar mais! Sua média foi: " + media);
} 
