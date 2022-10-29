// BUTTONS
btnTxt = document.getElementById('btntxt');
btnImg = document.getElementById('btnimg');

// DIVS
txtDiv = document.getElementsByClassName('main')[0];
imgDiv = document.getElementsByClassName('mainImage')[0];

btnTxt.addEventListener('click', ()=>{
    btnTxt.classList.add('selected');
    btnImg.classList.remove('selected');
    txtDiv.classList.add('show');
    txtDiv.classList.remove('hide');
    imgDiv.classList.add('hide');
    imgDiv.classList.remove('show');
});

btnImg.addEventListener('click', ()=>{
    btnImg.classList.add('selected');
    btnTxt.classList.remove('selected');
    txtDiv.classList.add('hide');
    txtDiv.classList.remove('show');
    imgDiv.classList.add('show');
    imgDiv.classList.remove('hide');
});