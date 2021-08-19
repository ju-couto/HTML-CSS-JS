let lamp = document.getElementById('lamp')
function ligar(){
    lamp.setAttribute( "src","images/lampada-ligada.jpg")
}
function desligar(){
    lamp.setAttribute("src","images/lampada-desligada.jpg")
}
function quebrar(){
    lamp.setAttribute('src',"images/lampada-quebrada.jpg")
    
}