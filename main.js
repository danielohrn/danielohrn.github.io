const input = document.querySelector("#input");
const button = document.querySelector("#button");

const noOfLetters = document.querySelector("#numberOfLetters"); 

const para = document.querySelector("#para");
let word = [];

let lettersWritten = 0; 


let index = 0;
let loadBar = 0; 

function typeWriter(word){

    
    let typeWriterInterval = setInterval(function(){
       
        if(index >= word.length) {
            index = 0;
            clearInterval(typeWriterInterval); 
            para.innerHTML += "\n"; 
            word = [];
            document.querySelector(".loadBar").style.width = 0 + "%";
            document.querySelector(".result-message").style.display = "block";

            if(hasSpace) {
                document.querySelector(".result-message span").innerHTML = "phrase ";                
            } else {
                document.querySelector(".result-message span").innerHTML = "word ";                                
            }
        } else {
            para.innerHTML += word[index];
            letters(word[index]);
            loadBar += 1;
            document.querySelector(".loadBar").style.width = loadBar + "%";
            index++;
        }

        
    },80);
}


let fullwords = []; 

button.addEventListener("click", function(){

    para.innerHTML = ""; 
    lettersWritten = 0; 
    spaces = 0; 
    

    fullwords.push(input.value); 

    for(let i = 0; i < input.value.length; i++) {
        word.push(input.value[i]);            

    }

    input.value = ""; 
    typeWriter(word);
    word = [];  

}); 

let spaces = 0; 
let hasSpace = false; 

function letters(word) {
    
    if(word == " ") {
        spaces++; 
        hasSpace = true; 
    } else {
        lettersWritten ++; 
        document.querySelector("#letters").innerHTML = lettersWritten;   
        document.querySelector("#spaces").innerHTML = spaces;
    }

    if(spaces == 0) {
        hasSpace = false; 
    }
}

let start = "Write something in the input field and I will count the letters and spaces for you.";


window.onload = function(){
    typeWriter(start); 
    setTimeout(function(){
        document.querySelectorAll(".input-container input").forEach((item) => {
            item.style.display = "initial";
        });
    }, 6000); 
}