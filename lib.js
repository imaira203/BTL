let currentSong = 0;

const music = document.querySelector('#audio');
const songName = document.querySelector('#song-name');
const songImg = document.querySelector('#song-img');
const artist = document.querySelector('#artist');
const timeStart = document.querySelector('#timeStart');
const timeEnd = document.querySelector('#timeEnd');
const back = document.querySelector('#back');
const play = document.querySelector('#Play');
const next = document.querySelector('#next');
const seekbar = document.querySelector('#seek');
const volume = document.querySelector('#volume')
const volIcon = document.querySelector('#volume-icon')

// Đổi trạng thái của nút play khi được click
play.addEventListener('click', () => {
    // Thay đổi dừng/phát khi được click
    if (play.className.includes('pause')){
        music.pause();
    }
    else {
        music.play();
    }
    // Thay đổi ảnh
    play.classList.toggle('bi-play-fill');
    play.classList.toggle('bi-pause-fill');
});

// Nút next/back
next.addEventListener('click', () =>{
    if (currentSong >= songs.length-1){
        currentSong = 0;
    }
    else {
        currentSong = currentSong+1;
    }
    setSong(currentSong);
    playMusic();
});
back.addEventListener('click', () =>{
    if (currentSong <= 0){
        currentSong = songs.length-1;
    }
    else {
        currentSong = currentSong-1;
    }
    setSong(currentSong);
    playMusic();
});

// Hàm để chạy nhạc khi nhấn nút next/back/điều chỉnh seekbar
playMusic=() => {
    if (play.className.includes('bi-play-fill')){
        play.classList.add('bi-pause-fill');
        play.classList.remove('bi-play-fill');
    }
    music.play();
    // Thay đổi ảnh
    play.classList.add('bi-pause-fill');
    play.classList.remove('bi-play-fill');
}


// cài đặt bài hát
const setSong=(i)=>{
    // Reset seekbar về 0
    seekbar.value = 0;

    let song = songs[i];
    // Gắn bài hát theo biến i
    currentSong = i;
    // Địa chỉ bài hát
    music.src = song.path;
    // Lấy tên bài hát
    songName.innerHTML = song.name;
    // Lấy tên ca sĩ
    artist.innerHTML = song.artist;
    // Lấy ảnh bài hát
    songImg.style.backgroundImage = `url('${song.image}')`;
    // Lấy thời gian bài nhạc
    timeStart.innerHTML = '00:00';
    // Thời gian tối đa của seekbar và lấy thời gian bài nhạc
    setTimeout(()=>{
        seekbar.max = music.duration;
        timeEnd.innerHTML = formatTime(music.duration);
    }, 300);
}

setSong(0);

// Hàm format time về dạng 00:00
const formatTime=(time) => {
    let min = Math.floor(time/60);
    if (min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time%60);
    if (sec < 10){
        sec = `0${sec}`;
    }
    // Chuyển thời gian đã qua xử lí về dạng phút:giây
    return `${min}:${sec}`;
}

// Chức năng của seekbar
setInterval(()=>{
    seekbar.value = music.currentTime;
    timeStart.innerHTML = formatTime(music.currentTime);
    if (Math.floor(music.currentTime)===Math.floor(seekbar.max)){
        next.click();
    }
}, 500);

seekbar.addEventListener('change',() => {
    music.currentTime =seekbar.value;
    playMusic();
});

// Điều chỉnh volume
changeVol=() => {
        music.volume = volume.value/100;
};

// Thay đổi trạng thái của volume
volIcon.addEventListener('click', () => {
    // Thay đổi âm lượng khi click
    if (volIcon.className.includes('bi-volume-mute')){
        music.volume = 1;
    }
    else {
        music.volume = 0;
    }
    volIcon.classList.toggle('bi-volume-down-fill');
    volIcon.classList.toggle('bi-volume-mute');
});

setInterval(()=>{
    volume.value = music.volume*100;
    if (music.volume <= 0){
        volIcon.classList.add('bi-volume-mute');
        volIcon.classList.remove('bi-volume-down-fill');
        
    }
    else {
        volIcon.classList.remove('bi-volume-mute');
        volIcon.classList.add('bi-volume-down-fill');
    }
}, 100);