// on enter pressed
const walkImage = document.getElementById("walk");
window.onkeyup = function(e){
    const currentLeft = parseInt(walkImage.style.left);
    const currentTop = parseInt(walkImage.style.top);
    if(e.key==="ArrowDown") {
        walkImage.style.top = currentTop + 10 + "px";
    }
    if(e.key==="ArrowRight") {
        walkImage.style.left = currentTop+ 10 + "px";
    }
    if(e.key==="ArrowUp") {
        walkImage.style.top = currentTop - 10 + "px";
    }

    if(e.key==="ArrowLeft") {
            walkImage.style.left = currentTop - 10 + "px";
        }   
}
