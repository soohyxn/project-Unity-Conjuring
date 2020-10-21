#pragma strict
var skin : GUISkin;
var message : String = "침대에 누워보기";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;
var ghost : GameObject;
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

function BedHit()
{
	var sleep : GameObject = GameObject.FindWithTag("sleep");
	if(ghost != null){
		ghost.transform.position = sleep.transform.position;
		ghost.SendMessage("ghostMove2");
		audio.PlayOneShot(laughSE);
	}
}
function Start () {

}

function Update () {

}