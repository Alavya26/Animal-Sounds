function startClassification(){
    navigator.mediaDevice.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8gnzGegLn/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}