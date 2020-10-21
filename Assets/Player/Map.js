#pragma strict

var map : GameObject;
var flash : GameObject;
var labelStyle : GUIStyle;

function Start () {

}

function Update () {
	if(map.renderer.enabled == false)
	{
		
		if(Input.GetKeyDown(KeyCode.M))
			map.renderer.enabled = true;			
	}
	else
	{
		flash.light.enabled = false;
		if(Input.GetKeyDown(KeyCode.M))
			map.renderer.enabled = false;
	}
}

