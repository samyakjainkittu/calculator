let string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try {
                string = eval(string);
                
            } catch (error) {
                
                string = "Error";
            }
            document.querySelector('input').value = string;
        
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '⬅️'){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'Error'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = parseFloat(string) / 100;
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }


    })
 

});

