#pragma strict
var skin : GUISkin;
var message : String = "지하실의 열쇠이다.";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

var getKey : boolean;

var undergroundkey : GameObject;
var undergroundkey2 : GameObject;

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
	undergroundkey.transform.position = undergroundkey2.transform.position;
}
function Start () {
	getKey = false;
}

function Update () {

}