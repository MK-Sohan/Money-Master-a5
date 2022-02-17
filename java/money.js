 function gettheinputbox (boxname){
     const inputbox = document.getElementById(boxname);
    const inputboxvalue = parseInt(inputbox.value);
    inputbox.value='';
    return inputboxvalue;
    
 }





document.getElementById('calculate-button').addEventListener('click',function(){
//  console.log('click');
    const incomeinputbox= document.getElementById('income-box');
    const incomeinputboxvaluetext=incomeinputbox.value;
const convertincomeinputvalue = parseFloat(incomeinputboxvaluetext);
incomeinputbox.value='';


const foodinputbox = document.getElementById('food-box');
const foodinputboxvaluetext = foodinputbox.value;
const convertfoodinputvalue= parseFloat(foodinputboxvaluetext);
foodinputbox.value='';

const rentinputbox = document.getElementById('rent-box');
const rentinputboxvaluetext= rentinputbox.value;
const convertrentinputvalue= parseFloat(rentinputboxvaluetext);
rentinputbox.value='';

const clothsinputbox = document.getElementById('cloths-box');
const clothsinputboxvaluetext = clothsinputbox.value;
const convertclothsinputvalue = parseFloat(clothsinputboxvaluetext);
clothsinputbox.value='';

if(convertincomeinputvalue<0 || convertfoodinputvalue<0 || convertrentinputvalue<0 || convertclothsinputvalue<0 ){
    alert("Give a positive number")
}
else{
    const expensessum = convertfoodinputvalue+convertrentinputvalue+convertclothsinputvalue;


    const totalsum = convertincomeinputvalue-expensessum;
    const totalexpenses=document.getElementById('total-expenses');
    totalexpenses.innerText= expensessum;
    const totalbalance = document.getElementById('total-balance');
    totalbalance.innerText=totalsum;
}


})


document.getElementById('save-button').addEventListener('click',function(){


    const savingammount = document.getElementById('saving-ammount');
    const remainingBalance=document.getElementById('remaining-Balance');
    

    const totalbalance = document.getElementById('total-balance');

const totalbalancetext = parseFloat(totalbalance.innerText);
// console.log(totalbalancetext);


const savebox=document.getElementById('save-box');
const saveboxvalue = parseFloat(savebox.value) ;
if(saveboxvalue<0){
  
    alert('Negative value not allow')
}


const convertpar = saveboxvalue/100;
const converttotalbalance = totalbalancetext*convertpar;
console.log(totalbalancetext);
console.log(converttotalbalance);

if(totalbalancetext<=converttotalbalance){
alert('Your saving is more then balance');

}
else{
    
    savingammount.innerText= converttotalbalance;
    
    remainingBalance.innerText=totalbalancetext-converttotalbalance;
    
}




})

