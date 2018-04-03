/* Based on https://stackoverflow.com/questions/7745741/auto-expanding-textarea 

const TEXTAREAS = document.getElementsByTagName('textarea');
for (let i = 0; i < TEXTAREAS.length; i++) {
    TEXTAREAS[i].onkeypress = function () {
        TEXTAREAS[i].style.height = ""; // Reset the height
        TEXTAREAS[i].style.height = Math.min(TEXTAREAS[i].scrollHeight,16*5*1.5*3) + "px";
    };
}
*/