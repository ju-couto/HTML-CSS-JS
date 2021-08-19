let lamp = document.getElementById('lamp')
function lampQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}
function ligar(){
    if(!lampQuebrada()){
        lamp.setAttribute( "src","images/lampada-ligada.jpg")
    }
    
}
function desligar(){
    if(!lampQuebrada()){
        lamp.setAttribute("src","images/lampada-desligada.jpg")
    }
    
}
function quebrar(){
    lamp.setAttribute('src',"images/lampada-quebrada.jpg")
    
}