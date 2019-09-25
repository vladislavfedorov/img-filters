var image;

function loadimg(){
  var imgcanvas = document.getElementById("canvas-id");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
};

function firstfilter(){
  for (var pixel of image.values()){
	var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
	pixel.setRed(avg);
	pixel.setGreen(avg);
	pixel.setBlue(avg);
}
var imgcanvas = document.getElementById("canvas-id");
image.drawTo(imgcanvas);
};

function secondfilter(){
  for (var pixel of image.values()){
	var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 250) {
      pixel.setRed(avg*2);
	    pixel.setGreen(avg-avg);
	    pixel.setBlue(avg-avg);
    } else if (avg <= 255 && avg > 250) {
      pixel.setRed(255);
	    pixel.setGreen(0);
	    pixel.setBlue(0);
    } else {
      pixel.setRed((avg*2)-255);
	    pixel.setGreen(255);
	    pixel.setBlue((avg*2)-255);
    }
}
var imgcanvas = document.getElementById("canvas-id");
image.drawTo(imgcanvas);
};

function thirdfilter(){
  for (var pixel of image.values()){
	var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg-avg);
	    pixel.setGreen(avg*2);
	    pixel.setBlue(avg-avg);
}
var imgcanvas = document.getElementById("canvas-id");
image.drawTo(imgcanvas);
};

function fourthfilter(){
  for (var pixel of image.values()){
	var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
	pixel.setRed(avg-avg);
	pixel.setGreen(avg-avg);
	pixel.setBlue(avg*2);
}
var imgcanvas = document.getElementById("canvas-id");
image.drawTo(imgcanvas);
};

function fifthfilter() {
  
	var canvas = document.getElementById("canvas-id");
	var ctx = canvas.getContext("2d");

	ctx.strokeStyle = "red";
	ctx.lineWidth = 10;
  
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(0, canvas.height);
	ctx.lineTo(canvas.width, 0);
	ctx.stroke();
};

function resetimg(){
  var imgcanvas = document.getElementById("canvas-id");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
};