const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");
const KG = document.querySelector("#kg"),
G = document.querySelector("#g");

window.addEventListener("load", () => centimeter.focus());
window.addEventListener("load", () => EUR.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";

});
inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if(!inch.value) centimeter.value = "";
});

KG.addEventListener("input", ()=>{
    G.value = (KG.value * 1000).toFixed(4);
    if(!KG.value) G.value = "";

});
G.addEventListener("input", ()=>{
    KG.value = (G.value * 1).toFixed(2);
    if(!G.value) KG.value = "";

});

