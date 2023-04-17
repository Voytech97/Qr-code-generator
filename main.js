
let btn = document.querySelector('button');
let textInput = document.querySelector('input');
let img = document.querySelector('img');

btn.addEventListener('click',()=>{
    let textValue = textInput.value;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textValue}` 
    
});