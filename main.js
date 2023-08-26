function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/afEkvVzg4/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        a1=document.getElementById("alien1");
        a2=document.getElementById("alien2");
        a3=document.getElementById("alien3");
        a4=document.getElementById("alien4");
        if(results[0].label=="Clap"){
            a1.src="aliens-01.gif";
            a2.src="aliens-02.png";
            a3.src="aliens-03.png";
            a4.src="aliens-04.png";
        }
        else if(results[0].label=="Snap"){
            a1.src="aliens-01.png";
            a2.src="aliens-02.gif";
            a3.src="aliens-03.png";
            a4.src="aliens-04.png";
        } 
        else if(results[0].label=="Bell"){
            a1.src="aliens-01.png";
            a2.src="aliens-02.png";
            a3.src="aliens-03.gif";
            a4.src="aliens-04.png";
        }
        else{
            a1.src="aliens-01.png";
            a2.src="aliens-02.png";
            a3.src="aliens-03.png";
            a4.src="aliens-04.gif";
        }
        }
    }
