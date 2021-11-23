//UI
const video=document.getElementById('video');

const play=document.getElementById('play'),
      stop=document.getElementById('stop'),
      progress=document.getElementById('progress'),
      timestamp=document.getElementById('timestamp');  


// Play and stop video

function togglevideostatus(){

    if(video.paused){
        video.play();
    }else{
        video.pause();
    }

}

//play and pause video
function updatevideo(){

    if(video.paused){
        play.innerHTML=`<i class="fas fa-play fa-2x"></i>`;
    }else{
        play.innerHTML=`<i class="fas fa-pause fa-2x"></i>`
    }

}


//update progress and timestamp

function updateprogress(){
    progress.value = (video.currentTime / video.duration) *100;

// to get minutes

let mins= Math.floor(video.currentTime / 60);

if(mins<10){
    mins="0" +mins;
}

//to get second

let secs=Math.floor(video.currentTime % 60);

if(secs<10){
    secs="0"+secs;
}

timestamp.innerText=`${mins}:${secs}`
}

//stop video

function stopvideo(){
    video.currentTime=0;
    // video.pause();
}

//set video progress

function setvideoprogress(){
    video.currentTime=(progress.value * video.duration) / 100;
}






// event listener      
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updatevideo);
video.addEventListener('pause',updatevideo);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);

progress.addEventListener('click',setvideoprogress);
