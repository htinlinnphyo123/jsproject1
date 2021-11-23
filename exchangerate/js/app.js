const currencyoneel=document.getElementById('currency-one'),
     amountoneel=document.getElementById('amount-one');

const currencytwoel=document.getElementById('currency-two');
    amounttwoel=document.getElementById('amount-two');

const swapel=document.getElementById('swap'),
    ratel=document.getElementById('rate');

function calculate(){
    // console.log('hay');

    const crcyone=currencyoneel.value;
    const crcytwo=currencytwoel.value;

    const amtone=amountoneel.value;
    const amttwo=amounttwoel.value;

    const apikey=`9ecd6d1e6ddfe00d77dc0723`
    // console.log(crcyone,amtone);
    // console.log(crcytwo,amttwo);

    const uri=`https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
    console.log(uri);

    fetch(uri)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.conversion_rates);

        const rate=data.conversion_rates[crcytwo];

        ratel.innerHTML=`1 ${crcyone} = ${rate} ${crcytwo}`;

        amounttwoel.value=(amountoneel.value *  rate).toFixed(2);
    
    })

}


// Event Listener 
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{

    const temp=currencyoneel.value;

    currencyoneel.value=currencytwoel.value;
    currencytwoel.value=temp;

    calculate();
});