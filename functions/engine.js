let imagenes = [];
let random = localStorage.getItem("randomLocal");
random = JSON.parse(random);
if (random == null) random = [];
let bandera036 = 0;
let contador036 = 0;
let contadorSesion = 0;

for (i = 0; i < 9; i++) {
    imagenes.push({ 'superior': "img/" + i + "-S.png", 'inferior': "img/" + i + "-I.png", "bandera": 0 })
}

/* window.onload = function() {
    if (localStorage.getItem("nombre") === null) {
        $('#myForm').css('display', 'block');
    }
    if (bandera036 == 0) {
        randomize();
        setSupImgs();
    }
}
 */
const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');
/* console.log(draggableElements); */


draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
    // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
    // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
    elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
    elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
    elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
    console.log("dragStart");
    event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}

//Events fired on the drop target

function dragEnter(event) {
    if (!event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");
    }
}

function dragOver(event) {
    if (!event.target.classList.contains("dropped")) {
        event.preventDefault(); // Prevent default to allow drop
    }
}

function dragLeave(event) {
    if (!event.target.classList.contains("dropped")) {
        event.target.classList.remove("droppable-hover");
    }
}

function drop(event) {
    event.preventDefault(); // This is in order to prevent the browser default handling of the data
    id = event.dataTransfer.getData("text");
    idhab = id + "hab";
    if(event.target.getAttribute('id')==idhab){
        animal = document.getElementById(id);
        hab = document.getElementById(idhab);
        hab.appendChild(animal);
        contadorSesion++;
    }
    event.target.classList.remove("droppable-hover");
        if(contadorSesion==3){
            Vic = localStorage.getItem("Vic");
            if(Vic == null){
                localStorage.setItem("Vic","1");
                location.reload();
            }else{
                localStorage.removeItem("Vic");
                location="gameOver.html";
            }

        }
    /*const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    const isCorrectMatching = draggableElementData === droppableElementData;
    if (isCorrectMatching) {
        const draggableElement = document.getElementById(draggableElementData);
        event.target.classList.add("dropped");
        // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
        event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
    }*/
}

function randomize() {
    var temporal = [];
    for (var i = 0; i < 6; i++) {
        do {
            var band = 0;
            var indice = Math.floor(Math.random() * 9);
            if (imagenes[indice].bandera == 0) { /* SI AUN NO SE HA UTILIZADO ESTE ANIMAL */
                temporal[i] = indice;
                const code = '0'.charCodeAt(0);
                var canvas = String.fromCharCode(code + i + 1);

                band = 1;
                imagenes[indice].bandera = 1;
            }
        }
        while (band == 0);
    }

    var anadir = { var0: temporal[0], var1: temporal[1], var2: temporal[2], var3: temporal[3], var4: temporal[4], var5: temporal[5] };
    random.push(anadir);
    localStorage.setItem("random", JSON.stringify(random));
}
/* function randomSolo() {
    var temporal = [];
    var si = [];
    var imag = [];
    for (var i = 0; i < 3; i++) {
        var ran = JSON.parse(localStorage.getItem('random'));
        var sii = "ran[0].var"+i;
        do {
            var band = 0;
            var indice = Math.floor(Math.random() * 3);
            if (imagenes[indice].bandera == 0) { /* SI AUN NO SE HA UTILIZADO ESTE ANIMAL 
                eval(sii[i]) = indice;
                const code = '0'.charCodeAt(0);
                var canvas = String.fromCharCode(code + i + 1);

                band = 1;
                imagenes[indice].bandera = 1;
            }
        }
        while (band == 0);
    }

    var nuevo = {var1: ran[0], var2: ran[1], var3: ran[2]};
    si.push(nuevo);
    localStorage.setItem("ran", JSON.stringify(sii));
} */

function setSupImgs() {
    for (var i = 0; i < 3; i++) {
        var indice = JSON.parse(localStorage.getItem('random'));
        var temp = "indice[0].var" + i;
        var estilo = "<img src='img/" + eval(temp) + "-S.png' width='80%' height='80%' draggable='false'>";
        var temp2 = i + 1;
        var urlimg = "IMG" + temp2 + "S";
        document.getElementById(urlimg).innerHTML = estilo;
        
        
        var id1 = "droppable" + temp2;
        var suelta = "<img src='img/suelta.png' width='81%' height='81%' draggable='false'>";
        /* document.getElementById(id1).innerHTML = suelta; */
        document.getElementById(id1).style.backgroundImage = "url(img/suelta.png)";
        document.getElementById(id1).setAttribute('id',eval(temp)+'hab');
    }
}

function setInfImgs(){
    /* IMAGENES INFERIORES */
    var si = [];
    var imag = [];
    for (var i = 0; i < 3; i++) {
        var indice = JSON.parse(localStorage.getItem('random'));
        var temp = "indice[0].var" + i; 
        imag[i] = eval(temp);
    }
    localStorage.setItem("nuevo", JSON.stringify(imag));

    for(var i = 0; i < 3; i++){
        var indice = JSON.parse(localStorage.getItem('nuevo'));
        indice.reverse();
        var temp = indice[i];
        var estilo2 = "<img src='img/" + eval(temp) + "-I.png' id="+ eval(temp) +" width='80%' height='80%' draggable='true'>";    
        var temp2 = i + 1;
        var urlimg2 = "IMG" + temp2 + "I";
        document.getElementById(urlimg2).innerHTML = estilo2;
    }
}