
function getPlayerName(Namek) {
    const player = document.getElementById(Namek);
    const playerName = player.innerText;
    return playerName;
}
function setName(nameP) {
    const element = document.getElementById("player-list");
    const elementValue = element.childElementCount;
    if (elementValue <5) {
        const para = document.createElement("li");
        const node = document.createTextNode(nameP);
        para.appendChild(node);
        element.appendChild(para);
    }
    else {
        alert("You cannot add more then 5 players")
    }
}
document.getElementById('btn-sakib').addEventListener('click', function () {
    const sakib = getPlayerName('sakib');
    setName(sakib);
    document.getElementById("btn-sakib").disabled = true;
});
document.getElementById('btn-mushfiq').addEventListener('click', function () {
    const mushfiq = getPlayerName('mushfiq');
    setName(mushfiq);
    document.getElementById("btn-mushfiq").disabled = true;
});
document.getElementById('btn-liton').addEventListener('click', function () {
    const liton = getPlayerName('liton');
    setName(liton);
    document.getElementById("btn-liton").disabled = true;
});
document.getElementById('btn-mashrafe').addEventListener('click', function () {
    const mashrafe = getPlayerName('mashrafe');
    setName(mashrafe);
    document.getElementById("btn-mashrafe").disabled = true;
});
document.getElementById('btn-mahmudulla').addEventListener('click', function () {
    const mahmudulla = getPlayerName('mahmudulla');
    setName(mahmudulla);
    document.getElementById("btn-mahmudulla").disabled = true;
});
document.getElementById('btn-miraz').addEventListener('click', function () {
    const miraz = getPlayerName('miraz');
    setName(miraz);
    document.getElementById("btn-miraz").disabled = true;
});
document.getElementById('btn-mustafiz').addEventListener('click', function () {
    const mustafiz = getPlayerName('mustafiz');
    setName(mustafiz);
    document.getElementById("btn-mustafiz").disabled = true;
});
document.getElementById('btn-tamim').addEventListener('click', function () {
    const tamim = getPlayerName('tamim');
    setName(tamim);
    document.getElementById("btn-tamim").disabled = true;
});
document.getElementById('btn-shanto').addEventListener('click', function () {
    const shanto = getPlayerName('shanto');
    setName(shanto);
    document.getElementById("btn-shanto").disabled = true;
});
document.getElementById('btn-taskin').addEventListener('click', function () {
    const taskin = getPlayerName('taskin');
    setName(taskin);
    document.getElementById("btn-taskin").disabled = true;
    
});

function getInputValue(fieldId) {
   
    const fieldValue = document.getElementById(fieldId);
    const fieldString = fieldValue.value;
    const fildNum = parseFloat(fieldString);
    if (isNaN(fildNum)) {
        alert('enter number');
    }
    else {
        return fildNum;
    }
}

document.getElementById('player-expenses-btn').addEventListener('click', function () {
    const element = document.getElementById("player-list");
    const elementValue = element.childElementCount;
    const perPlayer = getInputValue('per-player');
    const totalPlayerExpenses = elementValue * perPlayer;

    const setPlayerExpenses = document.getElementById('player-expenses');
    setPlayerExpenses.innerText = totalPlayerExpenses;
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const totalPlayerExpenses = document.getElementById('player-expenses');
    const totalPlayerExpensesString = totalPlayerExpenses.innerText;
    const totalPlayerExpensesTk = parseFloat(totalPlayerExpensesString);

    const manager = getInputValue('manager');

    const coach = getInputValue('coach');

    const totalExpenses = totalPlayerExpensesTk + manager + coach;

    const setTotalExpenses = document.getElementById('set-total');
    setTotalExpenses.innerText = totalExpenses;
});




