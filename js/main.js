// navigation
const chooseNav = document.querySelector('#chooseNav')
chooseNav.addEventListener('submit', e=> e.preventDefault())
const navButton = document.querySelector('#chooseNav button')
navButton.addEventListener('click', goToSnippet)

function goToSnippet(){
    const snippetMenu = document.querySelector('#snippets')
    const snippet = document.querySelector(`#${snippetMenu.value}`)
    console.log(snippetMenu.value)

    snippet.scrollIntoView({
        behavior: 'smooth', // smooth scroll
        block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
    })
}


// snip-venn-diag optional hover/click effects
const descUnits = document.querySelectorAll('[data-id="snip-venn-diag"] .container__desc div')

descUnits.forEach(elem => elem.classList.add('hide'))

const circles = document.querySelectorAll('[data-id="snip-venn-diag"] .circle')

circles.forEach(elem => elem.addEventListener('click', e => revealDesc(e)))
circles.forEach(elem => elem.addEventListener('mouseover', e => revealDesc(e)))
circles.forEach(elem => elem.addEventListener('focus', e => revealDesc(e)))

function revealDesc(e){
    if (e.target.classList.contains('prim')) {
        document.querySelectorAll('.prim').forEach(elem => elem.classList.remove('hide'));
        document.querySelectorAll('.desc:not(.prim)').forEach(elem => elem.classList.add('hide'));
    }else if (e.target.classList.contains('sec')) {
        document.querySelectorAll('.sec').forEach(elem => elem.classList.remove('hide'));
        document.querySelectorAll('.desc:not(.sec)').forEach(elem => elem.classList.add('hide'));
    }else if (e.target.classList.contains('tert')) {
        document.querySelectorAll('.tert').forEach(elem => elem.classList.remove('hide'));
        document.querySelectorAll('.desc:not(.tert)').forEach(elem => elem.classList.add('hide'));
    }
}


//snip-pie-growth optional click effects
const callout = document.querySelector('[data-id="snip-pie-growth"] .callout')
const piePausables = document.querySelectorAll('[data-id="snip-pie-growth"] .pausable')
callout.addEventListener('mouseover', pauseAnim)
callout.addEventListener('mouseout', restartAnim)

function pauseAnim(){
    piePausables.forEach(elem => elem.style.animationPlayState = 'paused')
}
function restartAnim(){
    piePausables.forEach(elem => elem.style.animationPlayState = 'running')
}
