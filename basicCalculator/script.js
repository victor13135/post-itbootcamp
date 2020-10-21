let keypad = document.getElementById("keypad");
let display = document.getElementById("display");

let expression = "";
let result = 0;

keypad.addEventListener("click", (event) => {
    if(event.target.tagName == "TD") {
        if(event.target.id=="equals") {
            result = eval(expression);
            console.log(result);
            display.value = result;
            expression = "";
        } else {
            expression += event.target.id;
            display.value = expression;
        }
    }
});