let line;

let insertDUButton = document.getElementById('insert_du');
let insertPUButton = document.getElementById('insert_pu');
let calculateButton = document.getElementById('calculate');
let resetButton = document.getElementById('reset');

let DUNameText = document.getElementById('du_name');
let DUTypeText = document.getElementById('du_type');
let PUNameText = document.getElementById('pu_name');

let dataDiv = document.getElementById('data');
let resultDiv = document.getElementById('result');

/*--------------------------------------------------------------------------------------------------------------------*/

function addDataToDiv(div, name) {
    div.innerHTML += '<span class="data_span">'+name+'</span><br>';
}

function startArch() {
    line = new Line('line1');
    dataDiv.innerHTML = '';
    resultDiv.innerHTML = '';
}

insertDUButton.addEventListener("click", function () {
    addItemToLine(line, new DU(DUNameText.value, DUTypeText.value));
    addDataToDiv(dataDiv, DUNameText.value);
});

insertPUButton.addEventListener("click", function () {
    addItemToLine(line, new PU(PUNameText.value));
    addDataToDiv(dataDiv, PUNameText.value);
});

resetButton.addEventListener("click", function () {
    startArch();
});

calculateButton.addEventListener("click", function () {
    let list = calculatedLine(line);
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        addDataToDiv(resultDiv, list[i]);
    }
});

startArch();