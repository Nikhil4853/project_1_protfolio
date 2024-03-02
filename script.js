const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
var root = document.querySelector(':root');
const video = document.getElementById('video');
const hamburger = document.getElementById('hamburger_icon');
let ham_bool = true;
hamburger.addEventListener("click", () => {
    if (ham_bool) {
        console.log("open")
        document.getElementById('resNav').style.width = "90%";
        document.getElementById('resNav').style.left = "5%";
        document.getElementById('resNav').style.position = "fixd";
        ham_bool = false;
    } else {
        document.getElementById('resNav').style.left = "-100%";
        ham_bool = true;
  }
})
document.getElementById('cross').addEventListener("click", () => {
    document.getElementById('resNav').style.left = "-100%";
    ham_bool = true;
})
moon.addEventListener("click", () => {
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    root.style.setProperty('--primary_back_ground_color','black')
    root.style.setProperty('--font_color', '#fff')
    video.classList.add("hidden");
})
sun.addEventListener("click", () => {
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    root.style.setProperty('--primary_back_ground_color', '#fff')
    root.style.setProperty('--font_color', 'black')
    video.classList.remove("hidden");
    
})
