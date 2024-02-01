// Lib JS
loadSong = (i) => {
    let list = '';
    for (let i = 0; i < songs.length; i++) {
        list += '<div class="songs" id="songs" onclick="playSelectedSong(' + i + ')">'
        list += `<div class="img-container">`
        list += `<div class="song-image" id="song-image"><img src="${songs[i].image}"></div>`;
        list += `<div class="play-btn"><i class="bi bi-play-fill"></i></div>`;
        list += `</div>`
        list += '<div class="song-info-container">';
        list += `<div class="song-title" id="song-title">${songs[i].name}</div>`;
        list += `<div class="song-artist" id="song-artist">${songs[i].artist}</div>`;
        list += '</div>';
        list += `<span class="song-duration"></span>`;
        list += '</div>';
    }
    document.getElementById('song-list').innerHTML = list;

    // Lấy thời lượng bài hát và gán vào thẻ span
    const songDurations = document.querySelectorAll('.song-duration');

    for (let j = 0; j < songs.length; j++) {
        const audioElement = new Audio(songs[j].path);
        
        audioElement.addEventListener('loadedmetadata', () => {
            const duration = audioElement.duration;
            songDurations[j].innerHTML = formatTime(duration);
        });
    }
};

// Play selected song
playSelectedSong = (index) => {
    setSong(index);
    playMusic();
};

function formatSTT(stt){
    var stt;
    if (stt < 10){
        stt = `0${stt}`;
    }
    // Chuyển thời gian đã qua xử lí về dạng phút:giây
    return `${stt}`;
}

// Search Bar
var searchInput = document.getElementById("search");
searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchSongs(this.value);
  }
});


function searchSongs(keyword) {
  var stt = 1;
  var list = '';
  var found = 0;
  for (var i = 0; i < songs.length; i++) {
    if (songs[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      list += `<div class="playlist-container" onclick="playSelectedSong(${i})">`
      list += `<div class="stt" id="stt">${formatSTT(stt)}</div>`
      list += `<div class="img-list" id="img-list">`
      list += `<img src="${songs[i].image}">`
      list += `</div>`
      list += `<div class="container-list">`
      list += `<div class="songname-list">${songs[i].name}</div>`
      list += `<div class="songartist-list">${songs[i].artist}</div>`
      list += `</div>`
      list += `</div>`
      stt++;
      found++;
    }
  }
  if (found === 0) {
    list += `<div class="playlist-container">`
    list += `<div class="not-found"><p>Không tìm thấy bài hát</p></div></div>`
  }
  document.getElementById('songitem').innerHTML = list;
}

recommend = () => {
    let list = '';
    var stt = 1;
    
    for (i=0;i<6;i++){
        var a = Math.floor(Math.random() * songs.length);
        if (!recommendedSongs.includes(a)) {
            recommendedSongs.push(a);
            list += `<div class="playlist-container" onclick="playSelectedSong(${a})">`
            list += `<div class="stt" id="stt">${formatSTT(stt)}</div>`
            list += `<div class="img-list" id="img-list">`
            list += `<img src="${songs[a].image}">`
            list += `</div>`
            list += `<div class="container-list">`
            list += `<div class="songname-list">${songs[a].name}</div>`
            list += `<div class="songartist-list">${songs[a].artist}</div>`
            list += `</div>`
            list += `</div>`
            stt++;
            }
            else {
                i--;
            }
        }
    document.getElementById('songitem').innerHTML = list;
    }
window.onload = recommend();

