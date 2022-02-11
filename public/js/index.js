var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("onclick").innerHTML = clicks;
}



var charachter = 
document.getElementById("charachter");
var block =
document.getElementById("block");
function jump(){
    if(charachter.classList != "animate"){
        charachter.classList.add("animate");
    }
    charachter.classList.add("animate");
    setTimeout(function(){
        charachter.classList.remove("animate");
    }, 500);
}


var checkDead = setInterval(function(){

    var charachterTop = parseInt(window.getComputedStyle(charachter).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && charachterTop > 130){
        if(confirm('Du fick ' + clicks + ' poäng. Tryck på  "Ok" för att spela igen.')){
            window.location = '/'
        }
        return 
    }
 

}, 10);