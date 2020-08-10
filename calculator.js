(function (){
    var input = document.querySelector("input")
    var item = document.querySelectorAll('div button')
    var string  = ""
    item.forEach(link => {
        link.addEventListener('click',(e)=>{
            // link.style.background = "red"
            let character = link.textContent
            switch (character) {
                case 'C':
                    string = string.slice(0,-1)
                break
                case "=":
                break;
                default:
                    string += character
                break;
            }
            input.setAttribute("value",string)
        })
    });
})()