

//Implementacion de Henrry

const artyom = new Artyom();

statusOutElement=["0","0","0","0","0","0"];

                                        
// Add a single command

var myGroup = [
    {
        indexes:["que es una resistencia eléctrica","para qué sirve una resistencia eléctrica","que es una resistencia","para qué sirve una resistencia"], // These spoken words will trigger the execution of the command
        action:function(i){ // Action to be executed when a index match with spoken word
            if (i==0 || i==1) {
                artyom.say("Es la oposición al flujo de electrones al moverse a través de un conductor. ​ La unidad de resistencia en el Sistema Internacional es el ohmio, que se representa con la letra griega omega, en honor al físico alemán Georg Simon Ohm.");
            }else if(i==2 || i==3){
                artyom.say("También llamado resistor, es un componente electrónico diseñado para introducir una resistencia eléctrica determinada entre dos puntos de un circuito eléctrico. Es un material formado por carbón y otros elementos resistivos para disminuir la corriente que pasa.");
            }
        }
    },
    {
        indexes:["qué opinas de Siri","Quién es Siri"], // These spoken words will trigger the execution of the command
        action:function(){ // Action to be executed when a index match with spoken word
            artyom.say("jajajaja!, ¿Creo que es mi hermana la más chiquita, cortana es mi hermana mayor?");
        }
    },
    {
        indexes:["mostrar ruta 1","hola","hey"], // These spoken words will trigger the execution of the command
        action:function(){ // Action to be executed when a index match with spoken word
            artyom.say("¡Hola!, ¿Qué tal tu día?");
        }
    },
	{
		indexes:["hola Yaqui","hola","hey"], // These spoken words will trigger the execution of the command
	    action:function(){ // Action to be executed when a index match with spoken word
	        artyom.say("¡Hola!, ¿Qué tal tu día?");
	    }
	},{
		indexes:["Quién es tu creador","Quiénes son Tus creadores","quién te creo"], // These spoken words will trigger the execution of the command
	    action:function(){ // Action to be executed when a index match with spoken word
	        artyom.say('¡Hey!, buena pregunta, mi creador es Henry"');
	    }
	},
	{
		indexes:["Quién eres","Cómo te llamas","cómo te pusieron","cómo es tu nombre"], // These spoken words will trigger the execution of the command
    	action:function(){ // Action to be executed when a index match with spoken word
        	artyom.say('¡Mi nombre es Yacki!, Tengo ese nombre debido a una persna importante para mi creador');
    	}
	},
    {
        indexes:["qué hora es", "qué horas son","Dime la hora", "qué horas son Yaqui","qué hora es Jackie","ya es tarde"],
        action:function(i){ // var i returns the index of the recognized command in the previous array
        	var f=new Date();
			
        	if(i == 5){
                artyom.say("Never is too late to do something my friend !");
            }else{
            	cad=f.getHours()+" y "+f.getMinutes()+" minutos con "+f.getSeconds()+" segundos"; 
				if (f.getHours()>12) {
					cad=f.getHours()-12+" y "+f.getMinutes()+" minutos con "+f.getSeconds()+" segundos de la tarde";
				}else if(f.getHours()<12){
					cad=f.getHours()+" y "+f.getMinutes()+" minutos con "+f.getSeconds()+" segundos de la mañana";
				}else if(f.getHours()==12){
					cad=f.getHours()+" y "+f.getMinutes()+" minutos con "+f.getSeconds()+" segundos del mediodía";
				}
            	artyom.say("Son las "+cad);
            }
        }
    },
    {
		indexes:["preséntate Yaqui","preséntate", "preséntate y aquí"], // These spoken words will trigger the execution of the command
    	action:function(){ // Action to be executed when a index match with spoken word
    		var d=new Date();
    		var mensaje='Mi nombre es Yacki, me crearon debido con el fin de controlar vía wifi, diversos aparatos conectadoss a la red, como tambien conocer algunos conceptos de electrónica, soy muy amigable así que nos vamos a llevar muy bien';
    		if (d.getHours()<12) {
    			mensaje='¡Buenos Días!, '+mensaje;
    		}else if (d.getHours()>18) {
    			mensaje='¡Buenas Noches!, '+mensaje;
    		}else if(d.getHours()>12 && d.getHours()<18){
    			mensaje='¡Buenas Tardes!, '+mensaje;
    		}
    		
        	artyom.say(mensaje);
    	}
	},
	{
		indexes:["Está muy bonito su proyecto","Qué bonito proyecto", "buen proyecto"], // These spoken words will trigger the execution of the command
    	action:function(){ // Action to be executed when a index match with spoken word
        	artyom.say('¡Muchas Gracias¡, Aunque solo soy una máquina, pero mis creadores deben estar felices');
    	}
	},
	{
		indexes:["cuántos años tienes","Qué edad tienes", "cuando naciste"], // These spoken words will trigger the execution of the command
    	action:function(){ // Action to be executed when a index match with spoken word
        	artyom.say('No tengo edad, porque no soy humano, pero si te refieres a mi fecha de creación fue, el 7 de agosto de 2017');
    	}
	},
	{
		indexes:["Qué es un diodo","para qué sirve un diodo"], // These spoken words will trigger the execution of the command
    	action:function(i){ // var i returns the index of the recognized command in the previous array
			artyom.say('Dispositivo electrónico de dos electrodos por el que circula la corriente en un solo sentido.');	
        }
	}
    ,
    {
        indexes:["Qué es la electrónica","para qué sirve la electrónica"], // These spoken words will trigger the execution of the command
        action:function(i){ // var i returns the index of the recognized command in the previous array
            artyom.say('Parte de la física que estudia los cambios y los movimientos de los electrones libres y la acción de las fuerzas electromagnéticas y los utiliza en aparatos que reciben y transmiten información. Técnica que aplica estos conocimientos a la industria.');    
        }
    }
    ,
    {
        indexes:["Qué es un mosfet","para qué sirve un mosfet"], // These spoken words will trigger the execution of the command
        action:function(i){ // var i returns the index of the recognized command in the previous array
            artyom.say('Es un dispositivo semiconductor utilizado para la conmutación y amplificación de señales. El nombre completo, Transistor de Efecto de Campo de Metal-Óxido-Semiconductor (Metal Oxide Semiconductor Field Effect Transistor, MOSFET) se debe a la constitución del propio transistor.');    
        }
    }
	,
	{
		indexes:["Qué significa *","Que es un *"], // These spoken words will trigger the execution of the command
    	action:function(i){ // var i returns the index of the recognized command in the previous array
    		var palabra=document.getElementById("comandos").value;
            var significado="";
    		var xhr = new XMLHttpRequest();
    		var resultado = palabra.split(" ");
    		var palabra= resultado[(resultado.length)-1];
 			var urldiccionario="http://www.wordreference.com/definicion/"+palabra;
 			$.get(urldiccionario, function(respuestaSolicitud){
                significado=respuestaSolicitud;
			   //alert(significado);
               significado=significado.getElementsByClassName("entry")[0].firstChild.innerHTML;
            
            document.getElementById("comandos").value=significado;
            artyom.say(significado);
			});
        }
	}

	//PROGRAMANDO EL ENVIO DE LOS DATOS A ENCENDER
	,{
		indexes:["Jackie encender lámpara","Jack y encender lámpara", "encender lámpara",
				"Jackie encender ventilador","Jack y encender ventilador","encender ventilador",
				"Jackie encender televisor","Jack y encender televisor","encender televisor"], // These spoken words will trigger the execution of the command
    	action:function(i){ // var i returns the index of the recognized command in the previous array
    		var outElement="";
    		var outText="";
    		var outTextHelp="";
    		var indice=-1;
        	if(i == 0 || i== 1 || i == 2){
        		outElement="on1";
                outText="¡Luz encendida!";
                outTextHelp="¡Lo siento!, la luz ya está encendida";
                indice=0;
            }else if(i == 3 || i== 4 || i== 5){
            	outElement="on2";
            	outText="¡Ventilador encendido!";
            	outTextHelp="¡Lo siento!, el ventilador ya está encendido";
                indice=1;
            }else if(i == 6 || i == 7 || i == 8){
            	outElement="on3";
            	outText="¡Televisión encendida!";
            	outTextHelp="¡Lo siento!, la television ya está encendida";
                indice=2;
            }else if(i == 9 || i == 10 || i == 11){
            	outElement="on4";
            	outText="¡Cambia encendida!";
            	outTextHelp="¡Lo siento!, --- ya está encendida";
                indice=3;
            }else if(i == 12 || i == 13 || i == 14){
            	outElement="on5";
            	outText="¡Cambia encendida!";
            	outTextHelp="¡Lo siento!, -- ya está encendida";
                indice=4;
            }else if(i == 15 || i == 16 || i == 17){
            	outElement="on6";
            	outText="¡Cambia encendida!";
            	outTextHelp="¡Lo siento!, -- ya está encendida";
                indice=5;
            }

            if (outElement!=0 && outText!="" && statusOutElement[indice]=="0") {
            	$.ajax({
				    type:'post',
				    url: 'procesa.php',
				    data: {'codigoelemento':outElement},
				    success: function(){
				       //Acciones si se envia correctamente la voz
				       artyom.say(outText);
				       statusOutElement[indice]="1";
				    },
				    error: function(){
				       //alert("No se ha escuchado bien");
				       artyom.say("¡Lo siento!, algo ha salido mal y no se ha completado la acción")
				    }
			   	});    
            }else if(statusOutElement[indice]=="1"){
            	artyom.say(outTextHelp);
            }
        }
	}

	//PROGRAMANDO EL ENVIO DE LOS DATOS A APAGAR
	,{
		indexes:["Jackie Apagar lámpara","Jack y Apagar lámpara", "Apagar lámpara",
				"Jackie Apagar ventilador","Jack y Apagar ventilador","Apagar ventilador",
				"Jackie Apagar televisor","Jack y Apagar televisor","Apagar televisor"], // These spoken words will trigger the execution of the command
    	action:function(i){ // var i returns the index of the recognized command in the previous array
    		var outElement="";
    		var outText="";
    		var outTextHelp="";
    		var indice=-1;
        	if(i == 0 || i== 1 || i == 2){
        		outElement="off1";
                outText="¡Luz Apagada!";
                outTextHelp="¡Lo siento!, la luz ya está apagada";
                indice=0;
            }else if(i == 3 || i== 4 || i== 5){
            	outElement="off2";
            	outText="¡Ventilador Apagado!";
            	outTextHelp="¡Lo siento!, el ventidador ya está apagada";
            	indice=1;
            }else if(i == 6 || i == 7 || i == 8){
            	outElement="off3";
            	outText="¡Televisión Apagada!";
            	outTextHelp="¡Lo siento!, la television ya está apagada";
            	indice=2;
            }else if(i == 9 || i == 10 || i == 11){
            	outElement="off4";
            	outText="¡Cambia Apagada!";
            	outTextHelp="¡Lo siento!, -- ya está apagada";
            	indice=3;
            }else if(i == 12 || i == 13 || i == 14){
            	outElement="off5";
            	outText="¡Cambia Apagada!";
            	outTextHelp="¡Lo siento!, -- ya está apagada";
            	indice=4;
            }else if(i == 15 || i == 16 || i == 17){
            	outElement="off6";
            	outText="¡Cambia Apagada!";
            	outTextHelp="¡Lo siento!, -- ya está apagada";
            	indice=5;
            }

            if (outElement!=0 && outText!="" && statusOutElement[indice]=="1") {
            	$.ajax({
				    type:'post',
				    url: 'procesa.php',
				    data: {'codigoelemento':outElement},
				    success: function(){
				       //Acciones si se envia correctamente la voz
				       artyom.say(outText)
				       statusOutElement[indice]="0";
				    },
				    error: function(){
				       //alert("No se ha escuchado bien");
				       artyom.say("¡Lo siento!, algo ha salido mal y no se ha completado la acción")
				    }
			   	});    
            }else if(statusOutElement[indice]=="0"){
            	artyom.say(outTextHelp);
            }
        }
	}

];
//$valor=='Alfred encender lámpara' || $valor=='alfred Encender Lámpara' || $valor=='Alfred ENCENDER LAMPARA' || $valor=='Alfredo encender lámpara' ||$valor=='Encender lámpara' ||$valor=='Encender Lámpara' ||$valor=='encender lámpara'
artyom.addCommands(myGroup); 


// This function activates artyom and will listen all that you say forever (requires https conection, otherwise a dialog will request if you allow the use of the microphone)
function startContinuousArtyom(){
    artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"es-ES",// A lot of languages are supported. Read the docs !
            continuous:true,// Artyom will listen forever
            listen:true, // Start recognizing
            debug:true, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

startContinuousArtyom();


artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        if (recognized=="encender lámpara") {
        $.ajax({
             type: 'post',
             url: 'procesa.php',
             data: {'voz':recognized},
             success: function(){
                //Acciones si se envia correctamente la voz
             },
             error: function(){
                //alert("No se ha escuchado bien");
             }
           });
        }
        document.getElementById("comandos").value=recognized;
    }else{
        console.log(recognized);
    }

});


/*
artyom.say("Good morning, i'm hungry. Do you want to eat something?",{
    onStart:function(){
        console.log("The text is being readed");
    },
    onEnd:function(){
        console.log("Well, that was all. Try with a longer text !");
    }
});*/