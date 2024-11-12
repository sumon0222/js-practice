let result ='';


function append(number){
    result+=number;
    document.getElementById("result").value=result;
}

function appendOperator(operator){
    result+=' ' + operator + ' ';
    document.getElementById("result").value=result;
    }

function clearAll(){
    result='';
    document.getElementById("result").value=result;
        }

function finalResult(){
    try{
        result=eval(result);
        document.getElementById("result").value=result;
    }
    catch(error){
        alert("invalid input");
    }
            }
