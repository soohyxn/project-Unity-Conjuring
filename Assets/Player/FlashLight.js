#pragma strict

var flashlight : GameObject;

function Start () {
	flashlight.light.enabled = true;
}

function Update () {
	if(flashlight.light.enabled == true)
	{
		if(Input.GetKeyDown(KeyCode.L))
			flashlight.light.enabled = false;
	}
	else if(flashlight.light.enabled == false)
	{
		if(Input.GetKeyDown(KeyCode.L))
			flashlight.light.enabled = true;
	}
		
}