function Solve(val) {
  var v = document.getElementById("out");
  v.value += val;
}

function result() {
  var number1 = document.getElementById("out").value;
  try {
    number1 = eval(number1);
    document.getElementById("out").value = number1;
  } catch {
    alert("something went wrong");
    document.getElementById("out").value = "";
  }
  

}
function Clear() {
  var v = document.getElementById("out");
  v.value = "";
}

function Back() {
  var v = document.getElementById("out");
  v.value = v.value.slice(0, -1);
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  const validKeys = "0123456789+-*/.%";
  if (validKeys.includes(key)) {
    Solve(key);
  }
  else if(key === "Enter"){
    result();
  }
  else if(key==="Backspace"){
    Back();
  }
  else if(key==="C" || key ==="c"){
    Clear();
  }
});
