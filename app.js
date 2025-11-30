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


document.addEventListener("keydown", function (val) {

    val.preventDefault();
    if (val.key === "Enter") {
        Equal();
    }
    else if (Number(val.key)>= 0  && Number(val.key)<= 9 ) {
        setNum(val.key)
        
        
    }
    else if (val.key == "+" ||  val.key == "-"  || val.key == "/"  || val.key == "*") {
        setNum(val.key)
    }
    else if (val.key == "Backspace") {
       backSpace()
    }
    
    
    
}
);



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




function PercentageSol(){
    var result = 0
    var value = inputData.value + "%"
    if (value.toString().includes("%")){
        var numb = parseFloat(value)
        result = numb/100
    }
    if (value.toString().includes("%") && value.toString().includes("+")){
        var res = value.toString().split("+")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) +Number(num3)  
        console.log(result)
        inputData.value = result
    }
    if (value.toString().includes("%") && value.toString().includes("-")){
        var res = value.toString().split("-")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) -Number(num3)  
        console.log(result)
        inputData.value = result
    }
    if (value.toString().includes("%") && value.toString().includes("*")){
        var res = value.toString().split("*")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) *Number(num3)  
        console.log(result)
        inputData.value = result
    }
    if (value.toString().includes("%") && value.toString().includes("/")){
        var res = value.toString().split("/")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) /Number(num3)  
        console.log(result)
        inputData.value = result


    }
}

// function PercentageSol(){
//     // 2+50%  =[2,50]

//     // 50%
//     // 2+50%
//     var value = inputData.value+ "%"
//     var result = 0
//     console.log(value)

//     if(value.toString().includes("%")){
//         var numb = parseFloat(value)
//         result = numb/100
//     }

//     if (value.toString().includes("%") && value.toString().includes("+"))  {
//         var numb = value.toString().split("+")
//        var numb1 =  numb[0] 
//        var numb2 =  numb[1] 
//        var numb3  = parseFloat((numb2)/100)*numb1
//        var result = Number(numb1)/ Number(numb3)
//        console.log(result)
//        inputData.value = result
       

        
//     }

  
// }
