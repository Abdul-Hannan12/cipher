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
          // copyText();
          // swal("Your Password has been copied", {
          //   icon: "success",
          // });
          var win = window.open();
          win.document.write('<iframe src="' + url + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
          win.document.write(`<a href="${url}" download> Download </a>`)
        }
      });

});


/*
  var p;
var canvas = document.createElement("canvas");
var img1=document.createElement("img");

  function getBase64Image(){     
    p=document.getElementById("fileUpload").value;
    alert(p)
    img1.setAttribute('src', p);
    canvas.width = img1.width;
    canvas.height = img1.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img1, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    var item_image = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    alert(item_image);
    alert("from getbase64 function"+dataURL );
    return dataURL;
}

let convert = ()=>{
    let url = getBase64Image();
    let h = document.getElementById('ttt');
    h.innerText = url;

}
*/


/*
let img;
  document.getElementById("fileUpload").addEventListener('change', (e)=>{
    img = e.target.files[0];
    // let reader = new FileReader();
    // let url = reader.readAsDataURL(img[0])
    // console.log(url)
    var reader = new FileReader();
  
    var imgtag = document.getElementById("myimage");
    imgtag.title = img.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    let myurl = reader.readAsDataURL(img);
    // console.log(myurl)  
  })


  var p;
var canvas = document.createElement("canvas");
var img1=document.createElement("img");

  function getBase64Image(image){     
      let base = btoa(image);
      return base;
}

let getImagefromBase64 = (base64)=>{
  let image = atob(base64);
  return image;
}

let convert = ()=>{
    let url = getBase64Image(img);
    let h = document.getElementById('ttt');
    h.innerText = url;
    let ccc = prompt("enter base");
    let imgg = getImagefromBase64(ccc);
    console.log('image: ', imgg, ccc);
}
*/