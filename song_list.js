//song list
let All_song = [
   {
    name: "On & On",
    path: "musics/Song 2.mp3",
    img: "images/cover 6.png",
    singer: "Matrix"
  },
   {
    img : 'images/stay.png',
    name : 'Stay',
    singer : 'The Kid LAROI, Justin Bieber',
   path : 'musics/stay.mp3'
},
{
  name: "Tere Vasate",
  path: "musics/Song 1.mp3",
  img: "images/cover 4.png",
  singer: "Varun Jain"
},
{
    img : 'images/fallingdown.jpg',
    name : 'Falling Down',
    singer : 'Wid Cards',
    path : 'musics/fallingdown.mp3'
},
{
  name: "Don't Need To Like Me",
  path: "musics/Song 5.mp3",
  img: "images/cover 7.png",
  singer: "Lisa Dup"
},
{
    img : 'images/faded.png',
    name : 'Faded',
    singer : 'Alan Walker',
    path : 'musics/Faded.mp3'
},
{
  name: "Make Me Move",
  path: "musics/Song 7.mp3",
  img: "images/cover 12.png",
  singer: "Marry merle"
},
{
    img : 'images/ratherbe.jpg',
    name : 'Rather Be',
    singer : 'Clean Bandit',
    path : 'musics/Rather Be.mp3'
},
{
  name: "Next To You",
  path: "musics/Song 8.mp3",
  img: "images/cover 5.png",
  singer: "Anna"
},
{
  name: "Music",
  path: "musics/Song 6.mp3",
  img: "images/cover 11.png",
  singer: "xyz"
},
{
  name: "Chaleya",
  path: "musics/Song 3.mp3",
  img: "images/cover 9.png",
  singer: "Arjit Singh"
},
{
  name: "paryuvaan",
  path: "musics/Song 4.mp3",
  img: "images/cover 13.png",
  singer: "telugu"
},
{
  name: "Mudal nee",
  path: "musics/Song 9.mp3",
  img: "images/cover 1.png",
  singer: "tamil"
},
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};



/*please follow all the rules so that you do not face any problem*/