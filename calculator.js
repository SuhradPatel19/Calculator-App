var screen =  document.getElementById("screen")
var buttons = document.querySelectorAll("button")
//console.log(buttons)
var totalValue = ""
for (i of buttons){
    console.log(i)
    i.addEventListener("click",(e)=>{
        buttonText=e.target.innerText
        console.log(buttonText)

        if(buttonText==="x"){
            buttonText="*"
            totalValue+=buttonText
            screen.value=totalValue

        }
        else if(buttonText==="C"){
            totalValue = ""
            screen.value=totalValue
            
        }

        else if(buttonText==="="){
            screen.value=eval(totalValue)

        }
        else{
            totalValue+=buttonText
            screen.value=totalValue

        }

    })


}
