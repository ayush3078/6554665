Webcam.set({
    width:300,
    height:350,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'">' ;
    });
}
function speak() { var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is  " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);

}



function speak0(){ var synth = window.speechSynthesis;
     speak_data_1 = "The first prediction is " + prediction_1; 
     speak_data_2 = "And the second prediction is " + prediction_2; 
     var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
 synth.speak(utterThis); }
 console.log('ml5version', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ksT8P9Tej/model.json', modelloaded);
function modelloaded (){
    console.log("speak");
}