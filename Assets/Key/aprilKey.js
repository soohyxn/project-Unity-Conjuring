#pragma strict
var skin : GUISkin;
var message : String = "에이프릴 방의 열쇠이다.";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

var getKey : boolean;
var aprilkey : GameObject;
var aprilkey2 : GameObject;

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
	//Destroy(gameObject);
	audio.PlayOneShot(keySE);
	aprilkey.transform.position = aprilkey2.transform.position;
}
function Start () {
	getKey = false;
}

function Update () {
}