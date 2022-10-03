const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',

 
    'm', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    
     
    'x', 'y', 'z'];

    let key ="";

    $(document).ready(function(){
        //creamos funcion oara tabajr con viggenere

        $('#ci').click(function(){
            //para cifrar vamos a utilizar una funcion de modulo la cual es y=x+zmodulo27

            //vamos a traer los datos de la llave

            key=document.getElementById('llave').value;
            //tenemos que verificar la llave
            key= key.replace(/ /g,"");
            let mess=document.getElementById('mess').value;
            //tenemos que verificar la llave
            mess= mess.replace(/ /g,"");

            let newMess="";
            let keyCompleta="";

            //para ralizr el aalgortimo debes realizar una funcion que deba verificar las condiciones e mismo

            if(revision(mess,key)){
                //obtener primero la posicion y la longitud del mensaje

                for(var i=0; i<mess.length; i++){
                keyCompleta+=key.charAt((i%Number(key.length)));

                }
                alert(keyCompleta);

                //tengo que volver a recorrer el mensaje para obtener caracteres
                 for(var i=0;i<mess.length;i++){
                    let charr = mess.charAt(i);

                    let posm =getPosicion(charr);
                    
                    charr=keyCompleta.charAt(i);

                    let posk=getPosicion(charr);

                    //tenemos que ejecutar el cifrado, ara eso vamos a crear tra funcion

                    let newValores=cifrafdo(posm,posk);

                    newMess += abc[newValores];
                 }
                 document.getElementById('rs').value=newMess;
                }else{
                    alert("No sirve llevale")
            }

        });
        //descifrar
        $('#de').click(function(){
            //para cifrar vamos a utilizar una funcion de modulo la cual es y=x+zmodulo27

            //vamos a traer los datos de la llave

            key=document.getElementById('llave').value;
            //tenemos que verificar la llave
            key= key.replace(/ /g,"");
            let mess=document.getElementById('mess').value;
            //tenemos que verificar la llave
            mess= mess.replace(/ /g,"");

            let newMess="";
            let keyCompleta="";

            //para ralizr el aalgortimo debes realizar una funcion que deba verificar las condiciones e mismo

            if(revision(mess,key)){
                //obtener primero la posicion y la longitud del mensaje

                for(var i=0; i<mess.length; i++){
                keyCompleta+=key.charAt((i%Number(key.length)));

                }
                alert(keyCompleta);

                //tengo que volver a recorrer el mensaje para obtener caracteres
                 for(var i=0;i<mess.length;i++){
                    let charr = mess.charAt(i);

                    let posm =getPosicion(charr);
                    
                    charr=keyCompleta.charAt(i);

                    let posk=getPosicion(charr);

                    //tenemos que ejecutar el cifrado, ara eso vamos a crear tra funcion

                    let newValores=cifrafdo(posm,posk);

                    newMess += abc[newValores];
                 }
                 document.getElementById('rs').value=newMess;
                }else{
                    alert("No sirve llevale")
            }

    });

});

//emepzamos con la funcion de cambio o de cifrado
function cifrado(posm,posk){
    //aqui tengo que aplizar la formula del modulo 

    let y=(posm+posk)%27;
    return y;
}
//funcion de desifrado o descifrar
//esta si cambia mas por que debemos hacer que el ciclo no se salga
function descrifrar(posm,posk){
    let val=0;
    if((posm-posk)>=0){

        val=(posm+posk)%27;
    }else{
        val =(posm-posk+27)%27;
    }
    return val;
    }
function getPosicion(letra){
    let posicion= abc.indexOf(letra);
    return posicion;
}

//funcion de la revision longitud,caracteres,llave menor qu el mensaje

function revision(mess,desp){
    //primero hay que validar la entrada de los datos a partir de una expresion regular, o sea que solo haya letras 
    var expresion=/^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/;

    var aceptado=true;

    //evaluar la expresion

    if(expresion.test(mess)){
        alert("EL TEXTO QUE INGRESO NO HA SIDO ACEPTADO,INGRESE SOLO MINúSCULAS Y EVITE NÚMEROS Y SÍMBOLOS");
        aceptado=false;
    }
    if(expresion.test(desp)){
        alert("LA CLAVE INGRESADA ES INCORRECTA NO CUMPLE CON LAS NORMAS DE USAR SOLO MINÚSCULAS Y NO DE USAR NÚMEROS Y/O SÍMBOLOS");
        aceptado=false;
    }
    if(desp.length>mess.length){
        alert("LA CLAVE NO PUEDE SER MAYOR QUE EL MENSAJE");
        aceptado=false;
    }
    return aceptado;
}
//IMPORTAR LA LIBRERIA GQUERY VERSION 11