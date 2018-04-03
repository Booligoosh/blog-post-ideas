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
    IDEA_ELEM.querySelector('.see-details').removeAttribute('href');
    
    //IDEA_ELEM.style.transform = 'rotateY(180deg) scaleX(-1)';
    IDEA_ELEM.querySelector('.front').style.top = '-100%';
    IDEA_ELEM.querySelector('.front').style.opacity = 0;
    IDEA_ELEM.querySelector('.front').style.pointerEvents = 'none';
    IDEA_ELEM.querySelector('.back').style.top = '0';
    IDEA_ELEM.querySelector('.back').style.opacity = 1;
    IDEA_ELEM.querySelector('.back').style.pointerEvents = 'unset';
    
    const TOP = IDEA_ELEM.style.top == '' ? '0px' : IDEA_ELEM.style.top;
    IDEA_ELEM.style.top = `calc(${TOP} - 4rem)`;
    IDEA_ELEM.classList.add('open');
}