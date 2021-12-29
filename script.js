
const container = document.getElementById("container");

function createGrid (rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";        
      };
};

createGrid(16,16);

const celda = document.querySelectorAll('.grid-item');

celda.forEach((cell) => {
    cell.addEventListener('mouseover', function(e) {
      e.target.style.background = 'blue';
    });
});