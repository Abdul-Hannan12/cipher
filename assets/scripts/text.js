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
  
  
  const ciphers = {

    '0': 'mYIn',
    '1': 'XswC',
    '2': 'hvtt',
    '3': 'mRNi',
    '4': 'KMcn',
    '5': 'RaCC',
    '6': 'xaOn',
    '7': 's$oz',
    '8': 'KVcC',
    '9': '&WYF',
    'A': 'sciX',
    'a': '#XVs',
    'B': 'giBL',
    'b': 'NpxF',
    'C': 'W!aU',
    'c': 'nlZj',
    'D': 'UAPh',
    'd': 'GWsy',
    'E': 'puXu',
    'e': 'AZWV',
    'F': 'lkXL',
    'f': 'OYlL',
    'G': 'jTLi',
    'g': 'qnBs',
    'H': 'P&fj',
    'h': '%&oz',
    'I': 'CJc$',
    'i': 'JxdI',
    'J': 'CEaS',
    'j': 'CtPr',
    'K': 'zEDB',
    'k': 'ZeMv',
    'L': 'WPKq',
    'l': 'v#DD',
    'M': 'fcgb',
    'm': '$T#O',
    'N': 'Wgpo',
    'n': 'C@uV',
    'O': 'Nbzq',
    'o': 'XNnu',
    'P': 'aHZR',
    'p': 'kk&V',
    'Q': 'UhfV',
    'q': 'S$gT',
    'R': 'whqA',
    'r': 'hvET',
    'S': 'W&Ve',
    's': 'ayhL',
    'T': 'YoE%',
    't': 'ANMg',
    'U': 'bD@U',
    'u': 'xgFg',
    'V': 'AYYd',
    'v': 'lgwW',
    'W': 'ODX%',
    'w': 'a#g&',
    'X': 'EZa@',
    'x': 'Nch!',
    'Y': 'xobm',
    'y': 'Dkvs',
    'Z': 'yHtY',
    'z': 'PzqI',
    ' ': 'rGEO',
    '.': 'H#aB',
    ',': 'dHuW',
    ':': 'pnog',
    ';': 'whSm',
    '"': 'Q%nP',
    "'": 'o@gO',
    '?': 'YL%C',
    '/': 'Yn#E',
    '>': 'leOo',
    '<': '&IC@',
    '\\': '%JAk',
    '|': 'UYzP',
    '{': 'UiCs',
    '}': 'GqlT',
    '[': 'Aq#g',
    ']': 'rADV',
    '`': 'LtbC',
    '~': 'kPwp',
    '!': 'nFLe',
    '@': 'btSb',
    '#': '%Sh$',
    '$': 'oOCB',
    '%': 'zQH@',
    '^': 'HXyF',
    '&': 'c%NF',
    '*': 'PwWB',
    '(': 'MrMZ',
    ')': 'b!BG',
    '-': '&&mC',
    '_': 'mNbg',
    '=': 'SuXd',
    '+': 'TG#a',
    }
  
    const decipher = {

      'mYIn': '0',
      'XswC': '1',
      'hvtt': '2',
      'mRNi': '3',
      'KMcn': '4',
      'RaCC': '5',
      'xaOn': '6',
      's$oz': '7',
      'KVcC': '8',
      '&WYF': '9',
      'sciX': 'A',
      '#XVs': 'a',
      'giBL': 'B',
      'NpxF': 'b',
      'W!aU': 'C',
      'nlZj': 'c',
      'UAPh': 'D',
      'GWsy': 'd',
      'puXu': 'E',
      'AZWV': 'e',
      'lkXL': 'F',
      'OYlL': 'f',
      'jTLi': 'G',
      'qnBs': 'g',
      'P&fj': 'H',
      '%&oz': 'h',
      'CJc$': 'I',
      'JxdI': 'i',
      'CEaS': 'J',
      'CtPr': 'j',
      'zEDB': 'K',
      'ZeMv': 'k',
      'WPKq': 'L',
      'v#DD': 'l',
      'fcgb': 'M',
      '$T#O': 'm',
      'Wgpo': 'N',
      'C@uV': 'n',
      'Nbzq': 'O',
      'XNnu': 'o',
      'aHZR': 'P',
      'kk&V': 'p',
      'UhfV': 'Q',
      'S$gT': 'q',
      'whqA': 'R',
      'hvET': 'r',
      'W&Ve': 'S',
      'ayhL': 's',
      'YoE%': 'T',
      'ANMg': 't',
      'bD@U': 'U',
      'xgFg': 'u',
      'AYYd': 'V',
      'lgwW': 'v',
      'ODX%': 'W',
      'a#g&': 'w',
      'EZa@': 'X',
      'Nch!': 'x',
      'xobm': 'Y',
      'Dkvs': 'y',
      'yHtY': 'Z',
      'PzqI': 'z',
      'rGEO': ' ',
      'H#aB': '.',
      'dHuW': ',',
      'pnog': ':',
      'whSm': ';',
      'Q%nP': '"',
      'o@gO': "'",
      'YL%C': '?',
      'Yn#E': '/',
      'leOo': '>',
      '&IC@': '<',
      '%JAT': '\\',
      'UYzP': '|',
      'UiCs': '{',
      'GqlT': '}',
      'Aq#g': '[',
      'rADV': ']',
      'LtbC': '`',
      'kPwp': '~',
      'nFLe': '!',
      'btSb': '@',
      '%Sh$': '#',
      'oOCB': '$',
      'zQH@': '%',
      'HXyF': '^',
      'c%NF': '&',
      'PwWB': '*',
      'MrMZ': '(',
      'b!BG': ')',
      '&&mC': '-',
      'mNbg': '_',
      'SuXd': '=',
      'TG#a': '+',
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