#pragma strict
var skin : GUISkin;
var message : String = "너무 무섭다. 돌아간다.";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;
var move : boolean;

function OnMouseEnter() {
	currentObjectText = message;
}
function OnMouseExit() {
	currentObjectText = "";
}
function OnGUI() { 
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	if(currentObjectText != "")
	{
		GUI.Label(Rect(sw/6,sh/6,sw*2/3,sh*2/3),currentObjectText, labelStyle);
	}
}
function CarHit() {
		Application.LoadLevel("end3");
}

function Start () {

}

function Update () {

}