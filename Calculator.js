// This Variable stores the full equation
var Equation = ""
// This is the things that dont require too much for the Determiner to work
let NumbersList = [".","0","1","2","3","4","5","6","7","8","9"," + "," - ", " * ", " / "]
// Finds what type of number it is, and takes it to the switch statement
function Determiner(Value) {
// This resets every time a button/key is pressed
    let Determine = false
    if ((NumbersList.includes(Value))) {
        Determine = "number"
    }
    else if(Value == "Sine"){
        Determine = "sine"
    }
    else if(Value == "Cosine"){
        Determine = "cosine"
    }
    else if(Value == "Tangent"){
        Determine = "tangent"
    }
    else if(Value == "Log"){
        Determine = "log"
    }
    else if(Value == "E"){
        Determine = "e"
    }
    else if(Value =="Submit"){
        Determine = "submit"
    }
    else if(Value == "allClear"){
        Determine = "allClear"
    }
    else if(Value == "backSpace"){
        Determine = "backSpace"
    }
    else if(Value == "Sqrt"){
        Determine = "sqrt";
    }
// This is where the Switch statements are executed and where everything is done
    switch(Determine){
        case "number":
            // Adds value to Equation, and then adds it to the display, eval takes a string and solves it
            Equation += Value
            document.getElementById("Result").innerHTML = Equation
            break;
        case "sine":
            // Math.sin(Value)
            // alert(Math.sin(9))
            Equation = (Math.sin((eval(Equation))))
            document.getElementById("Result").innerHTML = Equation
            break;
        case "cosine":
            Equation = (Math.cos((eval(Equation))))
            document.getElementById("Result").innerHTML = Equation
            break;
        case "tangent":
            Equation = (Math.tan((eval(Equation))))
            document.getElementById("Result").innerHTML = Equation
            break;
        case "log":
            Equation = (Math.log((eval(Equation), 10)))
            document.getElementById("Result").innerHTML = Equation
            break;
        case "e":
            Equation = (Math.log((eval(Equation))))
            document.getElementById("Result").innerHTML = Equation
            break;
        case "submit":
            document.getElementById("Result").innerHTML = eval(Equation)
            Equation = eval(Equation)
            break;
        case "allClear":
            // Resets string back to nothing
            Equation =""
            document.getElementById("Result").innerHTML = Equation
            break;
        case "backSpace":
            // Slices the last string character
            Equation = Equation.slice(0, -1)
            document.getElementById("Result").innerHTML = Equation
            break;
        case "sqrt":
            Equation = Math.sqrt(eval(Equation))
            document.getElementById("Result").innerHTML = Equation
            break;
}
}
document.body.addEventListener("keydown" , Finder)
function Finder(event) {
    // if the key is part of the List, it takes the value and puts it into the determine function
    let Keyboard = ["0","1","2","3","4","5","6","7","8","9","."]
    if (Keyboard.includes(event.key)){
        Determiner(event.key)
    }

}