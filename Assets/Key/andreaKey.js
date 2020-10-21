#pragma strict
var skin : GUISkin;
private var message : String = "안드레아 방의 열쇠이다.";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

var screen : Renderer;
private var color : Color;
private var click : boolean;
public var getKey : boolean;

var andreakey2 : GameObject;
var andreakey : GameObject;

var keySE : AudioClip;
var tvSE : AudioClip;


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
	click = true;
	getKey = true;
	//Destroy(gameObject);
	andreakey.transform.position = andreakey2.transform.position;
	audio.PlayOneShot(keySE);
	audio.loop = true;
	audio.Play();
}

function Start () {
	click = false;
	color = Color.white;
	getKey = false;
}

function Update () {
	if(click)
	{
		var flicker : float = Mathf.Abs(Mathf.Sin(Time.time*10));
		screen.material.color = color * flicker;
	}
	
}