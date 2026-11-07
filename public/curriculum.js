const curriculum = document.querySelector('.curriculum');

function fit() {
    curriculum.style.zoom = Math.min(1, document.body.clientWidth / curriculum.offsetWidth);
}

function reset() {
    curriculum.style.zoom = '';
}

addEventListener('afterprint', fit);
addEventListener('beforeprint', reset);
addEventListener('resize', fit);

fit();
