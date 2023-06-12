document.addEventListener("DOMContentLoaded", function(){
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 1
//------------------------------------------------------------------------------------------------------------------------------------
let Inputcomprimento = document.querySelector("#Inputcomprimento");
let Inputlargura = document.querySelector("#Inputlargura");
let btarea = document.querySelector("#btarea");
let resultadoarea = document.querySelector("#resultadoarea");
function calculararea(){
    let comprimento = Number(Inputcomprimento.value);
    let largura = Number(Inputlargura.value);
    resultadoarea.innerHTML = "Area do terreno:"+ comprimento * largura + "m²"
}
btarea.onclick = function(){
    calculararea();
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 2
//------------------------------------------------------------------------------------------------------------------------------------
let Inputquantcavalos = document.querySelector("#Inputquantcavalos");
let btferraduras = document.querySelector("#btferraduras");
let resultadoferraduras = document.querySelector("#resultadoferraduras");
function calcularferraduras(){
    let qtdcavalos = Number(Inputquantcavalos.value);
    let qtdferraduras = qtdcavalos * 4;
    resultadoferraduras.innerHTML = "A quantidade de ferraduras necessarias serão:"+ qtdferraduras
}
btferraduras.onclick = function(){
    calcularferraduras()
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 3
//------------------------------------------------------------------------------------------------------------------------------------
let Inputquantidadepao = document.querySelector("#Inputquantidadepao");
let Inputquantidadebroas = document.querySelector("#Inputquantidadebroas");
let btcalcularvendas = document.querySelector("#btcalcularvendas");
let h4resultadovendas = document.querySelector("#h4resultadovendas");
let h4poupança = document.querySelector("#h4poupança");
function Calcularfaturamento(){
    let qtdpão = Number(Inputquantidadepao.value);
    let qtdbroas = Number(Inputquantidadebroas.value);
    let valorpao = qtdpão * 0.12;
    let valorbroa = qtdbroas * 1.50;
    let valortotal = valorpao + valorbroa;
    let valorpoupança = (valortotal * 0.1).toFixed(2);
    h4resultadovendas.innerHTML = "O valor arrecadado no dia foi: R$ " + valortotal;
    h4poupança.innerHTML = "O valor deixado na poupança será: R$ " + valorpoupança;
}
btcalcularvendas.onclick = function(){
    Calcularfaturamento();
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 4
//------------------------------------------------------------------------------------------------------------------------------------
let inputnome = document.querySelector("#inputnome");
let inputidade = document.querySelector("#inputidade");
let btcalculardias = document.querySelector("#btcalculardias");
let h4resultadodias = document.querySelector("#h4resultadodias");
function calculardias(){
    let nome = inputnome.value;
    let idade = inputidade.value;
    let calcular = idade * 365;
    h4resultadodias.innerHTML = "Sr(a) " + nome + ", você já viveu " + calcular + " dias na terra.";
}
btcalculardias.onclick = function(){
    calculardias();
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 5
//------------------------------------------------------------------------------------------------------------------------------------
let InputPreçolitro = document.querySelector("#InputPreçolitro");
let Inputvalorcolocado = document.querySelector("#Inputvalorcolocado");
let btcalcularlitro = document.querySelector("#btcalcularlitro");
let h4resultadolitro = document.querySelector("#h4resultadolitro");
function calcularlitros(){
    let preçolitro = Number(InputPreçolitro.value);
    let valorcolocado = Number(Inputvalorcolocado.value);
    let calcular = valorcolocado/preçolitro.toFixed(1);
    h4resultadolitro.innerHTML = "O valor colocado de R$ "+valorcolocado+" deu "+calcular.toFixed(2)+" L."
}
btcalcularlitro.onclick = function(){
    calcularlitros();
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 6
//------------------------------------------------------------------------------------------------------------------------------------
let inputkgprato = document.querySelector("#inputkgprato");
let btcalcularquilos = document.querySelector("#btcalcularquilos");
let h4resultadoquilos = document.querySelector("#h4resultadoquilos");
function calcularvalorkg() {
    let kgprato = Number(inputkgprato.value);
    let calcularkg = kgprato * 12.00;
    h4resultadoquilos.innerHTML = "O valor a ser pago será: R$" + calcularkg.toFixed(2);
}
btcalcularquilos.onclick = function() {
    calcularvalorkg();
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 7
//------------------------------------------------------------------------------------------------------------------------------------
let inputn1Ex7 = document.querySelector("#inputn1Ex7");
let inputn2Ex7 = document.querySelector("#inputn2Ex7");
let btEx7 = document.querySelector("#btEx7");
let resultadoEx7 = document.querySelector("#resultadoEx7");
function calendario(){
    let mes = Number(inputn1Ex7.value); 
    let dia = Number(inputn2Ex7.value);
    let resultEx7 = (mes * 30) + (dia - 30)
    resultadoEx7.innerHTML = "Já se passaram " + resultEx7 + " dia(s)";
}
btEx7.onclick = function (){
    calendario()
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 8
//------------------------------------------------------------------------------------------------------------------------------------
let inputn1Ex8 = document.querySelector("#inputn1Ex8");
let inputn2Ex8 = document.querySelector("#inputn2Ex8");
let inputn3Ex8 = document.querySelector("#inputn3Ex8");
let btEx8 = document.querySelector("#btEx8");
let resultadoEx8 = document.querySelector("#resultadoEx8");
function calcularCamisas (){
    let pequena = Number(inputn1Ex8.value);
    let media = Number(inputn2Ex8.value);
    let grande = Number(inputn3Ex8.value);
    let resultEx8 = (pequena * 10.00) + (media * 12.00) + (grande * 15.00);
    
    resultadoEx8.innerHTML = "Valor arrecadado: R$ " + resultEx8;
}
btEx8.onclick = function(){
    calcularCamisas()
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 9
//------------------------------------------------------------------------------------------------------------------------------------
let x1n = document.querySelector("#x1n");
let x2n = document.querySelector("#x2n");
let y1n = document.querySelector("#y1n");
let y2n = document.querySelector("#y2n");
let btEx9 = document.querySelector("#btEx9");
let resultadoEx9 = document.querySelector("#resultadoEx9");
function calcularDistancia() {
    let x1 = Number(x1n.value);
    let y1 = Number(y1n.value);
    let x2 = Number(x2n.value);
    let y2 = Number(y2n.value);
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    resultadoEx9.innerHTML = "A distância entre os dois pontos: " + distancia.toFixed(2)
}
btEx9.onclick = function(){
    calcularDistancia()
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 10
//------------------------------------------------------------------------------------------------------------------------------------
let inputn1Ex10 = document.querySelector("#inputn1Ex10");
let resultadoEx10 = document.querySelector("#resultadoEx10");
let btEx10 = document.querySelector("#btEx10");
function CalcularTempo(){
    let dias1 = Number(inputn1Ex10.value);
    let anos = (dias1 / 365);
    let meses = (dias1 % 365) / 30;
    let dias = (dias1 % 365) % 30;
resultadoEx10.innerHTML = "A empresa ficou " + anos.toFixed(0) + " ano(s) " + meses.toFixed(0) + " mês(es) " + dias.toFixed(0) + " dia(s)"
}
btEx10.onclick = function() {
    CalcularTempo()
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 11
//------------------------------------------------------------------------------------------------------------------------------------
let inputn1Ex11 = document.querySelector("#inputn1Ex11");
let btEx11 = document.querySelector("#btEx11")
function calcularSalario(){
    let salario = Number(inputn1Ex11.value);
    let salariosemdesconto = salario + (salario * 15/100);
    let salariofinal = salariosemdesconto - (salariosemdesconto * 8/100);
    alert ("Salario inicial: R$ " + salario);
    alert ("Salario bruto sem desconto: R$ " + salariosemdesconto.toFixed(2));
    alert ("Salario final com desconto: R$ " + salariofinal.toFixed(2))
}
btEx11.onclick = function(){
    calcularSalario()
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 12
//------------------------------------------------------------------------------------------------------------------------------------
let inputn1Ex12 = document.querySelector("#inputn1Ex12");
let btEx12 = document.querySelector("#btEx12");
let resultadoEx12 = document.querySelector("#resultadoEx12");

function calcularNumeros() {
    let n1ex12 = Number(inputn1Ex12.value);
    let n1ex12Str = String(n1ex12);
    if (n1ex12Str.length <= 3) {
        let centena = Math.floor(n1ex12 / 100);
        let dezena = Math.floor((n1ex12 % 100) / 10);
        let unidade = n1ex12 % 10;
        resultadoEx12.innerHTML = 
            "CENTENA = " + centena * 100 + "<br>" +
            "DEZENA = " + dezena * 10 + "<br>" +
            "UNIDADE = " + unidade;
    } else {
        alert("Por favor, digite um número válido de até três dígitos.");
    }
}
btEx12.onclick = function() {
    calcularNumeros();
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 13
//------------------------------------------------------------------------------------------------------------------------------------
let inputn1Ex13 = document.querySelector("#inputn1Ex13");
let btEx13 = document.querySelector("#btEx13");
let resultadoEx13 = document.querySelector("#resultadoEx13");
function CalcularAreaPizza(){
    let pizza = Number(inputn1Ex13.value);
    let resultEx13 = 3.14 * (pizza * pizza)
    resultadoEx13.innerHTML = "Area da pizza: " + resultEx13.toFixed(2) + "cm²";
}
btEx13.onclick = function(){
    CalcularAreaPizza()
}
//------------------------------------------------------------------------------------------------------------------------------------
//                                              EXERCICIO 14
//------------------------------------------------------------------------------------------------------------------------------------
let inputn1Ex14 = document.querySelector("#inputn1Ex14");
let btEx14 = document.querySelector("#btEx14");
let resultadoEx14 = document.querySelector("#resultadoEx14");
function dividirConta(){
    let conta = Number(inputn1Ex14.value);
    let valorInteiro = Math.floor(conta / 3);

    let carlos = valorInteiro;
    let andre = valorInteiro;
    let felipe = conta - (carlos + andre);

    resultadoEx14.innerHTML = 
        "Carlos deverá pagar: " + carlos + " reais" + "<br>" +
        "André deverá pagar: " + andre + " reais" + "<br>" +
        "Felipe deverá pagar: " + felipe.toFixed(2) + " reais"
}
btEx14.onclick = function(){
    dividirConta()
}



}) 