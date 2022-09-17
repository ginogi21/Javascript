let mySong = document.querySelector('#mySong');
let icon = document.querySelector('#icon');

icon.addEventListener("click",()=>{
  if(mySong.paused){
    mySong.play();
    icon.src = "./images/Png-Icons/pause.png";
  }else{
    mySong.pause();
    icon.src = "./images/Png-Icons/play.png"
  }
})