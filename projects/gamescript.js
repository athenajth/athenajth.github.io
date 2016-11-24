//makes sure page is loaded before function is called
window.addEventListener("load", eventWindowLoaded, false); 
function eventWindowLoaded() {canvasApp();}

function canvasApp()
{
	var canvas = document.getElementById("gameCanvas");
	var ctx = canvas.getContext("2d"); 

	canvas.tabIndex = 1; 

	var ballRadius = 10; 
	var x = canvas.width/2;
	var y = canvas.height-30;
	var dx = 0;
	var dy = 2;
	/*var gravity = 0.1; 
	var gravitySpeed = 0; 
	var bounce = 1; */


	//ball movement event handlers
	var upPressed = false; 
	var downPressed = false; 
	var rightPressed = false; 
	var leftPressed = false; 

	function keyDownHandler(e) 	//e is short for event
	{
		if(e.keyCode == 38) upPressed = true;
		else if(e.keyCode == 40) downPressed = true;
	    else if(e.keyCode == 39) rightPressed = true;
	    else if(e.keyCode == 37) leftPressed = true;

	    e.preventDefault();
	    return false; 
	}

	function keyUpHandler(e) 
	{
	    if(e.keyCode == 38) upPressed = false;
		else if(e.keyCode == 40) downPressed = false;
	    else if(e.keyCode == 39) rightPressed = false;
	    else if(e.keyCode == 37) leftPressed = false;
	}

	canvas.addEventListener("keydown", keyDownHandler, false);
	canvas.addEventListener("keyup", keyUpHandler, false);


	//draws ball on screen
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

	//draws and updates canvas
	function draw()
	{
		//clears canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height); 

		drawBall(); 

		//ball movement
		if(upPressed && y - ballRadius > 0 ) 
		{
			y -= 2;
			dy = - Math.abs(dy); 
		}
		if(downPressed && x < canvas.height-ballRadius) 
		{
			y += 2;
			dy = Math.abs(dy); 
		}
		if(rightPressed && x < canvas.width-ballRadius) 
		{
			x += 2;
			dx = Math.abs(dx); 
		}
		if(leftPressed && x - ballRadius > 0) 
		{
			x -= 2;
			dx = - Math.abs(dx); 
		}

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