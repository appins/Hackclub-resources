window.onload = function(){
  document.getElementById("tahtml").innerHTML =
  document.getElementById("poster").innerHTML;
  document.getElementById("tacss").innerHTML =
  document.getElementById("css").innerHTML;
  document.getElementById("update").onclick = function(){
    document.getElementById("poster").innerHTML =
    document.getElementById("tahtml").value;
    document.getElementById("css").innerHTML =
    document.getElementById("tacss").value;
  };
};
