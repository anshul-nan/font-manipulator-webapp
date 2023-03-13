function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    
    poseNet.on('pose',gotPoses);


}
function draw()

{
    background("#354f52");
}
function modelLoaded()
{
    console.log('posenet is Intialized');
}
function gotPoses(results)
{
    if(results.lenght>0){
        console.log("results");
    }
}