#pragma strict

var dotStyle : GUIStyle;

function Start () {
	Screen.lockCursor = true;
}

function Update () {

}

function OnGUI(){

	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(sw/2, sh/2, sw*1/2, sh*1/2),"·", dotStyle);
}