
function calculateTriangleArea() {
    // console.log('button click check')

    //base
    const baseFiled = document.getElementById('triangle-base')
    const baseValueText = baseFiled.value;
    // console.log(baseValueText)
    const base = parseFloat(baseValueText)
    //console.log(base)


    // *************************************************
    //hight 

    const hightFiled = document.getElementById('triangle-hight')
    const hightValueText = hightFiled.value;
    // console.log(baseValueText)
    const hight = parseFloat(hightValueText)
    //console.log(hight)

    if (isNaN(base) || isNaN(hight)) {
        alert('please insert a number')
        return
    }

    const area = 0.5 * base * hight;
    //console.log(area)

    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area

    //add to calculation entry

    addToCalculationEntry('triangle', area)

    //========================================================================================


}

function calculateRectangleArea() {
    //width
    const widthFiled = document.getElementById('rectangle-width')
    const widthValueText = widthFiled.value;
    // console.log(baseValueText)
    const width = parseFloat(widthValueText)
    //console.log(width)

    // *************************************************
    //length 

    const lengthFiled = document.getElementById('rectangle-length')
    const lengthValueText = lengthFiled.value;
    // console.log(baseValueText)
    const length = parseFloat(lengthValueText)
    //console.log(length)

    if (isNaN(width) || isNaN(length)) {
        alert('please insert a number')
        return
    }

    const area = width * length;
    //console.log(area)

    const areaSpan = document.getElementById('rectangle-area')
    areaSpan.innerText = area

    //add to calculation entry

    addToCalculationEntry('rectangle', area)

}




//=========================================================>>>>>

//======================== REUSABLE FUNCTION ---> reduce duplicate code 

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base')
    //console.log(base)
    const hight = getInputValue('parallelogram-hight')
    //console.log(hight)

    if (isNaN(base) || isNaN(hight)) {
        alert('please insert a number')
        return
    }

    const area = base * hight
    setElementinnerText('parallelogram-area', area)

    //add to calculation entry

    addToCalculationEntry('parallelogram', area)



}

// *********************************

function calculateellipseArea() {
    const majorRadius = getInputValue('ellipse-base')
    //console.log(majorRadius)
    const minorRadius = getInputValue('ellipse-hight')
    //console.log(minorRadius)

    if (isNaN(majorRadius) || isNaN(minorRadius)) {
        alert('please insert a number')
        return
    }

    const area = 3.14 * majorRadius * minorRadius

    setElementinnerText('ellipse-area', area)

    //add to calculation entry

    addToCalculationEntry('ellipse', area)
}




//find value 
function getInputValue(fieldId) {
    //console.log('Parallelogram bottom check')
    const inputField = document.getElementById(fieldId)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

//set value

function setElementinnerText(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area
}



//add to calculation entry ///// LOG

function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area)

    const calculationEntry = document.getElementById('calculation-entry')

    const count = calculationEntry.childElementCount

    const p = document.createElement('p')
    //if you want you can use it otheroyas you can use second type
    //li.innerHTML = areaType + ' ' + area;

    //there you can type html code in there 
    p.innerHTML = ` ${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success mt-2">
    Convert</button>`;

    calculationEntry.appendChild(p)
}