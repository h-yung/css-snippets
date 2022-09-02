// optional hover/click effects
const descUnits = document.querySelectorAll('[data-id="snip-venn-diag"] .container__desc div')

descUnits.forEach(elem => elem.classList.add('hide'))

const circles = document.querySelectorAll('[data-id="snip-venn-diag"] .circle')

circles.forEach(elem => elem.addEventListener('click', e => revealDesc(e)))
circles.forEach(elem => elem.addEventListener('mouseover', e => revealDesc(e)))

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


