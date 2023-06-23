function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    console.log("ml5 version : " + ml5.version);
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0nNiWEx0N/model.json", modelReady);
}

function modelReady() {
    console.log("modelReady...")
    classifier.classify(gotResults);
}

function gotResults() {
    if (error)
    {
        console.error(error);
    }else{
        console.log(results);
        
    }
}
