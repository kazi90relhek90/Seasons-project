// Vivald JS Example

  document.getElementById("summerBtn").addEventListener("click", setSummer)
  document.getElementById("autumnBtn").addEventListener("click", setAutumn)
  document.getElementById("winterBtn").addEventListener("click", setWinter)
  document.getElementById("springBtn").addEventListener("click", setSpring)

// Event Functions

function setSummer() {
  setSeason('summer',"#1BA848" )
}

function setAutumn() {
  setSeason('autumn',"#FE6732" )
}

function setWinter() {
  setSeason('winter',"#1C64B9")
}

function setSpring() {
  setSeason('spring',"#0E94D1" )
}

function setSeason(season, color) {
    // - change concerto text
    document.getElementById('season-text').innerHTML = season;
    
    // - change main image
    document.getElementById('main-img').src = "images/" + season + ".jpg";


    // - change page background color
    document.body.style.backgroundColor = color;
        
    //remove class from buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    // - change audio source
    document.getElementById('song').src = "songs/vivaldi-" + season + ".mp3";


    // - add active class to clicked button
    document.getElementById(season + "Btn").classList.add('activeBtn');
}