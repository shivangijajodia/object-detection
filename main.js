img = "";
status1= "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status:detecting";
}
function modelloaded() {
    console.log("modelloaded");
    status1=true;
    objectDetector.detect(img,gotresult);
}
function gotresult(error,results) {
if(error){
    console.log(error);
}
else{console.log(results);
}
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat", 350, 75);
    noFill();
    stroke("#FF0000");
    rect( 300, 60, 325, 300);
}
