const body = document.getElementsByTagName('body')[0],
    root = document.createElement('div');
    root.id = 'root';
    body.appendChild(root); 

const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');

textarea.name = 'text';
textarea.rows = '20';
textarea.cols = '130';
root.append(textarea, keyboard);

function createDiv(nClass, n) {
    let result = [];
    for(let i=0; i<n; i++) {
      let div = document.createElement('div');
      div.className = nClass;
      result.push(div);
    }
    return result;
}

keyboard.append(...createDiv('rows', 5));
const keyboardArr = keyboard.getElementsByClassName('rows');
console.log(keyboardArr[3]);

keyboardArr[0].append(...createDiv('rows__key', 14));
keyboardArr[1].append(...createDiv('rows__key', 15));
keyboardArr[2].append(...createDiv('rows__key', 13));
keyboardArr[3].append(...createDiv('rows__key', 13));
keyboardArr[4].append(...createDiv('rows__key', 9));

keyboardArr1 = keyboardArr[0].getElementsByClassName('rows__key');
keyboardArr2 = keyboardArr[1].getElementsByClassName('rows__key');
keyboardArr3 = keyboardArr[2].getElementsByClassName('rows__key');
keyboardArr4 = keyboardArr[3].getElementsByClassName('rows__key');
keyboardArr5 = keyboardArr[4].getElementsByClassName('rows__key');
keyboardArr1[13].style.width = '100px';
keyboardArr2[14].style.width = '45px';
keyboardArr2[0].style.width = '50px';
keyboardArr3[0].style.width = '100px';
keyboardArr3[12].style.width = '85px';
keyboardArr4[0].style.width = '100px';
keyboardArr4[12].style.width = '85px';
keyboardArr5[3].style.width = '330px';

let text1 = ['&acute;','1', '2', '3', '4', '5;', '6;', '7;', '8', '9', '0', '-', '=', 'Backspace'];
let text2 = ['Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '&#92;', 'DEL'];
let text3 = ['CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#58;', '&#34;', 'ENTER'];
let text4 = ['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', '&#60;', '&#62;', '&#63;', '&#8593;', 'Shift'];
let text5 = ['Ctrl','Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];


// for( let i = 0; i < keyboardArr5.length; i++){
//     for( let j = 0; j < text5.length; j++){
//         if(i == j){
//             (keyboardArr5[i]).innerHTML = text5[j];
//         }
//     }
// }

let keyName = (key, name) => {
    for( let i = 0; i < key.length; i++){
        for( let j = 0; j < name.length; j++){
            if(i == j){
                (key[i]).innerHTML = name[j];
            }
        }
    }
}

keyName(keyboardArr1, text1);
keyName(keyboardArr2, text2);
keyName(keyboardArr3, text3);
keyName(keyboardArr4, text4);
keyName(keyboardArr5, text5);






