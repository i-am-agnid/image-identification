Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 85,
    constraints: {
        facingMode: "environment"
    }

})

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture" src="' + data_uri + '">';
    });
}
console.log('ml5 version ', ml5.version);
classifier = ml5.imageClassifier('MobileNet', model_loaded);

function model_loaded() {
    console.log("model has been loaded")
}

function check() {
    img = document.getElementById("capture");
    classifier.classify(img, got_result);
}

function got_result(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}