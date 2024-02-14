function ulang() {
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
}

function konvert() {
    var c = document.getElementById("box1").value;
     c == "" ? alert("Your input field is empty!") : document.getElementById("box2").value=(9/5*c)+32 ;
}