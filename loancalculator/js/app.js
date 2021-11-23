// UI
const terms=document.getElementById('years');
const bubble=document.querySelector('.bubble');
const loader=document.getElementById('loading');
const resultui=document.getElementById('result');

terms.addEventListener('input',()=>{
    const val=terms.value;
    bubble.textContent=val>1? `${val} Months` : `${val} Month`;  

});

const form=document.getElementById('loan-form');

form.addEventListener('submit',(e)=>{
    // console.log("hay");

    //hide result
    resultui.style.display="none";

    //show loader
    loader.style.display="block";

    //show result
    setTimeout(calculateresult,1000);

    e.preventDefault();


})

// calculate result
function calculateresult(){
    // console.log("Calculating...");


    //UI
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    
    const monthlypayment=document.getElementById('monthly-payment');
    const totalinterest=document.getElementById('total-interest');
    const totalpayment=document.getElementById('total-payment');

    const principal=parseFloat(amount.value);
    // console.log(principal);    
    const getinterest=parseFloat(interest.value)/12;
    // console.log(getinterest);
    const getterms=parseFloat(terms.value);
    // console.log(getterms);

    //compute all monthly payment
    const monthly=Math.round(principal*(getinterest*getterms))/100;
    // console.log(monthly);


    if(monthly){
        monthlypayment.value=((principal+monthly)/getterms).toFixed(2);
        totalinterest.value=monthly.toFixed(2);
        totalpayment.value=(monthlypayment.value*getterms).toFixed(2);
        
        loader.style.display="none";
        resultui.style.display="block";
    }else{
        showerror("Please check your number");
    }

}

// show error

function showerror(message){
    loader.style.display="none";

    const errordiv=document.createElement('div');
    // console.log(errordiv);
    errordiv.className="alert alert-danger";
    errordiv.appendChild(document.createTextNode(message));

    const card=document.querySelector(".card");
    const heading=document.getElementById('heading');
    console.log(errordiv);

    card.insertBefore(errordiv,heading);

    // clear errordiv after display
    setTimeout(clearerrordiv,2000);

}

function clearerrordiv(){

    document.querySelector('.alert').remove();


}