let altura = parseFloat(prompt("Qual é sua altura em metros: "))
console.log(altura)
let peso = parseFloat(prompt("Qual é seu peso em KG: "))
console.log(peso)
let IMC = parseFloat(peso / altura / altura).toFixed(2)

console.log(`Seu IMC é de: ${IMC}`)

//-----------------------------------------------------------------------------------------------------------------------

let dolar = 4.80
let intencaoDolar = parseFloat(prompt("Quantos dolares vocês quer comprar: "))
let valorReal = parseFloat(dolar * intencaoDolar).toFixed(2)

console.log(`Com o dolar cotado em $: ${dolar} você irá gastar R$: ${valorReal} comprando ${intencaoDolar} dolares`)

//-----------------------------------------------------------------------------------------------------------------------

let altura = parseFloat(prompt("Qual a altura do seu retângulo: "))
let base = parseFloat(prompt("Qual é a base do seu retângulo: "))

let area = parseFloat(base*altura).toFixed(2)

console.log(`A área do seu retângulo é: ${area} metros`)

//-----------------------------------------------------------------------------------------------------------------------
let comprimento = parseFloat(prompt("Qual é o comprimento do circulo: "))
let pi = 3.1416
let raio = comprimento / 2
let perimetro = 2*pi*raio

console.log = parseFloat(prompt(`O comprimento do seu perimetro é: ${perimetro}`))

//-----------------------------------------------------------------------------------------------------------------------

function mostrarTabuada(numero){
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = 7;
mostrarTabuada(numero);

//Não consegui fazer esse
//-----------------------------------------------------------------------------------------------------------------------

