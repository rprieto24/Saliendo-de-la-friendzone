let lienzo = document.getElementById("lienzo");
let raton ={};// objeto vacio almacena coordeadas en x - y

let ctx = lienzo.getContext("2d");

let x1 = 200;
let x2 = 700;
let y1 = 280;
let y2 = 280;

lienzo.addEventListener("mousemove",(evt) => {
    raton = oMousePos(lienzo,evt);

    analisis();// investigar el funcionamiento de esta funcion.

});

function oMousePos(canvas, evt){
    let ClientRect = canvas.getBoundingClientRect();// devuelve el tamaño de un elemento y su posicion relativa

    return {
        x: Math.round(evt.clientX - ClientRect.left), //retono el valor de la posicion en x al entero mas cercano

        y: Math.round(evt.clientY - ClientRect.top) //retono el valor de la posicion en y al entero mas cercano.      
    }

}
function drawYoN(){ // funcion para pintar el canvas.
    ctx.fillStyle = "#FF88BF";
    ctx.fillRect(0,0, lienzo.clientWidth, lienzo.clientHeight);

    ctx.font = "45px Verdana";
    ctx.strokeStyle = "#4B4B4B";
    ctx.lineWidth = 2;
    ctx.strokeText("¿Quieres ser mi novia?",260,120);

    ctx.fillStyle = "#FF4DCE"; //cuadro para el si.
    ctx.fillRect(x1, y1, 150, 60);
    
    ctx.fillStyle = "#FF4DCE"; //cuadro para el no.
    ctx.fillRect(x2, y2, 150, 60); 

    ctx.strokeStyle = "#4B4B4B"
    ctx.strokeText("No", (x1 + 40), (y1 + 45)); 

    ctx.strokeStyle = "#4B4B4B"
    ctx.strokeText("Si", (x2 + 50), (y2 + 45)); 

}

function analisis(){
    if(raton.x > x1 && raton.y > y1 && raton.x < (x1 + 150) && raton.y < (y1 + 60 )){
        x1 = Math.floor(Math.random () * (800 + 1) ) ;
        y1 = Math.floor(Math.random () * (300 + 1) ) ;
        drawYoN();
    }
    if(raton.x > x2 && raton.y > y2 && raton.x < (x2 + 150) && raton.y < (y2 + 60) ){
        ctx.fillStyle = "#FF88DF";
        ctx.fillRect(0,0, lienzo.width, lienzo.height);

        ctx.font = "100px Verdana";
        ctx.strokeStyle = "#4B4B4B";
        ctx.lineWidth = 2;
        ctx.strokeText("Gracias <3",250,220);
    }else{
        return;
    }
}

drawYoN();

 
