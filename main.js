img="";
status="";
objects= [];

function preload()
{
img=loadImage("bedroom.png");
}

function setup()
{
canvas=createCanvas(600,400);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status= Detecting objects";
} 


function modelLoaded()
{
console.log("modelLoaded");
status=true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);

    }
    console.log(results);
    objects= results;
}



function draw()
{
image(img, 0,0, 600,400);
if(status !="")
{
    for(var i=0;i<objects.length;i++)
    {
        document.getElementById("status").innerHTML="status= object detected";
        fill("#31e0c0");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+ " "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#0e3318");
        rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);

    }
}




//fill("#31e0c0");
//text("Dog",250,70);
//text("CAT",350,100)
//stroke("#0e3318");
//noFill();
//rect(100,60,400,300);
//rect(270,80,300,300)


}

