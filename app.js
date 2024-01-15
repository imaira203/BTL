const music = new Audio('vande.mp3');

const songs = [
    {
        id:'1',
        songName:'Unity <div class="subtile">Marshmello</div>',
        poster:"src/music7.jpeg",
    },
    {
        id:'2',
        songName:'Alone <div class="subtile">Marshmello</div>',
        poster:"src/music1.jpeg",
        
    },
    {
      id:'3',
      songName: 'Esta Vida <div class="subtile">Marshmello</div>',
      poster: "src/music2.jpeg"
    },
    {
        id:'4',
        songName: 'Fly  <div class="subtile">Marshmello</div>',
        poster: "src/music3.jpeg"
    },
      
    {
        id:'5',
        songName: 'Friensd <div class="subtile">Marshmello</div>',
        poster: "src/music4.jpeg"
    },
    {
        id:'6',
        songName: 'Summe <div class="subtile">Marshmello</div>',
        poster: "src/music5.jpeg"
    },
    {
        id:'7',
        songName: 'Woles  <div class="subtile">Marshmello</div>',
        poster: "src/music6.jpeg"
    },
     

]

Array.from(document.getElementsByClassName("songitem")).forEach((element, i)=>{
     element.getElementsByTagName('img')[0].src = songs[i].poster ;
     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName ;
})

let Play = document.getElementById('Play');

Play.addEventListener('click',()=>{
     if(music.paused){
        music.play();
        Play.classList.remove('bi-play-fill');
        Play.classList.add('bi-pause-fill');
     }else if (music.played){
        music.paused();
        Play.classList.add('bi-play-fill');
        Play.classList.remove('bi-pause-fill');
     }
})
