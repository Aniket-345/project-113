function preload(){

}
function setup(){
    canvas=createCanvas(450,400);
    canvas.center()

    video=createCapture(VIDEO)
    video.size(370,400);
    video.hide()
    getTint="";
}

function draw(){
    background(1,112,1)
    image(video,10,10,430,380);
    getTint=document.getElementById("color_tint").value;
    tint(getTint)
    fill("blue")
    stroke("black")
    circle(430,20,40)
    circle(20,20,40)
    circle(430,380,40)
    circle(20,380,40)
    
}

function take_snapshot(){
    save("snapshot_1.jpeg")
}

