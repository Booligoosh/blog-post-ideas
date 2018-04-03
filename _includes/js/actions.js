function pass(IDEA_ID) {
    const IDEA_ELEM = document.getElementById(IDEA_ID);
    IDEA_ELEM.style.left = '100vw';
    IDEA_ELEM.style.opacity = '0';
    IDEA_ELEM.nextElementSibling.style.opacity = '1';
    
    const IDEA_ELEMS = IDEA_ELEM.parentElement.children;
    for(let i = 0; i < IDEA_ELEMS.length; i++) {
        if(IDEA_ELEMS[i] !== IDEA_ELEM) {
            IDEA_ELEMS[i].style.top = (Number(IDEA_ELEMS[i].style.top.replace(/vh/,'')) - 100) + 'vh';
        }
    }
}

function seeDetails(IDEA_ID) {
    const IDEA_ELEM = document.getElementById(IDEA_ID);
    flipCard(IDEA_ELEM);
}

function flipCard(CARD) {
    CARD.style.transform = 'rotateY(180deg) scaleX(-1)';
    setTimeout(function(){
        CARD.querySelector('.front').style.display = 'none';
        CARD.querySelector('.back').style.display = 'flex';
    },500);
}