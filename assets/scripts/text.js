// DIVS
let encryptDiv = document.getElementById("encryptDiv");
let decryptDiv = document.getElementById("decryptDiv");

// BUTTONS
let btnEncrypt = document.getElementById("btnEncrypt");
let btnDecrypt = document.getElementById("btnDecrypt");

// INPUTS
let hiddenInput = document.getElementById('hiddenInput');
let encInput = document.getElementById('encInput');
let decInput = document.getElementById('decInput');


let showEncryptDiv = ()=>{
    encryptDiv.classList.remove('hide');
    decryptDiv.classList.add('hide');
    btnEncrypt.classList.add('focus');
    btnDecrypt.classList.remove('focus');
    decInput.value = "";
    }

let showDecryptDiv = ()=>{
    encryptDiv.classList.add('hide');
    decryptDiv.classList.remove('hide');
    btnEncrypt.classList.remove('focus');
    btnDecrypt.classList.add('focus');
    encInput.value = "";
}


let breakIntoPieces = (string)=> {
    let array = [];
    for (let i=0; i<=string.length-1; i++){
      array.push(string[i]+string[i+1]+string[i+2]+string[i+3]);
      i += 3;
    }
    return array;
  }

  let copyText = () => {
    hiddenInput.select();
    document.execCommand("copy");
  }

    
  let convert = (flag)=>{

    let cipherText = '';

    if (flag == 0){

      let pText = encInput.value;
    for (char of pText) {
      if (typeof ciphers[char] != 'undefined'){
        cipherText += ciphers[char];
      }else{
        cipherText += '????';
      }
    }
    hiddenInput.value = cipherText;

      swal({
        title: "Your Cipher is: ",
        text: `${cipherText}`,
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
            
    } else{

      let plaintext = '';
      let cText = decInput.value;

      let pieces = breakIntoPieces(cText);
    for (ciphr of pieces){
      plaintext += decipher[ciphr];
    }
    hiddenInput.value = plaintext;

      swal({
        title: "Your Text is: ",
        text: `${plaintext}`,
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
            
    }

}