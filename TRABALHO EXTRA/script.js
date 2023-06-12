//===================================================================================================================================================
                                        //COLOCA OS NUMEROS EM ORDEM DECRESCENTE        EX1
//===================================================================================================================================================
document.addEventListener("DOMContentLoaded", function() {
let input1Ex1 = document.querySelector("#input1Ex1");
let input2Ex1 = document.querySelector("#input2Ex1");
let input3Ex1 = document.querySelector("#input3Ex1");
let input4Ex1 = document.querySelector("#input4Ex1");
let input5Ex1 = document.querySelector("#input5Ex1");
let btExercicio1 = document.querySelector("#btExercicio1");
function decrescente(){
let n1Ex1 = Number(input1Ex1.value);
let n2Ex1 = Number(input2Ex1.value);
let n3Ex1 = Number(input3Ex1.value);
let n4Ex1 = Number(input4Ex1.value);
let n5Ex1 = Number(input5Ex1.value);
let resultadoex1 = [n1Ex1, n2Ex1, n3Ex1, n4Ex1, n5Ex1];
    resultadoex1.sort(function(a, b){
        return b - a;
    });
alert("Numeros em ordem decrescente: " + resultadoex1.join(", "));
}
btExercicio1.onclick = function(){
    decrescente();
}
//===================================================================================================================================================
                                        //IDENTIFICAR QUAL TRIANGULO É        EX2
//===================================================================================================================================================
let input1Ex2 = document.querySelector("#input1Ex2");
let input2Ex2 = document.querySelector("#input2Ex2");
let input3Ex2 = document.querySelector("#input3Ex2");
let btExercicio2 = document.querySelector("#btExercicio2");
function triangulo(){
    let n1Ex2 = Number(input1Ex2.value);        
    let n2Ex2 = Number(input2Ex2.value);        
    let n3Ex2 = Number(input3Ex2.value);
    if (n1Ex2 + n2Ex2 > n3Ex2 && n1Ex2 + n3Ex2 > n2Ex2 && n2Ex2 + n3Ex2 > n1Ex2){ // SE X + Y FOR MAIOR QUE Z, E X + Z FOR MAIOR QUE Y, E Y + Z FOR MAIOR QUE X
        if (n1Ex2 === n2Ex2 && n1Ex2 === n3Ex2){    
          alert("De acordo com os valores dados, seu triângulo é Equilátero.");
        }else if(n1Ex2 === n2Ex2 || n1Ex2 === n3Ex2 || n2Ex2 === n3Ex2){                // A FUNÇÃO || SERVER COMO "OU"
          alert("De acordo com os valores dados, seu triângulo é Isósceles.");
      }} else {
        alert("De acordo com os valores dados, seu triângulo é Escaleno.");
      }
    }
    btExercicio2.onclick = function() {
      triangulo();
    };
//===================================================================================================================================================
                                        //MOSTRAR QUANTAS NOTAS TERIA X VALOR        EX3
//===================================================================================================================================================
let input1Ex3 = document.querySelector("#input1Ex3");
let btExercicio3 = document.querySelector("#btExercicio3");
let resultEx3 = document.querySelector("#resultEx3");
function separarNotas(){
    let n1Ex3 = Number(input1Ex3.value);
    let notas100 = (n1Ex3 / 100);
    let notas50 = (n1Ex3/50);
    let notas10 = (n1Ex3/10);
    let notas5 = (n1Ex3/5);
    let moedas1 = (n1Ex3);

    resultEx3.innerHTML= "Você vai precisar de: " + notas100 + " nota(s) de 100 Reais" + "<br>";
    resultEx3.innerHTML+= "Você vai precisar de: " + notas50 + " nota(s) de 50 Reais" + "<br>";
    resultEx3.innerHTML+= "Você vai precisar de: " + notas10 + " nota(s) de 10 Reais" + "<br>";
    resultEx3.innerHTML+= "Você vai precisar de: " + notas5 + " nota(s) de 5 Reais" + "<br>";
    resultEx3.innerHTML+= "Você vai precisar de: " + moedas1 + " moeda(s) de 1 Real" + "<br>";
}
btExercicio3.onclick = function(){
    separarNotas()
}
//===================================================================================================================================================
                                        //DETRAN        EX4
//===================================================================================================================================================
let input1Ex4 = document.querySelector("#input1Ex4");
let input2Ex4 = document.querySelector("#input2Ex4");
let input3Ex4 = document.querySelector("#input3Ex4");
let btExercicio4 = document.querySelector("#btExercicio4");
let resultEx4 = document.querySelector("#resultEx4");
function calcularDetran(){
  let n1Ex4 = Number(input2Ex4.value); // VALOR DO CARRO
  let n2Ex4 = Number(input3Ex4.value); // ANO DO CARRO
  let t1Ex4 = (input1Ex4.value);
  let calcEx4;

  if(n2Ex4 >= 1990){
    calcEx4 = n1Ex4 * (1.5/100);
  }else if(n2Ex4 < 1990){
    calcEx4 = n1Ex4 * (1/100);
  }
  resultEx4.innerHTML = "";
  resultEx4.innerHTML = "Você deverá pagar: " + calcEx4 + " reais de imposto para para realizar a tranferência do(a): " + t1Ex4;
}

btExercicio4.onclick = function(){
  calcularDetran()
}
//===================================================================================================================================================
                                        //AUMENTO DO SALARIO        EX5
//===================================================================================================================================================
let input1Ex5 = document.querySelector("#input1Ex5");
let input2Ex5 = document.querySelector("#input2Ex5");
let btExercicio5 = document.querySelector("#btExercicio5");
function aumentoSalario(){
  let n1Ex5 = Number(input1Ex5.value); //CARGO
  let n2Ex5 = Number(input2Ex5.value); //SALARIO

if(n1Ex5 === 101){
  alert("Parábens seu salário é de: " + (n2Ex5 + (n2Ex5*10/100)))
}else if(n1Ex5 === 102){
  alert("Parábens seu salário é de: " + (n2Ex5 + (n2Ex5*20/100)))
}else if(n1Ex5 === 103){
  alert("Parábens seu salário é de: " + (n2Ex5 + (n2Ex5*30/100)))
}else{
  alert("Parábens seu salário é de: " + (n2Ex5 + (n2Ex5*40/100)))
}
}
btExercicio5.onclick = function(){
  aumentoSalario()
}
//===================================================================================================================================================
let Inputsaldomedio = document.querySelector("#Inputsaldomedio");
let Btcalcularcredito = document.querySelector("#Btcalcularcredito");
let h3resultado = document.querySelector("#h3resultado");

function calcularcredito(){
    let saldomedio = Number(Inputsaldomedio.value);
    let credito = 0

    if (saldomedio >= 0 && saldomedio <= 200) {
        credito = 0;
    } else if (saldomedio >= 201 && saldomedio <= 400) {
        credito = saldomedio * 0.2;
    } else if (saldomedio >= 401 && saldomedio <= 600) {
        credito = saldomedio * 0.3;
    } else if (saldomedio > 600) {
        credito = saldomedio * 0.4;
    }

    h3resultado.innerHTML = "Saldo médio: R$" + saldomedio.toFixed(2) + "<br>Valor do crédito: R$" + credito.toFixed(2);
}

Btcalcularcredito.onclick = function(){
    calcularcredito();
}

///ex7

let inputcodigo = document.querySelector("#inputcodigo");
let inputquantidade = document.querySelector("#inputquantidade");
let btcalcularpedido = document.querySelector("#btcalcularpedido");
let h3resultadocardapio = document.querySelector("#h3resultadocardapio");

function Calcularcardapio() {
    let codigo = Number(inputcodigo.value);
    let quantidade = Number(inputquantidade.value);
    let valor;

    if (codigo === 1) {
        valor = 11.00;
    } else if (codigo === 2) {
        valor = 8.50;
    } else if (codigo === 3) {
        valor = 8.00;
    } else if (codigo === 4) {
        valor = 9.00;
    } else if (codigo === 5) {
        valor = 10.00;
    } else if (codigo === 6) {
        valor = 4.50;
    } else {
        valor = 0;
    }

    h3resultadocardapio.innerHTML = "O valor total será de R$ " + valor * quantidade;
}

btcalcularpedido.onclick = function() {
    Calcularcardapio();
}
///ex8
let inputaltura = document.querySelector("#inputaltura");
let inputsexo = document.querySelector("#inputsexo");
let Btcalcularpeso = document.querySelector("#Btcalcularpeso");
let h3resultadopeso = document.querySelector("#h3resultadopeso");

function calcularpesoideal() {
    let altura = Number(inputaltura.value);
    let sexo = inputsexo.value;

    let pesoIdeal;

    if (sexo === "masculino" || sexo === "homem" || sexo === "Masculino" || sexo === "Homem" || sexo === "MASCULINO" ||sexo ===  "HOMEM") {
        pesoIdeal = (72.7 * altura) - 58;
    }else if(sexo === "feminino" || sexo ===  "Feminino" || sexo ===  "Mulher" || sexo ===  "mulher" || sexo ===  "FEMININO" || sexo ===  "Feminino") {
        pesoIdeal = ((62.1 * altura) - 44.7);
    }

    h3resultadopeso.innerHTML = "Peso ideal é " + pesoIdeal.toFixed(2) + " kg";
}

Btcalcularpeso.onclick = function() {
    calcularpesoideal();
}


///EX9

let inputvalor = document.querySelector("#inputvalor");
let inputpagamento = document.querySelector("#inputpagamento");
let Btcalcularpagamento = document.querySelector("#Btcalcularpagamento");
let h3resultadopagamento = document.querySelector("#h3resultadopagamento");

function calcularpagamento(){
    let valor = Number(inputvalor.value);
    let pagamento = (inputpagamento.value);
    let vlrfinal = 0;
    

    if (pagamento === "A" || pagamento === "a") {
        vlrfinal = valor * 0.9; // 10% de desconto
    } else if (pagamento === "B" || pagamento === "b") {
        vlrfinal = valor * 0.85; // 15% de desconto
    } else if (pagamento === "C" || pagamento === "c") {
        vlrfinal = valor; // preço normal sem juros
    } else if (pagamento === "D" || pagamento === "d") {
        vlrfinal = valor * 1.1; // preço normal com juros de 10%
    } else {
}
 h3resultadopagamento.innerHTML = "O valor sera de R$ "+vlrfinal;
}

Btcalcularpagamento.onclick = function(){
    calcularpagamento();
}

//ex10
let inputnivel = document.querySelector("#inputnivel");
let inputhorasaula = document.querySelector("#inputhorasaula");
let btcalcularsalario = document.querySelector("#btcalcularsalario");
let h3resultadosalario = document.querySelector("#h3resultadosalario");

function calcularsalario() {
    let nivelprof = parseInt(inputnivel.value);
    let horasaula = parseInt(inputhorasaula.value);
    let vlrhraula;

    if (nivelprof == 1) {
        vlrhraula = 12.00;
    } else if (nivelprof == 2) {
        vlrhraula = 17.00;
    } else if (nivelprof == 3) {
        vlrhraula = 25.00;
    }
    let salario = vlrhraula * horasaula * 4.5;

    h3resultadosalario.innerHTML = "O pagamento para esse professor será de: R$ " + salario;
}

btcalcularsalario.onclick = function() {
    calcularsalario();
}

});


