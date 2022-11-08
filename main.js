function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,400);
    canvas.position(600,200);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log('model loaded');
}

function draw(){
    background('#E7EBDA');
}