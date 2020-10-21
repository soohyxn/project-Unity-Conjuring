#pragma strict

var skin : GUISkin;

function Start () {
	
}

function Update () {
	if(Input.GetButtonDown("Fire1"))
		Application.LoadLevel("start");	
}

function OnGUI()
{
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(0, sh/4*3, sw, sh/4),"익사했다.","message");
}