// (function(){

window.addEventListener('load', main)
var matriz = new Array(7)
var elementoIniciado
function main(){
     
   
    $('.btn-reinicio').on('click', function(evt){
        evt.preventDefault()
        var contenido = $('.btn-reinicio').html().toUpperCase()
        if (contenido == 'REINICIAR'){
         location.reload()
        }
        if (contenido == 'INICIAR'){
            $('.btn-reinicio').html('Reiniciar')
            //Se invoca la funcion iniciar 
            var c = iniciar() 
            var y = llenar()
            $('.imagen')
                        .on('drapstart',dragIniciado)
                        .on('dragend',dragFinalizado)
                        .on('dragend',dragFinalizado)
                        .on('dragover',dragInContainer)
                        .on('dragleave',dragOutContainer)
                        .on('drop',manejarDrop)
            // for (var i = 0; i < tam.length; i++){
                //$( ".imagen" ).sortable( "option", "appendTo", document.body )
                // $$('.imagen')[i].addEventListener('drapstart', dragIniciado,false)
                // $$('.imagen')[i].addEventListener('dragend',dragFinalizado,false)
                // $$('.imagen')[i].addEventListener('dragover',dragInContainer,false)
                // $$('.imagen')[i].addEventListener('dragleave',dragOutContainer,false)
                // $$('.imagen')[i].addEventListener('drop',manejarDrop,false)
            // }
            //  $( "#sortable" ).sortable();
            //     $( "#sortable" ).disableSelection();
            // for (var i = 1; i < 8; i++){
            //     $( "#sortable"+i ).sortable();
            //     $("#sortable"+i).on('mouseup',function(){
            //             alert('joaa')
            //     })

            //     $( "#sortable"+i ).disableSelection();
            // }
            
            

            setTimeout(function(){setInterval('timer()',1000)},1000)            
          
        }
    })
   



    // for (var i= 0; i < imagen.length; i++){

    // }
}

function dragInicio(e){
    var padre = e.target.parentNode.getAttribute('id')
    e.dataTransfer.setData('data',e.target.id)
}

function dragFin(e){
    e.preventDefault()
}

function drop(e){
    var id = e.dataTransfer.getData('data')
    var el1 = document.getElementById(id)
    // var img = el1.getAttribute('src')
    // var img2 = e.target.getAttribute('src')
    // var n1 = el1.getAttribute('alt')
    var p1 = el1.parentNode
    var n2 = e.target.getAttribute('alt')
    var el2 = document.getElementById(e.target.id)
    p2 = e.target.parentNode
    // insertAfter(el2,el1)
    // insertAfter(el1,el2)
     intercambiar(el1,el2)

    
    // dropNodoHijo(el1)
    // dropNodoHijo(el2)
    // console.log(p1 === p2)
    
    //  if (p1 == p2){
    //    console.log('nodos hermanos')
    //    //insertAfter(el2,el1)
    //    if ((n1 == n2 - 1)||(n1 - 1 == n2)){
       
    //     //  el.setAttribute('src',img2)
    //     //  e.target.setAttribute('src',img)
    //     // insertAfter(el2,el1)
    //     // insertAfter(el1,el2)
    //     // dropNodoHijo(el1)
    //     // dropNodoHijo(el2)
    //    }
         
    //  } else {
    //      var col1 = p1.getAttribute('alt')
    //      var col2 = p2.getAttribute('alt')
    //      if (n1 == n2 && ((col1 == col2 - 1) || (col1 - 1 == col2))){
    //         //  el1.setAttribute('src',img2)
    //         // el2.setAttribute('src',img)
    //      }
    // }

}
function dragOver(e){
   e.preventDefault()  
}

function dragLeave(e){
   e.preventDefault()
}
//Este es el temporizador o timer
function timer(){
    var tiempo = $('#timer').html()
    var minuto = parseInt(tiempo.substring(0,2))
    var segundo = parseInt(tiempo.substring(3,5))
     if (!minuto && !segundo){
        $('#timer').text("00:00")
        return
    }
    segundo--
    if (segundo < 0){
        segundo = 59
        minuto--
    }
    tiempo = ""
    if (minuto < 10){
        tiempo = "0"
    }
    tiempo += minuto + ":"
    if (segundo < 10){
        tiempo += "0"
    }
    tiempo += segundo
    $('#timer').text(tiempo)
}
//Llena la matriz con numeros aleatorios
   function iniciar(){
        for (var i = 0; i < 7; i++){
            matriz[i] = new Array(7)
            for (var j = 0; j < 7; j++){
                matriz[i][j] = aleatorio(1,4)
            }
        }
        
    }

//Carga las imagenes a la pantalla
    function llenar(){
        var html
        var col = document.querySelectorAll('div[class^="col"]')
        panel = document.querySelectorAll('.panel-tablero')
        //panel.animate([{'opacity':'1'},{'opacity':'0'}],{duration: time, iterations: 1})
        var k = 0;
        for(var i = 0; i < col.length; i++){
            html= ''
            for(var j = 0; j < matriz[i].length; j++){
                html +=  "<img src='images/"+ matriz[j][i]+".png' alt='" + (j+1) + "' id = 'imagen'" + (++k) + "'>"        
            }
            col[i].innerHTML = html       
        }
    //    var z =  cambiarImagen()
    }

    function imprimirMatriz(){

    }

 function devolverObjetoMatriz(fila, columna){
    fila--
    var col = document.querySelectorAll(`.col-${columna}`)
    return col[fila]
 }

//permite cambiar una imagen generando una transicion en la matriz
function insertarImagen(fila, columna, imagen,time){
    var html = `<img src="image/${imagen}.png">`
    fila--
    var col = document.querySelectorAll(`.col-${columna}`)
    matriz[fila][columna] = imagen
    col[fila].animate([{'opacity':'1'},{'opacity':'0'}],{duration: time, iterations: 1})  
    setTimeout(function(){
        col[fila].html(html)
        if (html.length > 0){
            col[fila].animate([{'opacity':'0'},{'opacity':'1'}],{duration: time, iterations: 1}) 
        }
        
    },time)
    
}




//Genera un numerio aleatrio en un rango determinado
function aleatorio(inferior,superior){ 
   	var numPosibilidades = superior - inferior 
   	var aleat = Math.random() * numPosibilidades 
   	aleat = Math.round(aleat) 
   	return parseInt(inferior) + aleat 

}
 