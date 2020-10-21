#pragma strict
var skin : GUISkin;
var message : String = "의자 만져 보기";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

var ghost : GameObject;
var ghost1: GameObject;
var frontdoor : GameObject;

var bgm2SE : AudioClip;
var bammSE : AudioClip;

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

function Start () {
	
}

function Update () {

}

function ChairHit()
{
	ghost.transform.position = ghost1.transform.position;
	ghost.SendMessage("ghostMove");
	frontdoor.SendMessage("ghostMove");
	audio.PlayOneShot(bammSE);
	audio.PlayOneShot(bgm2SE);
}