//--------------------------------------------------------------------------
//Impressão de frases no console

let mundo = ("Ola, mundo");
console.log(mundo);

//--------------------------------------------------------------------------
//Cria uma função que recebe um nome e exibe uma saudação

let nome = ("Junior");
console.log(`Ola ${nome}`);

//--------------------------------------------------------------------------
//Retorna o dobro do número pedido
let numeroDuplicado = parseFloat(prompt("Escolha um número aleatório"));
console.log(numeroDuplicado * 2);

//-------------------------------------------------------------------------
//Retorna médias de números
let numeroUm = parseFloat(prompt("Escolha um número"));
let numeroDois = parseFloat(prompt("Escolha mais um número"));
let numeroTres = parseFloat(prompt("Escolha o último número"));
console.log((numeroUm + numeroDois + numeroTres) / 3);


//-------------------------------------------------------------------------
//Cria uma multiplicação que retorna o valor multiplicado por ela mesmo
let numeroMultiplicador = parseFloat(prompt("Escolha um número"));
console.log(numeroMultiplicador * numeroMultiplicador);

//-------------------------------------------------------------------------
//Escolher o maior entre dois números

let numeroAleatorioUm = parseFloat(prompt("Escolha um número"));
let numeroAleatorioDois = parseFloat(prompt("Escolha um número"));
if (numeroAleatorioUm > numeroAleatorioDois){
    console.log(numeroAleatorioUm)
} else {
    console.log(numeroAleatorioDois)
}

//ou

function numeroMaior (numeroAleatorioUm, numeroAleatorioDois){
    if(numeroAleatorioUm > numeroAleatorioDois){
        return numeroAleatorioUm
    } else{
        return numeroAleatorioDois
    }
}

let numeroAleatorioUm = parseFloat(prompt("Escolha um número"));
let numeroAleatorioDois = parseFloat(prompt("Escolha um número"));
console.log(numeroMaior(numeroAleatorioUm, numeroAleatorioDois));