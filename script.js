console.log("Let's start JavaScript");
let currentSong = new Audio();
const  playMusic=(track)=>{
    currentSong.src = "/songs/"+track;
    currentSong.play();

}

async function getSongs(){
    let sng = await fetch("http://127.0.0.1:5500/songs/");
    let response = await sng.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let song = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3"))
        {
            song.push(element.href.split("/songs/")[1]);
        }
        
    }
    return song;
}
async function main(){
    let songs = await getSongs();
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML+ `  <li>
        <img class="music invert" src="music.svg" alt="music">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}</div>
            <div>Arijit Singh</div>
        </div>
        <div class="ply">Play Now</div>
        <img src="plymusic.svg" alt="play now" class="playnow invert">
    </li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",()=>{
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
            e.querySelector(".playnow").src = "pause2.svg";
        })
        console.log(e.querySelector(".info").firstElementChild.innerHTML);        
    });


  
};
main();
