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
    imgUrlInput.value = "";
    imgInput.value = "";
    imgLabel.innerText = "Upload Image";
    btnEncImg.classList.add('focus');
    btnDecImg.classList.remove('focus');
    encImgDiv.classList.add('show');
    encImgDiv.classList.remove('hide');
    decImgDiv.classList.add('hide');
    decImgDiv.classList.remove('show');
});
 
btnImg.addEventListener('click', ()=>{
    btnImg.classList.add('selected');
    btnTxt.classList.remove('selected');
    txtDiv.classList.add('hide');
    txtDiv.classList.remove('show');
    imgDiv.classList.add('show');
    imgDiv.classList.remove('hide');
    decInput.value = "";
    encInput.value = "";
    encryptDiv.classList.remove('hide');
    decryptDiv.classList.add('hide');
    btnEncrypt.classList.add('focus');
    btnDecrypt.classList.remove('focus');
});

btnEncImg.addEventListener('click', ()=>{
    btnEncImg.classList.add('focus');
    btnDecImg.classList.remove('focus');
    encImgDiv.classList.add('show');
    encImgDiv.classList.remove('hide');
    decImgDiv.classList.add('hide');
    decImgDiv.classList.remove('show');
    imgUrlInput.value = "";
});

btnDecImg.addEventListener('click', ()=>{
    btnDecImg.classList.add('focus');
    btnEncImg.classList.remove('focus');
    decImgDiv.classList.add('show');
    decImgDiv.classList.remove('hide');
    encImgDiv.classList.add('hide');
    encImgDiv.classList.remove('show');
    imgInput.value = "";
    imgLabel.innerText = "Upload Image";
});

imgInput.addEventListener('change', (e)=>{
  
  // showing file name 
  let filepath = e.target.value;
  let filename = filepath.slice(12, filepath.length);
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
        swal("Your Cipher has been copied", {
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
      buttons: ["cancel", "GO"]
    })
      .then((go) => {
        if (go) {
          var win = window.open();
          win.document.write(`<img src="${url}" style="width:95vw; height:80vh; object-fit: contain; background: black; overflow: hidden;"></img>`)
          win.document.write(`<a href="${url}" download style="border: 1px solid black; padding: 15px; text-decoration: none; color: black; background: tan; margin-top: 15px; position: absolute; bottom: 50px; left: 600px; border-radius: 8px; "> Download </a>`)
        }
      });

});