var playList = [
 {
  author: "LED ZEPPELIN",
  song:"STAIRWAY TO HEAVEN"
 },
 {
  author: "QUEEN",
  song:"BOHEMIAN RHAPSODY"
 },
 {
  author: "LYNYRD SKYNYRD",
  song:"FREE BIRD"
 },
 {
  author: "DEEP PURPLE",
  song:"SMOKE ON THE WATER"
 },
 {
  author: "JIMI HENDRIX",
  song:"ALL ALONG THE WATCHTOWER"
 },
 {
  author: "AC/DC",
  song:"BACK IN BLACK"
 },
 {
  author: "QUEEN",
  song:"WE WILL ROCK YOU"
 },
 {
  author: "METALLICA",
  song:"ENTER SANDMAN"
 }
];


var list = document.getElementById("list");
  for(var i = 0; i < playList.length; i++)
  {
    var listItem = document.createElement("li");
      listItem.innerText = playList[i].author + " - " + playList[i].song;
      document.body.style.textAlign = "center";
      listItem.classList.add('num');
      listItem.style.cssText = "margin-top: 20px; \
      color: red; \
      ";
      // var songName = playList[i].song;
      // songName.style.textTransform = "lowercase";
      // не працює ???
        list.appendChild(listItem);
  }