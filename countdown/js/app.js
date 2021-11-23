let year=document.getElementById('year');
let day=document.getElementById('day');
let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let second=document.getElementById('second');

let countdown=document.getElementById('countdown');
let loading=document.getElementById('loading');

let currentyear=new Date().getFullYear();

let newyeartime=new Date(`January 01 ${currentyear+1} 00:00:00`);
// console.log(newyeartime);

year.innerText=currentyear+1;


function updatecountdown(){
    const currentime=new Date();
    // console.log(currentime);

    const diff=newyeartime - currentime;
    // console.log(diff);

                        //ms      s      m   h   d
    const d=Math.floor(diff / 1000 / 60 /60 / 24);
    // console.log(d);

    const h=Math.floor(diff/ 1000 / 60 / 60) % 24;
    // console.log(h);

    const m=Math.floor(diff/1000/60) % 60;
    // console.log(m);

    const s=Math.floor(diff/1000) % 60;
    // console.log(s);

    day.innerText=d;
    hour.innerText=h < 10 ? "0" + h : h;
    minute.innerText=m <10 ? "0" + m : m;
    second.innerText=s <10 ? "0" + s : s;
}

setTimeout(()=>{
    loading.remove();
    countdown.style.display="flex";
},3000)

setInterval(updatecountdown,1000);