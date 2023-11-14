function mostrar(){
    let r,rl,r2,r3; // variable del fomulario
    let cant=0;
    if(document.getElementById("len01").checked){
        r="javaScripr";
        cant++;
    }else{
        r=" ";
    }
    if(document.getElementById("len02").checked){
        r="python";
        cant++;
    }else{
        r1=" ";
    }
    if(document.getElementById("len03").checked){
        r="PHP";
        cant++;
    }else{
        r2=" ";
    }
    if(document.getElementById("len04").checked){
        r="C#";
        cant++;
    }else{
        r3=" ";
    }
    document.getElementById("resp").value=r+" "+r1+" "+r2+" "+r3;
    alert("CANTIDAD DE LENGUAJES SELECCIONADOS ES :"+cant);
}