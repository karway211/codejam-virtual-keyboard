const body = document.getElementsByTagName('body')[0],
root = document.createElement('div');
root.id = 'root';
body.appendChild(root); 

const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let flagCl = false;

textarea.name = 'text';
textarea.rows = '20';
textarea.cols = '130';
root.append(textarea, keyboard);

function createDiv(nClass, n) {
    let result = [];
    for(let i=0; i<n; i++) {
      let div = document.createElement('div');
    div.classList.add(nClass);
      result.push(div);
    }
    return result;
}

keyboard.append(...createDiv('rows', 5));
const keyboardArr = keyboard.getElementsByClassName('rows');

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


let textEngl = [
    ['&acute;','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&#45;', '&#61;', 'Backspace'],
    ['Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '&#92;', 'DEL'],
    ['CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#58;', '&#39;', 'ENTER'],
    ['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', '&#46;', '&#44;', '&#47;', '&#8593;', 'Shift'],
    ['Ctrl','Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
];

let textRus =  [
    ['ё','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&#45;', '&#61;', 'Backspace'],
    ['Tab','й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', 'DEL'],
    ['CapsLock','ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER'],
    ['Shift','я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '&#46;', '&#8593;', 'Shift'],
    ['Ctrl','Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
];

let textEnglBig = [
    ['&#8764;','&#33;', '&#64;', '&#35;', '&#36;', '&#37;', '&#8743;', '&#38;', '&#42;', '&#40;', '&#41;', '&#95;', '&#43;', 'Backspace'],
    ['Tab','Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '&#123;', '&#125;', '&#448;', 'DEL'],
    ['CapsLock','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '&#58;', '&#34;', 'ENTER'],
    ['Shift','Z', 'X', 'C', 'V', 'B', 'N', 'M', '&#60;', '&#62;', '&#63;', '&#8593;', 'Shift'],
    ['Ctrl','Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
];

let textRusBig = [
    ['Ё','&#33;', '	&#34;', '&#8470;', '&#59;', '&#37;', '&#58;', '&#63;', '&#42;', '&#40;', '&#41;', '&#95;', '&#43;', 'Backspace'],
    ['Tab','Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '&#47;', 'DEL'],
    ['CapsLock','Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
    ['Shift','Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '&#44;', '&#8593;', 'Shift'],
    ['Ctrl','Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
];

let clNameElem = [
    ['Backquote','Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab','KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock','KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['Shift','KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Shift'],
    ['Control','MetaLeft', 'Alt', 'Space', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control']
]


let keyName = (key, name) => {
    for( let i = 0; i < key.length; i++){
        for( let j = 0; j < name.length; j++){
            if(i == j){
                (key[i]).innerHTML = name[j];
            }
        }
    }
}

let keyClass = (key, name) => {
    for( let i = 0; i < key.length; i++){
        for( let j = 0; j < name.length; j++){
            if(i == j){
                (key[i]).classList.add(name[j]);
            }
        }
    }
}
let flagEng = true;
let flagSmall = false;
let keybLangEn = () => {
    keyName(keyboardArr1, textEngl[0]);
    keyName(keyboardArr2, textEngl[1]);
    keyName(keyboardArr3, textEngl[2]);
    keyName(keyboardArr4, textEngl[3]);
    keyName(keyboardArr5, textEngl[4]);
    flagEng = true;
    flagSmall = true;
}

keybLangEn();

let keybLangRu = () => {
    keyName(keyboardArr1, textRus[0]);
    keyName(keyboardArr2, textRus[1]);
    keyName(keyboardArr3, textRus[2]);
    keyName(keyboardArr4, textRus[3]);
    keyName(keyboardArr5, textRus[4]);
    flagEng = false;
    flagSmall = true;
}

let keybLangEnBig = () => {
    keyName(keyboardArr1, textEnglBig[0]);
    keyName(keyboardArr2, textEnglBig[1]);
    keyName(keyboardArr3, textEnglBig[2]);
    keyName(keyboardArr4, textEnglBig[3]);
    keyName(keyboardArr5, textEnglBig[4]);
    flagSmall = false;
    flagEng = true;
}

let keybLangRuBig = () => {
    keyName(keyboardArr1, textRusBig[0]);
    keyName(keyboardArr2, textRusBig[1]);
    keyName(keyboardArr3, textRusBig[2]);
    keyName(keyboardArr4, textRusBig[3]);
    keyName(keyboardArr5, textRusBig[4]);
    flagSmall = false;
    flagEng = false;
}

let chengeLang = () => {
    if(flagEng === true) {
        if(flagCl === false){
            keybLangRu();
        } else {
            keybLangRuBig();
        }
    } else {
        if(flagCl === false){
            keybLangEn();
        } else {
            keybLangEnBig();
        }
    }
}

document.addEventListener('keydown', (event) => {
    
    if(event.key === 'Alt' && event.shiftKey === true || event.key === 'Shift' && event.altKey === true){
        chengeLang();
    }
});

keyClass(keyboardArr1, clNameElem[0]);
keyClass(keyboardArr2, clNameElem[1]);
keyClass(keyboardArr3, clNameElem[2]);
keyClass(keyboardArr4, clNameElem[3]);
keyClass(keyboardArr5, clNameElem[4]);

const keyboardArray = [keyboardArr1,keyboardArr2,keyboardArr3,keyboardArr4,keyboardArr5];



document.addEventListener('keydown', (event) => {
    for( let i = 0; i < keyboardArray.length; i++){
        for( let j = 0; j < keyboardArray[i].length; j++){
            if(`rows__key ${event.key}` === (keyboardArray[i][j]).className || `rows__key ${event.code}` === (keyboardArray[i][j]).className) {
                // console.log(event);
                (keyboardArray[i][j]).style.opacity = 0.5;
                (keyboardArray[i][j]).style.borderRadius = '30%';
                (keyboardArray[i][j]).style.opacity = 0.5;
                (keyboardArray[i][j]).style.borderRadius = '30%';
            }
        }
    }  
});

document.addEventListener('keyup', (event) => {
    for( let i = 0; i < keyboardArray.length; i++){
        for( let j = 0; j < keyboardArray[i].length; j++){
            if(`rows__key ${event.key}` === (keyboardArray[i][j]).className && `rows__key ${event.key}` !== (keyboardArray[2][0]).className || `rows__key ${event.code}` === (keyboardArray[i][j]).className && `rows__key ${event.key}` !== (keyboardArray[2][0]).className) {
                (keyboardArray[i][j]).style.opacity = '';
                (keyboardArray[i][j]).style.borderRadius = '';
                (keyboardArray[i][j]).style.opacity = '';
                (keyboardArray[i][j]).style.borderRadius = '';
            }
        }
    }    
});

//  CapsLock
const CapsLock = keyboardArray[2][0];

let CapsLockOnOff = () => {
    if(flagEng === true && flagSmall === true){
        keybLangEnBig();
        CapsLock.style.opacity = 0.5;
        CapsLock.style.borderRadius = '30%';
        flagCl = true;
    } else if(flagEng === false && flagSmall === true){
        keybLangRuBig();
        CapsLock.style.opacity = 0.5;
        CapsLock.style.borderRadius = '30%';
        flagCl = true;
    } else if(flagEng === true && flagSmall === false){
        keybLangEn();
        CapsLock.style.opacity = '';
        CapsLock.style.borderRadius = '';
        flagCl = false;
    } else if(flagEng === false && flagSmall === false){
        keybLangRu();
        CapsLock.style.opacity = '';
        CapsLock.style.borderRadius = '';
        flagCl = false;
    }
}

let chengeEnBig = (e) => {
    if(e.key === "Shift"){
        if(flagCl === false){
            if(flagEng === true){
                keybLangEnBig();
            } else if(flagEng === false){
                keybLangRuBig();
            }
        } else {
            if(flagEng === true){
                keybLangEn();
            } else if(flagEng === false){
                keybLangRu();
            }
        }
        
    }
}

let chengeEnSmall = (e) => {
    if(e.key === "Shift"){
        if(flagCl === false){
            if(flagEng === true && flagSmall === false){
                keybLangEn();
            } else if(flagEng === false && flagSmall === false){
                keybLangRu();
            }
        } else {
            if(flagEng === true){
                keybLangEnBig();
            } else if(flagEng === false){
                keybLangRuBig();
            }
        }
    }
}
CapsLock.addEventListener('click', CapsLockOnOff);
document.addEventListener('keydown', chengeEnBig);
document.addEventListener('keyup', chengeEnSmall);

document.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.key === "CapsLock"){
        CapsLockOnOff();
    }
});

// Click

for(let i = 0; i< keyboardArray.length; i++){
    for(let j = 0; j< keyboardArray[i].length; j++){
        let clickDiv =  () => {          
            (keyboardArray[i][j]).style.opacity = 0.5;
            (keyboardArray[i][j]).style.borderRadius = '30%';
            // if(!(keyboardArray[2][0]) || !(keyboardArray[0][13]) || !(keyboardArray[1][14]) || !(keyboardArray[2][10]) || !(keyboardArray[2][12]) || !(keyboardArray[3][0]) || !(keyboardArray[3][11]) || !(keyboardArray[3][12]) || !(keyboardArray[4][0]) || !(keyboardArray[4][1]) || !(keyboardArray[4][2]) || !(keyboardArray[4][4]) || !(keyboardArray[4][5]) || !(keyboardArray[4][6]) || !(keyboardArray[4][7]) || !(keyboardArray[4][8])){
                textarea.append((keyboardArray[i][j]).innerHTML);

            // }    
        }
        keyboardArray[i][j].addEventListener('mousedown', clickDiv);
        let onClickDiv =  () => {
            
            (keyboardArray[i][j]).style.opacity = '';
            (keyboardArray[i][j]).style.borderRadius = '';
        }
        keyboardArray[i][j].addEventListener('mouseup', onClickDiv);
    }
}





//     document.onclick = (e) => {
//         console.log(e);
//         if(e.target.innerText === 'Tab'){
//             textarea.append('  ');
//         }
//     }
//     document.onclick = (e) => {
//                     console.log(e);
                    
//                         // textarea.append(e.target.innerText);
                    
//                 }
