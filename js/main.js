document.getElementById("spanish").addEventListener("click", function () {
  tralatelang("es");
});
document.getElementById("english").addEventListener("click", function () {
  tralatelang("en");
});
function tralatelang(lang) {
  if (lang == "en")
    document.getElementById("main-content").innerHTML =
      "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long ago one of those gentlemen that keep a lance in the lance - rack, an old buckler, a lean hack, and a greyhound for coursing.";
  if (lang == "es")
    document.getElementById("main-content").innerHTML =
      "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no hace mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";
}
