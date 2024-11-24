function drawGrid(divsNum){

    let container = document.getElementById('container');
    let gridDiv = document.createElement('div');
    for (let i =1; i <= divsNum ; i++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        for(let j=1 ; j<= divsNum ; j++){

            let newDiv = document.createElement('div');
            let widthHeightValue = parseInt(960 / divsNum) ;
            newDiv.style.width = widthHeightValue + 'px';
            newDiv.style.height = widthHeightValue + 'px';
            newDiv.classList.add('one-div');

            rowDiv.appendChild(newDiv);

        }
        gridDiv.appendChild(rowDiv);
        

}
container.appendChild(gridDiv);

}

let button = document.querySelector('button');
button.addEventListener('click' , () => {
    let userSelection = parseInt(prompt("Write amount of rect" , "16"));
    container.firstElementChild.remove();
    drawGrid(userSelection);


})


drawGrid(16);

let allDivs = document.querySelectorAll('.one-div');
allDivs.forEach(div => {
div.addEventListener('mouseenter', () => {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${randomBlue}, ${randomGreen}, ${randomRed}`;
})
})