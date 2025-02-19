const container = document.querySelector(".container"); // Sélectionne l'élément HTML
const containerRect = container.getBoundingClientRect(); // Récupère ses dimensions
const containerHeight = containerRect.height;
const containerWidth = containerRect.width;
const sizeButton = document.querySelector(".button");
const initialTiles = 16;


sizeButton.addEventListener("click", () => {
    createBoard()

})
function board() {

    for (let i = 0; i < initialTiles * initialTiles; i++) {
        let tiles = document.createElement("div"); // Corrigé: "divs" → "div"
        tiles.style.border = "solid black 1px";
        tiles.style.height = (containerHeight / initialTiles) + "px";
        tiles.style.width = (containerWidth / initialTiles) + "px";

        
        container.appendChild(tiles); // Ajouter la tuile au conteneur

        tiles.addEventListener("mouseover", () => {tiles.style.backgroundColor = randomColorTiles()})

        

    }

    
    
}

function randomColorTiles(){

    const character = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++){
        randomChoiceCharacter = Math.floor(Math.random()*16);
        color += character[randomChoiceCharacter
        ]
    }
    return color

}

function createBoard(){
    container.innerHTML = "";
    let numberTiles = parseInt(prompt("Please choose a number between 1 and 100"));

    for (let i = 0; i < numberTiles * numberTiles; i++) {
        let tiles = document.createElement("div"); // Corrigé: "divs" → "div"
        tiles.style.border = "solid black 1px";
        tiles.style.height = (containerHeight / numberTiles) + "px";
        tiles.style.width = (containerWidth / numberTiles) + "px";

        
        container.appendChild(tiles);

        tiles.addEventListener("mouseover", () => {tiles.style.backgroundColor = randomColorTiles()})
    }
}

board(); // Exécuter la fonction pour créer la grille
