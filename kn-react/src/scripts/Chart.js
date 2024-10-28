//CHART BUTTONS
const img = document.getElementById("chart-img");

//Normal
document.getElementById("normal").onclick = () => {
    document.getElementById("normal").classList = "isClicked";
    document.getElementById("narcoleptic").classList = "notClicked";
    document.getElementById("both").classList = "notClicked";
    img.src = "{Norm}";
};

//Narcoleptic
document.getElementById("narcoleptic").onclick = () => {
    document.getElementById("normal").classList = "notClicked"
    document.getElementById("narcoleptic").classList = "isClicked"
    document.getElementById("both").classList = "notClicked"
    img.src = "{Narc}";
};

//Both
document.getElementById("both").onclick = () => {
    document.getElementById("normal").classList = "notClicked";
    document.getElementById("narcoleptic").classList = "notClicked";
    document.getElementById("both").classList = "isClicked";
    img.src = "{Default}";
};

