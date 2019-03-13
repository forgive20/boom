var canvas = {},
	image = {};
var particles = [];


canvas.obj = document.getElementById('myCanvas');

if(canvas.obj.getContext){
	canvas.ctx = canvas.obj.getContext('2d');

	canvas.w = canvas.obj.width = document.body.clientWidth;
	canvas.h = canvas.obj.height = document.body.clientHeight;

	var img = new Image();

	img.onload = function(){
		image.obj = img;
		image.w = img.width;
		image.h = img.height;
		image.x = parseInt(canvas.w / 2 - image.w / 2);
		image.y = 200;

		canvas.ctx.drawImage(image.obj, image.x, image.y, image.w, image.h);

		image.imageData = canvas.ctx.getImageData(image.x, image.y, image.w, image.h);

		calulate();

		draw();
	}

	img.src = 'img/hum.png';
}




// function calulate(){
// 	var len = image.imageDate.length;
// 	var cols = 100, rows = 100;

// 	var s_width = parseInt(image.w / cols),
// 		s_height = parseInt(image.h / rows);

// 	var pos = 0;
// 	var pos_x, pos_y;
// 	var data = image.imageDate.data;

// 	for(var i = 1; i <= cols; i++){
// 		for(var j = 1; j <= cols; j++){
// 			pos = [(j * s_height - 1) * image.w  + (i * s_height - 1)] *4;  // pos = (j - 1) * w + (i - 1);

// 			if(data[pos] > 250){
// 				var particle = {
// 					x: image.x + i * s_width + (Math.random() - 0.5) * 20,
// 					y: image.y + j * s_height + (Math.random() - 0.5) * 20,
// 					fillStyle: '#006eff'
// 				}

// 				particles.push(particle);
// 			}
// 		}
// 	}
// }


// function draw(){
// 	canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);

// 	var len = particles.length, curr_particle = null;

// 	for(var i = 0; i < len; i++){
// 		curr_particle = particles[i];

// 		canvas.ctx.fillStyle = curr_particle.fillStyle;

// 		canvas.ctx.fillRect(curr_particle.x, curr_particle.y, 1, 1);
// 	}
// }