"use strict"


const btnSelect = document.querySelector(".btn-select");
let input = document.getElementById("size");


let color = "black"
// Algorythm to creat the divs

function creatBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;

    for(let i = 0; i < numDivs ; i++){
        let div = document.createElement("div");

        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div)
    }
}

// Algorythm to get the size

function getSize(){
    input = document.getElementById("size");
    let message = document.querySelector(".message");
    if( input.value == ""){
        message.textContent = "Please select a number to play"
    } else if( input.value < 2 || input.value > 100){
        message.textContent = "Please select a number from 2 to 100"
    } else{
        message.textContent = "Have fun 😁"
        return input.value
    }
}

btnSelect.addEventListener("click", function(){
    let size = getSize()
    creatBoard(size);
    input.value = ""
})


// hovering colors

const btnBlack = document.querySelector(".btn-black");
const btnRandom = document.querySelector(".btn-random");
const btnReset = document.querySelector(".btn-reset")

function colorDiv(){
    if (color  == "random"){
        this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`
    }else{
        this.style.backgroundColor = "black"
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}

btnReset.addEventListener("click", resetBoard)