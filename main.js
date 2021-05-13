prediction = "";
accuracy = "";
Webcam.set({
    height: 350,
    width: 350,
    image_format: "png",
    png_quality: 90
})
cam = document.getElementById("shot");
Webcam.attach("#camera")
Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
});
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lzCFTOTFd/model.json");

function identify() {
    image = docment.getElementById("shot")
    classifier.classify(image, gotResult);
}

function speak() {
    var synth = window.speechSynthesis;
    saying = "The prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(saying);
    synth.speak(utterThis);

}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        consol.log(results)
        document.getElementById("predect").innerHtml = result[0].label;
        document.getElementById("accuracy").innerHtml = result[0].confidence.toFixed(1);
        prediction = result[0].label;
        speak();
        if (result[0].label == Victory) {
            document.getElementById("predect").innerHTML = "&#9996;";
        }
        if (result[0].label == Yo) {
            document.getElementById("predect").innerHTML = "&#129304;";
        }
        if (result[0].label == Bye) {
            document.getElementById("predect").innerHTML = "&#9995;";
        }
        if (result[0].label == Amazing) {
            document.getElementById("predect").innerHTML = "&#128076;";
        }
        if (result[0].label == Thumbs_Up) {
            document.getElementById("predect").innerHTML = "&#128077;";
        }
    }
}