function Solve(val){
    var v=document.getElementById("out");
    v.value+=val;
}

function result(){
    var number1=document.getElementById("out").value;
    try {
        number1=eval(number1)
        document.getElementById("out").value=number1;
    } catch {
        document.getElementById("out").value="error"
        
    }

}
function Clear(){
    var v=document.getElementById("out");
    v.value="";
}

function Back(){
    var v=document.getElementById("out")
    v.value=v.value.slice(0,-1);
}


document.addEventListener