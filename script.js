let breakIntoPieces = (string)=> {
    let array = [];
    for (let i=0; i<=string.length-1; i++){
      array.push(string[i]+string[i+1]);
      i++;
    }
    return array;
  }
  
  C = '';
  let c = confirm("y for cipher n for decipher");
  
  let cipher = {
    'A': '1s',
    'a': '2s',
    'B': '3s',
    'b': '4s',
    'C': '5s',
    'c': '6s',
    'D': '7s',
    'd': '8s',
    'E': '9s',
    'e': '10',
    'F': '11',
    'f': '12',
    'G': '13',
    'g': '14',
    'H': '15',
    'h': '16',
    'I': '17',
    'i': '18',
    'J': '19',
    'j': '20',
    'K': '21',
    'k': '22',
    'L': '23',
    'l': '24',
    'M': '25',
    'm': '26',
    'N': '27',
    'n': '28',
    'O': '29',
    'o': '30',
    'P': '31',
    'p': '32',
    'Q': '33',
    'q': '34',
    'R': '35',
    'r': '36',
    'S': '37',
    's': '38',
    'T': '39',
    't': '40',
    'U': '41',
    'u': '42',
    'U': '43',
    'u': '44',
    'V': '45',
    'v': '46',
    'W': '47',
    'W': '48',
    'X': '49',
    'x': '50',
    'Y': '51',
    'y': '52',
    'Z': '53',
    'z': '54',
    ' ': '55',
    '0': '56',
    '1': '97',
    '2': '57',
    '3': '58',
    '4': '59',
    '5': '60',
    '6': '61',
    '7': '62',
    '8': '63',
    '9': '64',
    '.': '65',
    ',': '66',
    ':': '67',
    ';': '68',
    '"': '69',
    "'": '70',
    '?': '71',
    '/': '72',
    '>': '73',
    '<': '74',
    '\\': '75',
    '|': '76',
    '{': '77',
    '}': '78',
    '[': '79',
    ']': '80',
    '`': '81',
    '~': '82',
    '!': '83',
    '@': '84',
    '#': '85',
    '$': '86',
    '%': '87',
    '^': '88',
    '&': '89',
    '*': '90',
    '(': '91',
    ')': '92',
    '-': '93',
    '_': '94',
    '=': '95',
    '+': '96',
  }
  
  let decipher = {
  
    '56': '0',
    '97': '1',
    '57': '2',
    '58': '3',
    '59': '4',
    '60': '5',
    '61': '6',
    '62': '7',
    '63': '8',
    '64': '9',
    '1s': 'A',
    '2s': 'a',
    '3s': 'B',
    '4s': 'b',
    '5s': 'C',
    '6s': 'c',
    '7s': 'D',
    '8s': 'd',
    '9s': 'E',
    '10': 'e',
    '11': 'F',
    '12': 'f',
    '13': 'G',
    '14': 'g',
    '15': 'H',
    '16': 'h',
    '17': 'I',
    '18': 'i',
    '19': 'J',
    '20': 'j',
    '21': 'K',
    '22': 'k',
    '23': 'L',
    '24': 'l',
    '25': 'M',
    '26': 'm',
    '27': 'N',
    '28': 'n',
    '29': 'O',
    '30': 'o',
    '31': 'P',
    '32': 'p',
    '33': 'Q',
    '34': 'q',
    '35': 'R',
    '36': 'r',
    '37': 'S',
    '38': 's',
    '39': 'T',
    '40': 't',
    '43': 'U',
    '44': 'u',
    '45': 'V',
    '46': 'v',
    '48': 'W',
    '49': 'X',
    '50': 'x',
    '51': 'Y',
    '52': 'y',
    '53': 'Z',
    '54': 'z',
    '55': ' ',
    '65': '.',
    '66': ',',
    '67': ':',
    '68': ';',
    '69': '"',
    '70': "'",
    '71': '?',
    '72': '/',
    '73': '>',
    '74': '<',
    '75': '\\',
    '76': '|',
    '77': '{',
    '78': '}',
    '79': '[',
    '80': ']',
    '81': '`',
    '82': '~',
    '83': '!',
    '84': '@',
    '85': '#',
    '86': '$',
    '87': '%',
    '88': '^',
    '89': '&',
    '90': '*',
    '91': '(',
    '92': ')',
    '93': '-',
    '94': '_',
    '95': '=',
    '96': '+',
  }
  
  if (c) {
    let P = prompt("enter text: ");
    for (char of P) {
      C += cipher[char];
    }
    console.log(C);
  } else{
    let plaintext = '';
    let CC = prompt("enter cipher: ");
    let pieces = breakIntoPieces(CC);
    for (ciphr of pieces){
      plaintext += decipher[ciphr];
    }
    console.log(plaintext);
  }

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
  
  
  
  
  // console.log('let decipher = {\n')
  // for (key in cipher) {
  //   console.log(`'${cipher[key]}': '${key}',`);
  // }
  // console.log('}')