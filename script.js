console.log("Let's start JavaScript");
async function getSongs(){
    let sng = await fetch("http://127.0.0.1:5500/songs/");
    let response = await sng.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let song = [];
    // for (let index = 0; index < as.length; index++) {
    //     const element = as[index];
    //     if(element.href.endsWith(".mp3"));
    //     {
    //         song.push(element.href);
    //     }
        
    // }
    console.log(as);
}
async function main(){
    let song = await getSongs();
    console.log(song);
    // var audio = new Audio(song[3]);
    // audio.play();
};
main();
