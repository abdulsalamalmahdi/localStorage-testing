let arr = [];
let localArr;
var textInputElement = document.getElementById("textInput");
var text = textInputElement.value;

var ulist = document.getElementById("ulist");

function addItem(){
  if (JSON.stringify(arr) === localStorage.getItem("arr")) {
    if (textInputElement.value.trim()) {
      arr.push(textInputElement.value);
      localStorage.setItem("arr", JSON.stringify(arr));
    }
  }
  textInputElement.value = "";
  location.reload();
};

if (arr.length === 0) {
  arr = JSON.parse(localStorage.getItem("arr"));
  arr.map(e => {
    var node = document.createElement("LI");
    ulist.appendChild(node);
    document.body.appendChild(ulist);
    node.innerHTML = e;
  });
}

function resetFunc (){
  console.log("reset")
  localStorage.setItem("arr", JSON.stringify([]));
  location.reload()
}