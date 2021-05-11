
const btn = document.querySelectorAll(".btnGeneral");
var inputN = document.getElementById("numeros");
var inputL = document.getElementById("letras");

const buttons = (e)=>{ 
    const btnid = e.target.id;
    const btntext = e.target.innerText;
    
    const numeros = btntext[0];
    const letras = btntext[2];
    const okNum = inputN.value;
    const okLet = inputL.value;
    
    var cadenaN = inputN.value;
    var posicion = cadenaN.charAt(cadenaN.length-1);
    ultimoN = Number(posicion)+1;
    // alert(posicion);

    if (inputN.value==""){
        if (numeros==="1"){
            inputN.value=numeros;
        }else{
            alert("Debe iniciar con el número 1"); 
        }
    }else{
        if (inputN.value!=="" && numeros == ultimoN){
            inputN.value = inputN.value + ", " + numeros;
        }else{
            if(ultimoN=="10" && numeros == "0"){
            inputN.value = inputN.value + ", " + numeros;
            }else{   
            alert("el número que sigue es " + ultimoN);   
            }
        }
    }    
    if (ultimoN=="1" && posicion=="0") {
        inputN.value = okNum;
        inputL.value = letras;
    } else {
        
    }  
}
for (let index = 0; index < btn.length; index++) {
    const element = btn[index].addEventListener("click",buttons);
}