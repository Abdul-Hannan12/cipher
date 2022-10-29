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
      array.push(string[i]+string[i+1]+string[i+2]+string[i+3]+string[i+4]+string[i+5]+string[i+6]+string[i+7]);
      i += 7;
    }
    return array;
  }

  let copyText = () => {
    hiddenInput.select();
    document.execCommand("copy");
  }
  
  
  const ciphers = {

    '0': 'mYInXS!w',
    '1': 'XswCERsD',
    '2': 'hvttsgNx',
    '3': 'mRNix&fI',
    '4': 'KMcnCpVb',
    '5': 'RaCCdmip',
    '6': 'xaOnNL%K',
    '7': 's$oze%VN',
    '8': 'KVcCkQxz',
    '9': '&WYFEvJZ',
    'A': 'sciXPf!@',
    'a': '#XVsZdvW',
    'B': 'giBLG@$j',
    'b': 'NpxFrpQl',
    'C': 'W!aU@mdf',
    'c': 'nlZjunRr',
    'D': 'UAPhFlcJ',
    'd': 'GWsyKBMr',
    'E': 'puXuxVIX',
    'e': 'AZWVw$FD',
    'F': 'lkXLsr%U',
    'f': 'OYlLsjHO',
    'G': 'jTLiJ&!v',
    'g': 'qnBsfE#C',
    'H': 'P&fjDLgI',
    'h': '%&ozYRur',
    'I': 'CJc$wpRL',
    'i': 'JxdIhSzr',
    'J': 'CEaSBUmP',
    'j': 'CtPrMgQb',
    'K': 'zEDBJBDz',
    'k': 'ZeMvIpGg',
    'L': 'WPKqT&kT',
    'l': 'v#DDJyVh',
    'M': 'fcgbYpsD',
    'm': '$T#OuQ&r',
    'N': 'Wgpo@yy@',
    'n': 'C@uVRGuW',
    'O': 'NbzqgSDm',
    'o': 'XNnu&OUm',
    'P': 'aHZRLUfB',
    'p': 'kk&ViKln',
    'Q': 'UhfVMRuO',
    'q': 'S$gTAGs$',
    'R': 'whqArOKy',
    'r': 'hvETrCyn',
    'S': 'W&VeQDEe',
    's': 'ayhLSZuH',
    'T': 'YoE%OqyB',
    't': 'ANMgiQkF',
    'U': 'bD@U&AHA',
    'u': 'xgFgwruf',
    'V': 'AYYdjKN$',
    'v': 'lgwWHNoE',
    'W': 'ODX%ljcw',
    'X': 'EZa@Ks#v',
    'x': 'Nch!hHps',
    'Y': 'xobm@Loi',
    'y': 'Dkvs&ohq',
    'Z': 'yHtYgaCO',
    'z': 'PzqIf#Uc',
    ' ': 'rGEOEQDA',
    '.': 'H#aBMUhr',
    ',': 'dHuWJ$YA',
    ':': 'pnogDgLy',
    ';': 'whSmQXwz',
    '"': 'Q%nPKLv$',
    "'": 'o@gO#!h#',
    '?': 'YL%CedQk',
    '/': 'Yn#EqqsO',
    '>': 'leOo!Jub',
    '<': '&IC@sm@D',
    '\\': '%JATkGIk',
    '|': 'UYzPohkr',
    '{': 'UiCsdiJd',
    '}': 'GqlT%mlY',
    '[': 'Aq#gCi$h',
    ']': 'rADVCtbl',
    '`': 'LtbClaLN',
    '~': 'kPwpo!CO',
    '!': 'nFLe@Ogw',
    '@': 'btSbRsAj',
    '#': '%Sh$nzUP',
    '$': 'oOCBY@SZ',
    '%': 'zQH@%Fcj',
    '^': 'HXyFozs#',
    '&': 'c%NFQHf&',
    '*': 'PwWBFVKH',
    '(': 'MrMZftfB',
    ')': 'b!BGLfPT',
    '-': '&&mCKk#t',
    '_': 'mNbgmnaW',
    '=': 'SuXdToQZ',
    '+': 'TG#aiJgC',
    }
  
    const decipher = {

      'mYInXS!w': '0',
      'XswCERsD': '1',
      'hvttsgNx': '2',
      'mRNix&fI': '3',
      'KMcnCpVb': '4',
      'RaCCdmip': '5',
      'xaOnNL%K': '6',
      's$oze%VN': '7',
      'KVcCkQxz': '8',
      '&WYFEvJZ': '9',
      'sciXPf!@': 'A',
      '#XVsZdvW': 'a',
      'giBLG@$j': 'B',
      'NpxFrpQl': 'b',
      'W!aU@mdf': 'C',
      'nlZjunRr': 'c',
      'UAPhFlcJ': 'D',
      'GWsyKBMr': 'd',
      'puXuxVIX': 'E',
      'AZWVw$FD': 'e',
      'lkXLsr%U': 'F',
      'OYlLsjHO': 'f',
      'jTLiJ&!v': 'G',
      'qnBsfE#C': 'g',
      'P&fjDLgI': 'H',
      '%&ozYRur': 'h',
      'CJc$wpRL': 'I',
      'JxdIhSzr': 'i',
      'CEaSBUmP': 'J',
      'CtPrMgQb': 'j',
      'zEDBJBDz': 'K',
      'ZeMvIpGg': 'k',
      'WPKqT&kT': 'L',
      'v#DDJyVh': 'l',
      'fcgbYpsD': 'M',
      '$T#OuQ&r': 'm',
      'Wgpo@yy@': 'N',
      'C@uVRGuW': 'n',
      'NbzqgSDm': 'O',
      'XNnu&OUm': 'o',
      'aHZRLUfB': 'P',
      'kk&ViKln': 'p',
      'UhfVMRuO': 'Q',
      'S$gTAGs$': 'q',
      'whqArOKy': 'R',
      'hvETrCyn': 'r',
      'W&VeQDEe': 'S',
      'ayhLSZuH': 's',
      'YoE%OqyB': 'T',
      'ANMgiQkF': 't',
      'bD@U&AHA': 'U',
      'xgFgwruf': 'u',
      'AYYdjKN$': 'V',
      'lgwWHNoE': 'v',
      'ODX%ljcw': 'W',
      'EZa@Ks#v': 'X',
      'Nch!hHps': 'x',
      'xobm@Loi': 'Y',
      'Dkvs&ohq': 'y',
      'yHtYgaCO': 'Z',
      'PzqIf#Uc': 'z',
      'rGEOEQDA': ' ',
      'H#aBMUhr': '.',
      'dHuWJ$YA': ',',
      'pnogDgLy': ':',
      'whSmQXwz': ';',
      'Q%nPKLv$': '"',
      'o@gO#!h#': "'",
      'YL%CedQk': '?',
      'Yn#EqqsO': '/',
      'leOo!Jub': '>',
      '&IC@sm@D': '<',
      '%JATkGIk': '\\',
      'UYzPohkr': '|',
      'UiCsdiJd': '{',
      'GqlT%mlY': '}',
      'Aq#gCi$h': '[',
      'rADVCtbl': ']',
      'LtbClaLN': '`',
      'kPwpo!CO': '~',
      'nFLe@Ogw': '!',
      'btSbRsAj': '@',
      '%Sh$nzUP': '#',
      'oOCBY@SZ': '$',
      'zQH@%Fcj': '%',
      'HXyFozs#': '^',
      'c%NFQHf&': '&',
      'PwWBFVKH': '*',
      'MrMZftfB': '(',
      'b!BGLfPT': ')',
      '&&mCKk#t': '-',
      'mNbgmnaW': '_',
      'SuXdToQZ': '=',
      'TG#aiJgC': '+',
      }

    
  let convert = (flag)=>{

    let cipherText = '';

    if (flag == 0){

      let pText = encInput.value;
    for (char of pText) {
      cipherText += ciphers[char];
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
  
  
  
  // console.log('let decipher = {\n')
  // for (key in cipher) {
  //   console.log(`'${cipher[key]}': '${key}',`);
  // }
  // console.log('}')






