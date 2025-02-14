var redButton;
var alertFlash = true;

function setup()
{
	createCanvas(600, 700);
    // initialize
	redButton = {
		x: width / 2,
		y: height / 2,
		dia: 200,
		activated: false
	}

}

function draw()
{
	background(255);

	if (frameCount / 30 == parseInt(frameCount / 30))
	{
		if (alertFlash == true)
		{
			alertFlash = true;
		}
		else
		{
			alertFlash = false;
		}
	}

	if (redButton.activated == true)
	{
		background(250, 250, 0);

		if (alertFlash)
		{
			textSize(35);
			text("Meltdown Sequence Initiated!!!", width / 2, height / 2 - redButton.dia);
		}

	}

    
    // red button
	fill(255, 0, 0);
	stroke(200, 30, 30);
	strokeWeight(20);
	ellipse(redButton.x, redButton.y, redButton.dia);
	noFill();
	stroke(255, 100, 100);
	arc(redButton.x, redButton.y, redButton.dia, redButton.dia, PI, PI * 2);

    // bottom line
	textAlign(CENTER);
	textSize(40);
	strokeWeight(1);
	stroke(0);
	fill(0);
	text("DO NOT PRESS", width / 2, height / 2 + redButton.dia);

}

function mousePressed()
{   
    // check if mouse position is within red button and compare against radius
	if (dist(mouseX, mouseY, redButton.x, redButton.y) < redButton.dia / 2)
	{      
        // use comparison operator instead of assignment operator
		if (redButton.activated == true)
		{
			redButton.activated = false;
		}
		else
		{
			redButton.activated = true;
		}
	}
}