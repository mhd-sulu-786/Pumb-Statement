

function result(){
    let num1= document.getElementById("oil1").value
    let num2=document.getElementById("oil2").value

    let oil=num1-num2
    let oiltext=oil*320
    
document.getElementById("sale1").value=oil
document.getElementById("sale2").value=oiltext






    let num3=document.getElementById("pp1").value


    let num11=document.getElementById("pp2").value


    let num4=document.getElementById("p21").value-document.getElementById("p11").value
    let num5=document.getElementById("p22").value-document.getElementById("p12").value
    let num6= document.getElementById("p23").value-document.getElementById("p13").value



   
    
  




let power=num11-num3
let poweramout=power*115.88

document.getElementById("sale3").value=power
document.getElementById("sale4").value=poweramout

let petrol=num4+num5+num6

let petrolamout=petrol*108.99

document.getElementById("sale5").value=petrol
document.getElementById("sale6").value=petrolamout






    
    let num15=document.getElementById("d21").value-document.getElementById("d11").value
    let num16=document.getElementById("d22").value-document.getElementById("d12").value
    let num17=document.getElementById("d23").value-document.getElementById("d13").value
    let num18=document.getElementById("d24").value-document.getElementById("d14").value




    let disel=num15+num16+num17+num18


    let diselamount=disel*97.84
    document.getElementById("sale7").value=disel
document.getElementById("sale8").value=diselamount
}