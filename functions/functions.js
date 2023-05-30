var indice=-1;
        var accion="A";
        var jugador=localStorage.getItem("jugador");
        jugador=JSON.parse(jugador);
        
        if(jugador==null) jugador=[];

function siguiente(){
    var myWindow = window.open("gameOver.html", "_self");
}
function nuevoJuego(){
    localStorage.removeItem("jugador");
    var myWindow = window.open("index.html", "_self");
}
