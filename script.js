const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo');
let isJunping = false;
let position = 0;

function handleKeyup(event) {
    if(event.keyCode === 32) {
        if(!isJunping){
        pulo();
        }
    }
}

function pulo(){
    isJunping = false;

    let upinterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upinterval);
        //descendo
    let donwinterval = setInterval(() => {
        if(position <= 0){
            clearInterval(donwInterval);
            isJunping = true;

        }else{
            position -=20;
            dino.style.bottom = position + 'px';
        }
    },20);      
        }else{   
            //Subindo      
        }
            position += 20;
            dino.style.bottom = position + 'px';
    },20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randoTimer = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    fundo.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            fundo.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1  class="Game-Over"> Fim de jogo</h1>';
        }else {
          
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randoTimer);
}

createCactus();

document.addEventListener('keyup', handleKeyup);
    