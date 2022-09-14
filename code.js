function audioDetect(){
    navigator.mediaDevices.getUserMedia({ audio: true});
}

Dog="https://teachablemachine.withgoogle.com/models/GJDEG35ob/";
Cat="https://teachablemachine.withgoogle.com/models/bspnFFe7H/";

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        Math.floor( Math.random()*225)+1;
        document.getElementById("SprongTrop").innerHTML = "<img src='https://i.postimg.cc/t4KdPDtW/kindpng-1775227.png'>";
        document.getElementById("text").innerHTML="Voice :-" + Dog;
        document.getElementById("text").innerHTML="Voice :-" + Cat;
    }
}