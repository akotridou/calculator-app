const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
const toggle = document.querySelector(".toggle");
const displayText = display.querySelector("span");


buttons.forEach((button) => button.addEventListener("click", () => {

    const span = display.querySelector("span");
    if (button.classList.contains("delete")) {
        span.textContent = span.textContent.slice(0, -1);
    } 
    else if (button.classList.contains("reset")) {
        span.textContent = "";
    }  
    else if (button.classList.contains("equals")) {
      let expression = span.textContent.replaceAll("x", "*");
      if (expression !== "") {
        try {
            span.textContent = Number(eval(expression).toFixed(10));
        } catch {
            span.textContent = "Error";
        }
     }
}
   else {
       span.textContent += button.textContent;
    }

}));


/* THEMES */

let theme = 1;

toggle.addEventListener("click", () => {
    const circle = toggle.querySelector(".toggle-circle");
    const body = document.querySelector("body");
    const keypad = document.querySelector("#keypad");

    const numberButtons = document.querySelectorAll(
        "button:not(.delete):not(.reset):not(.equals)"
    );

    const deleteButton = document.querySelector(".delete");
    const resetButton = document.querySelector(".reset");
    const equalsButton = document.querySelector(".equals");

    theme++;

    if (theme > 3) {
        theme = 1;
    }


    /* THEME 1 */

    if (theme === 1) {

        circle.style.transform = "translateX(0)";

        body.style.backgroundColor = "hsl(222, 26%, 31%)";
        display.style.backgroundColor = "hsl(224, 36%, 15%)";
        keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
        toggle.style.backgroundColor = "hsl(223, 31%, 20%)";

        displayText.style.color = "white";

        numberButtons.forEach((button) => {
            button.style.backgroundColor = "hsl(0, 0%, 90%)";
            button.style.color = "hsl(221, 14%, 31%)";
            button.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
        });

        deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)";
        deleteButton.style.boxShadow = "0 3px hsl(224, 28%, 35%)";

        resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
        resetButton.style.boxShadow = "0 3px hsl(224, 28%, 35%)";

        equalsButton.style.backgroundColor = "hsl(6, 63%, 50%)";
        equalsButton.style.boxShadow = "0 3px hsl(6, 70%, 34%)";
    }


    /* THEME 2 */

    else if (theme === 2) {

        circle.style.transform = "translateX(20px)";

        body.style.backgroundColor = "hsl(0, 0%, 90%)";
        display.style.backgroundColor = "hsl(0, 0%, 93%)";
        keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
        toggle.style.backgroundColor = "hsl(0, 5%, 81%)";

        displayText.style.color = "hsl(60, 10%, 19%)";

        numberButtons.forEach((button) => {
            button.style.backgroundColor = "hsl(0, 0%, 90%)";
            button.style.color = "hsl(60, 10%, 19%)";
            button.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
        });

        deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
        deleteButton.style.boxShadow = "0 3px hsl(185, 58%, 25%)";

        resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
        resetButton.style.boxShadow = "0 3px hsl(185, 58%, 25%)";

        equalsButton.style.backgroundColor = "hsl(25, 98%, 40%)";
        equalsButton.style.boxShadow = "0 3px hsl(25, 99%, 27%)";
    }


    /* THEME 3 */

    else if (theme === 3) {

        circle.style.transform = "translateX(40px)";

        body.style.backgroundColor = "hsl(268, 75%, 9%)";
        display.style.backgroundColor = "hsl(268, 71%, 12%)";
        keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
        toggle.style.backgroundColor = "hsl(268, 71%, 12%)";

        displayText.style.color = "hsl(52, 100%, 62%)";

        numberButtons.forEach((button) => {
            button.style.backgroundColor = "hsl(268, 47%, 21%)";
            button.style.color = "hsl(52, 100%, 62%)";
            button.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
        });

        deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)";
        deleteButton.style.boxShadow = "0 3px hsl(285, 91%, 52%)";

        resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
        resetButton.style.boxShadow = "0 3px hsl(285, 91%, 52%)";

        equalsButton.style.backgroundColor = "hsl(176, 100%, 44%)";
        equalsButton.style.boxShadow = "0 3px hsl(177, 92%, 70%)";
    }

});