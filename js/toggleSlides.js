
// bind showSlide function to each picture title
function bindShowSlide() {
    if(!document.getElementById) return true;
    var slider = document.getElementById("slide-title");
    if(!slider) return true;
    var links = slider.getElementsByTagName("a");
    if(links.length > 0){
        for(var i = 0; i<links.length;i++){
            links[i].onclick = function () {
                showSlide(this);
                return false;
            };
        }
    }

}

// display the picture when click the corresponding title
function showSlide(pic) {
    var src = pic.getAttribute("href");
    var photo = document.getElementById("photo");
    var img = photo.getElementsByTagName("img")[0];
    img.setAttribute("src", src);
}

// add bindShowSlide function to window.onload
addOnloadEvent(bindShowSlide);