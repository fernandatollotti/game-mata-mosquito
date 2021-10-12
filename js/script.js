var width = 0;
var height = 0;
var life = 1;
var time = 60;
var time_mosquito = 1500;
var number_result = 0;
var url = window.location.search;
url = url.replace('?', '');

if(url === 'normal') {
    //1500
    time_mosquito = 1500;
} else if (url === 'dificil') {
    //1000
    time_mosquito = 1000;
} else if (url === 'hard') {
    //750
    time_mosquito = 750;
}

function size_game() {
    width = window.innerWidth;
    height = window.innerHeight;
}

size_game();

var chronometer = setInterval(function (){
    if (time < 0) {
        clearInterval(chronometer);
        clearInterval(createMosquito);
        window.location.href = 'victory.html';
    } else {
        document.getElementById('time_chronometer').innerHTML = time;
    }

    time-=1;
}, 1000);

function positionRandom() {
    //Remove the previous mosquito
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (life > 3) {
            window.location.href = 'game-over.html';
        } else {
            document.getElementById('l' + life).src = 'img/empty_heart.png';
            life++;
        }
    }

    var positionX = Math.floor(Math.random() * width) - 80;
    var positionY = Math.floor(Math.random() * height) - 80;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    //Create element HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = sizeRandom() + ' ' + directionRandom();
    mosquito.style.top = positionY + 'px';
    mosquito.style.left = positionX + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
        number_result++;
        document.getElementById('result').innerHTML = number_result;
        console.log(number_result)
    }

    document.body.appendChild(mosquito);
}

positionRandom();

function sizeRandom() {
    var classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function directionRandom() {
    var classe = Math.floor(Math.random() * 2);

    switch(classe) {
        case 0: 
            return 'left'
        case 1:
            return 'right'
    }
}