function flipCard(CARD,TO_BACK) {
    CARD.style.transform = `rotateY(${TO_BACK ? 180 : 0}deg) scaleX(${TO_BACK ? -1 : 1})`;
    setTimeout(function(){
        CARD.querySelector('.front').style.display = TO_BACK ? 'none' : 'flex';
        CARD.querySelector('.back').style.display = TO_BACK ? 'flex' : 'none';
    },500);
}

function pass(ID) {
    const IDEA_ELEM = document.getElementById(ID);
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

function seeDetails(ID) {
    flipCard(document.getElementById(ID), true);
}

function addNext(ID) {
    document.querySelector(`#${ID} .back h2`).innerHTML = document.querySelector(`#${ID} .front textarea`).value;
    flipCard(document.getElementById(ID), true);
}

function addBack(ID) {
    flipCard(document.getElementById(ID), false);
}