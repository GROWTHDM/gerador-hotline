var btn = document.getElementById('btn');


let countdown = 15;
let countdownTimer = null;

const atualizarBotao = () => {
    countdown --

    btn.innerText = 'Gerando Sinal';
    if (countdown === 0) {
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);

    btn.disabled = false;
    btn.innerText = 'GERE SEU SINAL';
    countdown = 15;
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    btn.disabled = true;

    countdownTimer = setInterval(atualizarBotao, 1000);
})


const sliderRunning = document.querySelector('.slider-img');

btn.addEventListener('click', () => {
    
    if (sliderRunning.style.animationPlayState === 'running') {
        sliderRunning.style.animationPlayState = 'paused';

    } else {
        sliderRunning.style.animationPlayState = 'running';
        setTimeout(() => {
            sliderRunning.style.animationPlayState = 'paused';
        }, Math.floor(Math.random() * 7000))
    }

})


const sliderRun = document.querySelector('.slider-Img');

btn.addEventListener('click', () => {
    
    if (sliderRun.style.animationPlayState === 'running') {
        sliderRun.style.animationPlayState = 'paused';

    } else {
        sliderRun.style.animationPlayState = 'running';
        setTimeout(() => {
            sliderRun.style.animationPlayState = 'paused';

        }, Math.floor(Math.random() * 7000))


    }

})



const targetDiv = document.getElementById("slider-Img");
const btnTurbo = document.getElementById("btnTurbo");
btnTurbo.onclick = function () {
    if (targetDiv.style.visibility === "hidden") {
        targetDiv.style.visibility = "visible";
    } else {
        targetDiv.style.visibility = "hidden";
    }
};

