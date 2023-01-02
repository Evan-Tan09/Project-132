img = "";
status = "";
detectedAreaWidth = "";
detectedAreaHeight = "";
detectedAreaX = "";
detectedAreaY = "";
detectedAreaLabel = "";
function setup() {
    canvas = createCanvas(800, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded() {
    console.log("Model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        detectedAreaWidth = results[0].width;
        detectedAreaHeight = results[0].height;
        detectedAreaX = results[0].x;
        detectedAreaY = results[0].y;
        detectedAreaLabel = results[0].label;
        console.log("X: " + detectedAreaX);
        console.log("Y: " + detectedAreaY);
        console.log("Width: " + detectedAreaWidth);
        console.log("Height: " + detectedAreaHeight);
        console.log("Label: " + detectedAreaLabel);
        rect(detectedAreaX, detectedAreaY, detectedAreaWidth, detectedAreaHeight);
        text(detectedAreaLabel, detectedAreaX + 10, detectedAreaY + 10);
    }
}
function preload() {
    img = loadImage("TV.JPG");
}
function draw() {
    image(img, 0, 0, 800, 400);
    noFill();
    stroke("#ff00ff");
    rect(50, 40, 657, 250);
    text("skis", 60, 50);
}