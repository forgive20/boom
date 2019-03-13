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




function calulate(){
	// var len = image.imageDate.length;
	var cols = 100, rows = 100;

	var s_width = parseInt(image.w / cols),
		s_height = parseInt(image.h / rows);

	var pos = 0;
	var par_x, par_y;
	var data = image.imageDate.data;

	for(var i = 1; i <= cols; i++){
		for(var j = 1; j <= rows; j++){
			pos = (j * s_height * image.w + i * s_width) * 4;

			if(data[pos + 3] > 100){
				var particle = {
					x: image.x + i * s_width + (Math.random() - 0.5) * 20,
					y: image.y + j * s_height + (Math.random() - 0.5) * 20
				}

				if(data[pos + 1] < 175 && data[pos + 2] < 10){
					particle.fillStyle = 'ffa900';
				}else if(data[pos + 1] < 75 && data[pos + 1] > 50){
					particle.fillStyle = 'ff4085';
				}else if(data[pos + 1] > 220 && data[pos + 1] > 190){
					particle.fillStyle = '00cfff';
				}else if(data[pos + 1] < 195 && data[pos + 1] > 175){
					particle.fillStyle = '9abc1c';
				}

				particles.push(particle);
			}
		}
	}
}


function draw(){
	canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);

	var len = particles.length, curr_particle = null;

	for(var i = 0; i < len; i++){
		curr_particle = particles[i];

		canvas.ctx.fillStyle = curr_particle.fillStyle;

		canvas.ctx.fillRect(curr_particle.x, curr_particle.y, 1, 1);
	}
}