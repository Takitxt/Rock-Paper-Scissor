let x = '';
let c = '';
let res = '';
let choice = []





let score = JSON.parse(localStorage.getItem('score')) || {Wins: 0, losses: 0, Tie: 0};

function computerclick(){
    let r = Math.floor(Math.random() * 3) + 1;
    if (r === 1) {
        x = 'Rock';
    } else if (r === 2) {
        x = 'Paper';
    } else if (r === 3) {
        x = 'Scissor';
    }
    
    
    computerimg(x);
    result();
    ress();
    final();
    
    
}
function userclick(button){
    if (button === 'Rock') {
        c = 'Rock';
        
    } else if (button === 'Paper') {
        c = 'Paper';
    } else if (button === 'Scissor') {
        c = 'Scissor';
    }
    
    userimg(c);
    computerclick();

}
function userimg(click){
    
    
    let g = document.getElementById('image-user');
    if (click === 'Rock'){
        g.src='./img-1.png';
    } else if(click==='Paper'){

        g.src='./img-2.png';
    } else if(click==='Scissor'){
        g.src='./img-3.png';
    }

}
function computerimg(click){
    
    
    let g = document.getElementById('image-tag');
    if (click === 'Rock'){
        g.src='./img-1.png';
    } else if(click==='Paper'){

        g.src='./img-2.png';
    } else if(click==='Scissor'){
        g.src='./img-3.png';
    }

}



function result() {
    if (x === c) {
        res = 'You Tied';
    } else if (
        (x === 'Rock' && c === 'Scissor') ||
        (x === 'Paper' && c === 'Rock') ||
        (x === 'Scissor' && c === 'Paper')
    ) {
        res = 'You lose';
    } else {
        res = 'You Win';
    }
}

function ress() {

    if (res === 'You lose') {
        score.losses++;
    } else if (res === 'You Win') {
        score.Wins++;
    } else if (res === 'You Tied') {
        score.Tie++;
    }
   
    
    document.querySelector('.nk').innerHTML =res;
    document.querySelector('.rk').innerHTML ='You chose '+ c;
    document.querySelector('.comp-result2').innerHTML= 'Computer chose '+ x;

    
    localStorage.setItem('score', JSON.stringify(score));

    
    document.querySelector('.para').innerHTML = `${score.Wins}`;
    document.querySelector('.para-2').innerHTML=`${score.losses}`;
}

function resetscore(){
    score.Wins = 0;
    score.losses = 0;
    score.Tie = 0;
    console.log("Your score is reset: " + JSON.stringify(score));

   
    localStorage.removeItem('score');

    
    document.querySelector('.nk').innerHTML = '';
    document.querySelector('.rk').innerHTML = '';
    document.querySelector('.comp-result2').innerHTML = '';
    document.querySelector('.para').innerHTML = '0';
    document.querySelector('.para-2').innerHTML = '0';
}


function final(){
    if (document.querySelector('.para').innerHTML==='3') {
        showPopup('You Win!');
        resetscore();   
    } else if(document.querySelector('.para-2').innerHTML==='3'){
        showPopup('You Lose!');
        resetscore();

    }
}





function showPopup(message) {
    
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    
    popupMessage.innerHTML = message;
    popup.style.display = 'flex';
    


    
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}
