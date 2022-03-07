let hour = 0;
let min = 0;
let isHalf = false;

// initiates hour, min, isHalf to proper values
function load() {
    updateTime();
    setInterval(update, 1000/30);
}

// updates hour, min, isHalf, and uses them for imageSelector
function update() {
    updateTime();
    imageSelector();
}

// Selects an image based on hour, min, isHalf
//   There are 48 images total, switching betwen images every 30 mins
function imageSelector() {
    if (min >= 30) isHalf = true;
    let imgNum = (hour * 2) + (isHalf ? 1:0);
    let imgSrc = "images/" + imgNum + ".png";

    var image = document.getElementById('background');
    image.src = imgSrc;
}

// update time variables
function updateTime() {
    const date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    isHalf = false;
    if (min >= 30) isHalf = true;
}

// Wallpaper Engine properties will go here if needed
/*
window.wallpaperPropertyListener = { 
    applyUserProperties: function(properties) { ...
*/