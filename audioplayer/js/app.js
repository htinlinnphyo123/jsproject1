//UI
const musiccontainer=document.getElementById('music-container');

const title=document.getElementById('title');
const progresscontainer=document.getElementById('progress-container');
const progress=document.getElementById('progress');

const audio=document.getElementById('audio');

const covers=document.getElementById('cover');

const prevbtn=document.getElementById('prev');
const playbtn=document.getElementById('play');
const nextbtn=document.getElementById('next');

let songindex=2;

// song title
const songs=['sample1','sample2','sample3'];
// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){

    title.innerText=music;
    audio.src=`audio/${music}.mp3`;
    covers.src=`img/${music}.jpg`;
    // console.log(cover.src);
}

playbtn.addEventListener('click',()=>{
    // musiccontainer.classList.toggle('play');
    // console.log('hello world');
    const isplaying=musiccontainer.classList.contains('play');

    if (isplaying){
        pausesong();
    }else{
        playsong();
    }

})

function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector("i.fas").classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play();
}

function pausesong(){
    musiccontainer.classList.remove('play');
    playbtn.querySelector("i.fas").classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause();
}
// change song
prevbtn.addEventListener('click',prevsong);
nextbtn.addEventListener('click',nextsong);

function prevsong(){
    // console.log('hay');
    songindex--;

    if(songindex < 0){
        songindex=songs.length-1;
    }
    loadsong(songs[songindex]);
    playsong();


}
function nextsong(){
    // console.log('hello');

    songindex++;

     if(songindex>songs.length-1){
        songindex=0;
    }
    loadsong(songs[songindex]);
    playsong();

}

// time play and stop update

function updateprogress(e){
    // console.log('hay');
    // console.log(audio.duration);
    // console.log(audio.currentTime);

    // Method 1
    // const progresspercent = (audio.currentTime / audio.duration) * 100;
    // progress.style.width=`${progresspercent}%`;

    //Event call

    //Method2
    // const currenttime=e.target.currentTime;
    // const duration=e.target.duration;
    // const progresspercent=(currenttime/duration)*100;
    // progress.style.width=`${progresspercent}%`;

    //Method3
    // const {currentTime}=e.target;
    // const {duration}=e.target;
    // const progresspercent=(currentTime/duration)*100;
    // progress.style.width=`${progresspercent}%`;

    //Method 4
    const {currentTime,duration}=e.target;
    const progresspercent=(currentTime/duration)*100;
    progress.style.width=`${progresspercent}%`;
}

audio.addEventListener('timeupdate',updateprogress);

//click on progress bar
progresscontainer.addEventListener('click',setprogress);

function setprogress(e){
    console.log('jay');

    const width=e.target.clientWidth;

    const clickx=e.offsetX;

    const duration=audio.duration;

    audio.currentTime = (clickx / width) * duration;

}

//End Song
audio.addEventListener('ended',nextsong);
