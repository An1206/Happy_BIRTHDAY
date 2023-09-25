var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 #mycanvas {
    border-style:ridge;
    border-width : 10px;
    background-color : white ;
    border-color :darkviolet;
 }

function new_image()
{
	
	fabric.Image.fromeURL('barthdayImage.jpg', function(Imd){
        block_image_object =Img;
        block_image_object.scaleTowidth(700);
           block_image_object.scaleToHeight(510);
       
block_image_object.set({
    top:0,
    left:0
});
canvas.aad(block_image_object);
});
}
function playSound(){
	x.playSound();
}
