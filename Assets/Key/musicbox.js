#pragma strict
var skin : GUISkin;
var message : String = "에이프릴의 오르골이다.";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

var getKey : boolean;

var musicbox : GameObject;
var musicbox2 : GameObject;

var laughSE : AudioClip;

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
	musicbox.transform.position = musicbox2.transform.position;
	audio.PlayOneShot(laughSE);
}

function Start () {
	getKey = false;
}

function Update () {

}