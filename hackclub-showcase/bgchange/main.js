window.onload = function(){
  document.getElementById("tacss").innerHTML =
  document.getElementById("css").innerHTML;
  document.getElementById("update").onclick = function(){
    document.getElementById("css").innerHTML =
    document.getElementById("tacss").value;
  }
};
