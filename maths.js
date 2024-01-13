let Petrol_Total_sale_ltr;
let Petrol_Total_sale_amount;

let Disel_Total_sale_ltr;
let Disel_Total_sale_amount;

let oil_Total_sale_ltr;
let oil_Total_sale_amount;

let Total_seeing_amount;

function result(){
    let num1= document.getElementById("oil1").value
    let num2=document.getElementById("oil2").value

    let oil=num1-num2
    let oiltext=oil*320
    
document.getElementById("sale1").value=oil
document.getElementById("sale2").value=oiltext
oil_Total_sale_ltr=oil;
oil_Total_sale_amount=oiltext;


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
Petrol_Total_sale_ltr=petrol;
Petrol_Total_sale_amount=petrolamout;



 
    let num15=document.getElementById("d21").value-document.getElementById("d11").value
    let num16=document.getElementById("d22").value-document.getElementById("d12").value
    let num17=document.getElementById("d23").value-document.getElementById("d13").value
    let num18=document.getElementById("d24").value-document.getElementById("d14").value




    let disel=num15+num16+num17+num18


    let diselamount=disel*97.84
    document.getElementById("sale7").value=disel
document.getElementById("sale8").value=diselamount
Disel_Total_sale_ltr=disel;
Disel_Total_sale_amount=diselamount;


   let Total_sale_amount= diselamount+petrolamout+oiltext;
      document.getElementById("Total-sale-Amout").value= Total_sale_amount;
      Total_seeing_amount=Total_sale_amount;
}
function caculate(){
    let upi = parseFloat(document.getElementById("UPI").value);
    let card = parseFloat(document.getElementById("card").value);
    let cash = parseFloat(document.getElementById("cash").value);
    let credit = parseFloat(document.getElementById("credit").value);
    document.getElementById("Total-cash").value=upi+card+cash+credit;

    document.getElementById("Petrol-ltr").value=Petrol_Total_sale_ltr;
    document.getElementById("Petrol-amount").value=Petrol_Total_sale_amount;

    document.getElementById("disel-ltr").value=Disel_Total_sale_ltr;
    document.getElementById("disel-amount").value=Disel_Total_sale_amount;
    document.getElementById("oil-ltr").value=oil_Total_sale_ltr;
    document.getElementById("Oil-amount").value=oil_Total_sale_amount;
    document.getElementById("Total-seeing-amount").value=Total_seeing_amount;
    document.getElementById("Total-amount").value = document.getElementById("Total-cash").value;
    document.getElementById("Balance-amount").value= document.getElementById("Total-cash").value-Total_seeing_amount;

}
