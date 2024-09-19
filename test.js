let disbox=document.querySelector("input[type=text]")
let inputs=document.querySelectorAll("input[type=button]")
inputs.forEach((button) => {button.addEventListener("click", function () {
        let inval = button.value;
        if(inval=='C')
            disbox.value=''
        else if(inval=='DEL')
            disbox.value=disbox.value.slice(0,-1)
        else if(inval=='=')
            disbox.value=eval(disbox.value)
        else
             disbox.value+=inval;
        
        

    })}); 
