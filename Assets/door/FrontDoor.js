#pragma strict
var skin : GUISkin;
var message : String = "나갈 수 없다";
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
function FrontHit() {
 	if(move)
		Application.LoadLevel("end2");
}
function ghostMove(){
	move = true;
}
function Start () {
	move = false;
}

function Update () {

}