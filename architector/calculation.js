let line;


let insertDUButton = document.getElementById('insert_du');
let insertPUButton = document.getElementById('insert_pu');
let calculateButton = document.getElementById('calculate');
let resetButton = document.getElementById('reset');

// let DUNameText = document.getElementById('du_name');
// let DUTypeText = document.getElementById('du_type');
// let PUNameText = document.getElementById('pu_name');

let dataDiv = document.getElementById('data');
let resultDiv = document.getElementById('result');
let playground = document.getElementById('playground');

/*--------------------------------------------------------------------------------------------------------------------*/

function drawItem(src, x, y) {
    playground.innerHTML += '<img src="'+src+'" style="position: absolute; margin-left: '+x+'px; margin-top: '+y+'px" >';
}

function addDataToDiv(div, name) {
    div.innerHTML += '<span class="data_span">'+name+'</span><br>';
}

function resetPlayground() {
    x_pos = STEP;
    y_pos = STEP;
    y_start_pos = STEP;
    line = new Line('line1');
    dataDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    playground.innerHTML = '';
}

insertDUButton.addEventListener("click", function () {
    addItemToLine(line, bdkg02);
    addDataToDiv(dataDiv, bdkg02.getName);
});

insertPUButton.addEventListener("click", function () {
    addItemToLine(line, pu900);
    addDataToDiv(dataDiv, pu900.getName);
});

resetButton.addEventListener("click", function () {
    resetPlayground();
});

calculateButton.addEventListener("click", function () {
    let list = calculatedLine(line);
    for (let i = 0; i < list.length; i++) {
        addDataToDiv(resultDiv, list[i].getName);
    }
});



resetPlayground();