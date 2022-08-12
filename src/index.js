const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
decode(expr)
function decode(expr) {
    let arr = expr.split('**********').map((el) => el.match(/.{1,10}/g))
    let arrLast = []
    let q = [];
    let arrLastL = []
    for (let i = 0; i < arr.length; i++) {
         q.push(arr[i].map((el) => el.match(/.{1,2}/g)))
    }
    for (let i = 0; i < q.length; i++) {
        arrLast.push(q[i].map((el) => el.map((el1) => {
            if(el1 === '00'){
                return 1
            }

            if (el1 === '10') {
                return el1 = '.'
            }
            if(el1 === '11'){
                return el1 = '-'
            }
        }).filter(function(f) { return f !== 1 }).reduce((a,b) => a.concat(b))
        )
        )
    }

    for (let i = 0; i < arrLast.length; i++) {
        arrLastL.push(arrLast[i].map((el) => {

            for (const key in MORSE_TABLE) {
                if(el){
                    return MORSE_TABLE[el]
                }
            }
        }).reduce((a,b) => a.concat(b))
        )
    }
    return arrLastL.join(' ')
}

module.exports = {
    decode
}