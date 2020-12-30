canvas=document.getElementById("canvas1");

ctx = canvas.getContext("2d");

rover_width = 100;

rover_height = 90;

background_image= "mars.jpg";

rover_image = "rover.png";

rover_x = 10; 

rover_y = 10;

function add() { background_img1= new Image(); 

background_img1.onload=uploadbackground;

 background_img1.src=background_image;

rover_img1= new Image();

rover_img1.onload=roverground;
 
rover_img1.src=rover_image;
}

function uploadbackground() { ctx.drawImage(background_img1 , 0 , 0,canvas.width,canvas.height);

 } function roverground() { ctx.drawImage(rover_img1 , rover_x , rover_y,rover_width,rover_height);

 }