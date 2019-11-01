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


