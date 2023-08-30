
const res = document.getElementById("Myresult");

function calculateValue(value) {
   
    const calculatedValue = eval(value || null);
    if(isNaN(calculatedValue)) {
        res.value = "Cant divide 0 by 0";
        setTimeout(() => {
            res.value ="";
        },1300);}
    else {
        res.value = calculatedValue;
    }
}

function show(inputValue) {
    if(!res.value) {
        res.value = "";
    }
    res.value += inputValue;
 }

 document.addEventListener("keydown", keyboardInputHandler);
 
 function keyboardInputHandler(e) {
    e.preventDefault();

    // number inputs
    if (e.key === "0") {
        res.value += "0";
      } else if (e.key === "1") {
        res.value += "1";
      } else if (e.key === "2") {
        res.value += "2";
      } else if (e.key === "3") {
        res.value += "3";
      } else if (e.key === "4") {
        res.value += "4";
      } else if (e.key === "5") {
        res.value += "5";
      } else if (e.key === "6") {
        res.value += "6";
      } else if (e.key === "7") {
        res.value += "7";
      } else if (e.key === "8") {
        res.value += "8";
      } else if (e.key === "9") {
        res.value += "9";}
      
       //operator inputs
       if (e.key === "+") {
        res.value += "+";
      } else if (e.key === "-") {
        res.value += "-";
      } else if (e.key === "*") {
        res.value += "*";
      } else if (e.key === "/") {
        res.value += "/";
      }

      //decimal input
      if (e.key === ".") {
        res.value += ".";
      }

      //see result
      if (e.key === "Enter" || e.key === "=") {
        calculateValue(res.value);
      }

      //delete previous inupts
      //backspace for removing the last input
     if (e.key === "Backspace") {
        const resultInput = res.value;
        //remove the last element in the string
        res.value = resultInput.substring(0, res.value.length - 1);
     } 
    }
  


