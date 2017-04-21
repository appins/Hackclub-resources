var lines = ["Clicked once!", "Clicked again!", "...and again..."]; 
var counter = 0;

function btnClicked(){
    var output = document.getElementById("output");
    if(counter <= 1){
        output.innerHTML = lines[counter]; 
        counter++;
    }
    else{
        output.innerHTML = lines[2];
    }
}

var button = document.getElementById("button");
button.onclick = btnClicked;
