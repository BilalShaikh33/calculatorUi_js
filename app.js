var inputData = document.getElementById("input")
console.log(inputData)

function setNum(numb) {

    var lastValue = inputData.value.toString().slice(inputData.value.length - 1)
    console.log(lastValue)

    if (lastValue == "+" ||
        lastValue == "-" ||
        lastValue == "*" ||
        lastValue == "/"
    ) {
        if (numb == "+" ||
            numb == "-" ||
            numb == "*" ||
            numb == "/") {
            Toastify({
                text: "Please enter correct data",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right,  #DC143C )",
                },
                onClick: function () { } // Callback after click
            }).showToast();

        }
        else {
            inputData.value += numb
        }

    }
    else {
        inputData.value += numb

    }



}

function Equal() {
    inputData.value = eval(inputData.value)
}


function newSetNumb() {
    inputData.value = `(-${inputData.value})`

}

function backSpace(){

    inputData.value  =  inputData.value.toString().slice(0,inputData.value.length -1 )
}

function clearData (){

    inputData.value = ""

}

function sqaure(){
       inputData.value  =  inputData.value*inputData.value
}
function cube(){
       inputData.value  =  inputData.value*inputData.value*inputData.value
}

function sqaureRoot(){
       inputData.value  =  Math.sqrt(inputData.value)
}
function cubeRoot(){
       inputData.value  =  Math.cbrt(inputData.value)
}

