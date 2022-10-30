// BUTTONS IMG
btnTxt = document.getElementById('btntxt');
btnImg = document.getElementById('btnimg');
btnEncImg = document.getElementById('btnEncryptImage');
btnDecImg = document.getElementById('btnDecryptImage');

// DIVS
txtDiv = document.getElementsByClassName('main')[0];
imgDiv = document.getElementsByClassName('mainImage')[0];
encImgDiv = document.getElementById('encryptImageDiv');
decImgDiv = document.getElementById('decryptImageDiv');

// INPUTS
let imgLabel = document.getElementsByClassName('custom-file-upload')[0];
let imgInput = document.getElementById('encInputImage');
let imgUrlInput = document.getElementById('decInputImage');

// CONVERT BTNS
btnenc = document.getElementsByClassName('encimagebtn')[0];
btndec = document.getElementsByClassName('decimagebtn')[0];

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

btnEncImg.addEventListener('click', ()=>{
    btnEncImg.classList.add('focus');
    btnDecImg.classList.remove('focus');
    encImgDiv.classList.add('show');
    encImgDiv.classList.remove('hide');
    decImgDiv.classList.add('hide');
    decImgDiv.classList.remove('show');
});

btnDecImg.addEventListener('click', ()=>{
    btnDecImg.classList.add('focus');
    btnEncImg.classList.remove('focus');
    decImgDiv.classList.add('show');
    decImgDiv.classList.remove('hide');
    encImgDiv.classList.add('hide');
    encImgDiv.classList.remove('show');
});

imgInput.addEventListener('change', (e)=>{
  
  // showing file name 
  let filepath = e.target.value;
  let filename = filepath.slice(12, -1);
  if (filename != ""){
    imgLabel.innerText = filename;
  }

  // encoding image
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener('load', ()=>{
    hiddenInput.value = reader.result;
  });

});

btnenc.addEventListener('click', ()=>{

  cipherImage = '';
  let base = hiddenInput.value;
  for (char of base) {
    cipherImage += ciphers[char];
  }
  hiddenInput.value = cipherImage;

  swal({
    title: "Your Cipher is: ",
    text: `${hiddenInput.value}`,
    buttons: ["ok", "copy"]
  })
    .then((copy) => {
      if (copy) {
        copyText();
        swal("Your Password has been copied", {
          icon: "success",
        });
      }
    });

});

btndec.addEventListener('click', ()=>{

    let url = '';
    let imgUrl = imgUrlInput.value;
    let pieces = breakIntoPieces(imgUrl);
    for (ciphr of pieces){
      url += decipher[ciphr];
    }
    hiddenInput.value = url;

    swal({
      title: "Image Decoded!",
      text: `Download or view your image now!`,
      buttons: ["ok", "copy"]
    })
      .then((copy) => {
        if (copy) {
          var win = window.open();
          win.document.write('<iframe src="' + url + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
          win.document.write(`<a href="${url}" download> Download </a>`)
        }
      });

});