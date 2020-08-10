(function (){
    var input = document.querySelector("input")
    var item = document.querySelectorAll('div button')
    var string  = ""
    var a = 0 , b = 0
    var operator = ""
    item.forEach(link => {
        link.addEventListener('click',(e)=>{
            // link.style.background = "red"
            let character = link.textContent
            switch (character) {
                case 'C':
                    string = input.value
                    string = string.slice(0,-1)
                break

                case "+":
                case "-":
                case "*":
                case "/":
                    operator = character
                    a = +string
                    string = ""
                break
                case "=":
                    b = +string
                   string = operator === "+" ? a + b : 
                            operator === "-" ? a - b :
                            operator === "*" ? a * b :
                            operator === "/" ? a / b : "error"
                break;
                default:
                    string += character
                break;
            }
            input.setAttribute("value",string)
        })
    });
})()