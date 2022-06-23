function getInput(InputId) {
    const Newamountinput=document.getElementById(InputId);
   const Newamount= Newamountinput.value;
   Newamountinput.value='';
   return Newamount;
   
}
function moneyupdate(Totalvalue,currentvalue){
    const Totalmoney=document.getElementById(Totalvalue);
    const currentAmount= Totalmoney.innerText;
     const TotalAmount= parseFloat(currentvalue)+parseFloat(currentAmount);
     Totalmoney.innerText= TotalAmount; 
}

function newbalance() {
    const BalanceAmmount=document.getElementById('Balance-amount');
    const Balance= BalanceAmmount.innerText;
    const Balancenum=parseFloat(Balance)
    return Balance;
    
}





function updatebalance (Newamount,IsAdd) {
    const BalanceAmmount=document.getElementById('Balance-amount');
    // const Balance= BalanceAmmount.innerText;
    const Balance= newbalance();
    if (IsAdd==true) {
        BalanceAmmount.innerText=parseFloat(Newamount) + parseFloat(Balance);
    }
    else{
        BalanceAmmount.innerText=  parseFloat(Balance) - parseFloat(Newamount);
    }

   
}





document.getElementById('deposit-button').addEventListener('click',function () {
    // const Newamountinput=document.getElementById('deposit-input');
   
   
    const Newamount= getInput('deposit-input');
    if(Newamount>0){
    moneyupdate('deposit-total',Newamount);
    updatebalance (Newamount,true);}

})

document.getElementById('withdraw-button').addEventListener('click',function () {
    // const Newamountinput=document.getElementById('deposit-input');
    const Newamount= getInput('withdraw-input');
    const Newbalance= newbalance();
    if (Newamount>0 && Newbalance>Newamount) {
        moneyupdate('withdraw-total',Newamount);
        updatebalance (Newamount,false);   
    }
    else
    { console.log('TUMR JOTO TAKA NAI MIA TOTO TAKA TULTE CHAW LOJJA LAGEH NAH!')}
   
})