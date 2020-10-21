#pragma strict

var labelStyle : GUIStyle;
var runStyle : GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI()
{	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	
		GUI.Label(Rect(sw/15,sh/15,sw*1/15,sh*13/15),"조작법 W S A D \n달리기:SHIFT", labelStyle);
		GUI.Label(Rect(sw/6,sh/6,sw*2/3,sh*2/3),"도망치세요!", runStyle);
}