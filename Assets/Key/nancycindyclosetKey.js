#pragma strict
var skin : GUISkin;
var message : String = "낸시와 신디방의 옷장 열쇠이다.";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

var getKey : boolean;

var nancycindyclosetkey : GameObject;
var nancycindyclosetkey3 : GameObject;

var keySE : AudioClip;

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

function OnMouseUp() {
	getKey = true;
	audio.PlayOneShot(keySE);
	nancycindyclosetkey.transform.position = nancycindyclosetkey3.transform.position;
}
function Start () {
	getKey = false;
}

function Update () {

}