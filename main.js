


let qte= ["I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.", 
"We'll always have Paris.",
"Whenever I climb I am followed by a dog called 'Ego'.", "Don't cry because it's over, smile because it happened.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ];
let authors = ["Galileo Galilei", "Casablanca", "Friedrich Nietzsche", "Dr. Seuss", "Marilyn Monroe", "Albert Einstein"];
let colors = ["#0A2F23", "#073543", "#6F5A41"]
let i = 1;
let clr = 1;
let textColor = document.getElementsByClassName('txt-color');

// Default quote loads on screen with the HTML page

function loadQuote() {
document.getElementById("quote").innerHTML='"' + qte[0];
document.getElementById('author').innerHTML='-' + authors[0];
document.getElementById('bck_color').style.backgroundColor= colors[0];


for (let j = 0; j < textColor.length; j++) {
    textColor[j].style.color = colors[0]}

}


function randomQuote(){

    
    if (clr < colors.length) {
        for (let j = 0; j < textColor.length; j++) {
            textColor[j].style.color = colors[clr]
        } 
        document.getElementById('bck_color').style.backgroundColor= colors[clr];
        clr++
    }else {
        for (let j = 0; j < textColor.length; j++) {
            textColor[j].style.color = colors[0]
        }
        document.getElementById('bck_color').style.backgroundColor= colors[0];
        clr = 1;
    }

    if (i < qte.length){
        document.getElementById("quote").innerHTML='"' + qte[i];
        document.getElementById('author').innerHTML='-' + authors[i];
        i++;
    }else {
    document.getElementById("quote").innerHTML='"' + qte[0];
    document.getElementById('author').innerHTML='-' + authors[0];
    i = 1;
}}

function tweet(){
    window.open('https://twitter.com/share?text=' + document.getElementById("quote").innerHTML + '"' + ' ' + document.getElementById("author").innerHTML)
}

$(document).ready(function(){
        $('.btn-fade').on('click', () => {
            $('.fade').hide()
            $('.fade').fadeIn(2000)
        })
});


