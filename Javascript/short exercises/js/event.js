function popup(text) {
    alert(text);
}

//récupération de l'élément du DOM
let h1 = document.getElementById("h1");
h1.onclick = function(){
    popup("hello");
};
