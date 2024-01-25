var Audios = document.getElementById("ad");
var imgaudio = document.getElementById("imgsong");
document.getElementById("song1").addEventListener("click", ()=>{
    Audios.innerHTML = `<source id="song" src="resources/1.mp3"></source> `;
    imgaudio.src = `images/1.jpg`
});
document.getElementById("song2").addEventListener("click", ()=>{
    Audios.innerHTML = `<source id="song" src="resources/2.mp3"></source> `;
    imgaudio.src = `images/2.jpg`
    Audios.load();
});
document.getElementById("song3").addEventListener("click", ()=>{
    Audios.innerHTML = `<source id="song" src="resources/3.mp3"></source> `;
    imgaudio.src = `images/3.jpg`
    Audios.load();
});
document.getElementById("song4").addEventListener("click", ()=>{
    Audios.innerHTML = `<source id="song" src="resources/4.mp3"></source> `;
    imgaudio.src = `images/4.jpg`
    Audios.load();
});
document.getElementById("play").addEventListener("click", ()=>{
    Audios.play();
});
document.getElementById("pause").addEventListener("click", ()=>{
    Audios.pause();
});
document.getElementById("stop").addEventListener("click", ()=>{
    Audios.load();
    Audios.pause();
});
document.getElementById("mute").addEventListener("click",()=>{
    Audios.muted=!Audios.muted;
});
/* Audios.addEventListener("durationchange", (){
    document.getElementById("songTime").max = Audios.duration; 
}); */
window.addEventListener("load", ()=>{
    document.getElementById("songTime").max = Audios.duration; 
});
Audios.addEventListener("timeupdate", ()=>{
    document.getElementById("songTime").value =  Audios.currentTime/Audios.duration *100;
});
document.getElementById("songTime").addEventListener("input", ()=>{
    Audios.currentTime =  document.getElementById("songTime").value;
 });
 var low = document.getElementById("lower");
 var high = document.getElementById("higher");
 var slow = document.getElementById("slower");
 var fast = document.getElementById("faster");
 low.addEventListener("click",()=>{
    if(Audios.volume > .1)
   {
     Audios.volume-=.1;
   }
 });
 high.addEventListener("click",()=>{
    if(Audios.volume < 1)
   {
     Audios.volume+=.1;
   }
 });
 slow.addEventListener("click",()=>{
    if(Audios.playbackRate>0.10000000000000014)
    Audios.playbackRate-=.1;
 });
 fast.addEventListener("click",()=>{
    if(Audios.playbackRate<2)
    Audios.playbackRate+=.1;
 });

 Audios.addEventListener("timeupdate", ()=>{
    document.getElementById("speed").value =  Audios.playbackRate;
});
Audios.addEventListener("timeupdate", ()=>{
    document.getElementById("vol").value =  Audios.volume;
});
document.getElementById("speed").addEventListener("input",()=>{
    Audios.playbackRate = document.getElementById("speed").value;
});
document.getElementById("vol").addEventListener("input",()=>{
    Audios.volume = document.getElementById("vol").value;
})