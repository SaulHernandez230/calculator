(function (){
    var input = document.querySelector("input")
    var item = document.querySelectorAll('div button')
    var string  = ""
    var a = 0 , b = 0
    var operator = ""
    item.forEach(link => {
        link.addEventListener('click',(e)=>{
            let character = link.textContent
            switch (character) {
                case 'C':
                    string = ""
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
                    string += ""+character
                    input.setAttribute("value",string)
                break;
            }
            input.setAttribute("value",string)
        })
    });
})()
