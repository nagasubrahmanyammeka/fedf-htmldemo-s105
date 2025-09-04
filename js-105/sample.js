
        let num=prompt("Enter the Number Value");
        let x=parseInt(num);
        if(x>0){
        document.getElementById("demo").innerText=x+" is Positive";
        }
        else if(x<0){
                document.getElementById("demo").innerText=x+" is Negative";
        }
        else{
                document.getElementById("demo").innerText=x+" is Zero";
        }
