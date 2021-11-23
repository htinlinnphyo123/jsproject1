const togglebtn=document.querySelector('.toggle');
const openbtn=document.getElementById('open');
const closebtn=document.getElementById('close');
const modal=document.getElementById('modal');

togglebtn.addEventListener('click',()=>{
    document.body.classList.toggle('active');
})

// Show Modal
openbtn.addEventListener('click',()=>{
    modal.classList.add('showmodal');
});
// Close Modal
closebtn.addEventListener('click',()=>{
    modal.classList.remove('showmodal');
});

window.addEventListener('click',(e)=>e.target===modal ? modal.classList.remove('showmodal'):false);
