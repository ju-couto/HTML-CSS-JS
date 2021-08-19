let nome = document.getElementById('inputnome')
let altura = document.getElementById('inputaltura')
let peso = document.getElementById('inputpeso')
let resultado = document.getElementById('resultado')
function calcular(){
    const imc = peso.value/Math.pow(altura.value,2)
    if(nome.value=='' || altura.value =='' || peso.value=='' ){
        alert('Preencha todos os Campos')
    } else{
        resultado.innerHTML= nome.value+', seu IMC é '+ imc.toFixed(2) +"<br>"
        if(imc<18.5){
    resultado.innerHTML+= ' Você está abaixo do peso ideal!'
     } else if(imc>18.5 && imc<24.9){
    console.log(imc);
    resultado.innerHTML+= ' Você está com o peso ideal! Parabéns'
     } else if(imc>24.9 && imc<30){
    resultado.innerHTML+= ' Você está sobrepeso!'
} else{
    resultado.innerHTML+= ' Você está obeso(a)!'
} 
    }   
}
