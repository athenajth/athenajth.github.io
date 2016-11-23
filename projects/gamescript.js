//makes sure page is loaded before function is called
window.addEventListener("load", eventWindowLoaded, false); 
function eventWindowLoaded() {canvasApp();}

function canvasApp()
{
	var canvas = document.getElementById("gameCanvas");
	var ctx = canvas.getContext("2d"); 

	var x = canvas.width/2;
	var y = canvas.height-30;
	var dx = 1;
	var dy = 2;
	/*var gravity = 0.1; 
	var gravitySpeed = 0; 
	var bounce = 1; */

	var ballRadius = 10; 

		function drawBall()
		{
			ctx.beginPath();

		ctx.arc(x, y, ballRadius, 0, Math.PI*2);	//circle shape
		ctx.fillStyle = "#FF0000";	
		ctx.fill();
		ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
		ctx.stroke();	

		ctx.closePath();
	}

	function draw()
	{
		//clears canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height); 

			drawBall(); 

			//bounce off walls
			if(x + dx > canvas.width - ballRadius || x + dx < ballRadius)
				dx = -dx; 
			if(y + dy > canvas.height - ballRadius || y + dy < ballRadius)
				dy = -dy; 

			//obj movement
		x += dx; 
		y += dy; 
	}

	setInterval(draw, 20); 
}