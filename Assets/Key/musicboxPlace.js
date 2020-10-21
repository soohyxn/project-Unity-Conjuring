#pragma strict
var skin : GUISkin;
var message : String = "오르골을 놓기";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

var key : GameObject;
var musicbox : GameObject;
var undergroundkey2 : GameObject;
var undergroundkey : GameObject;

var clapSE : AudioClip;
var musicboxSE : AudioClip;

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
	key = GameObject.Find("musicbox");
	if(key != null){
		Debug.Log("found");}
	else {
		Debug.Log("Not found");}
	
}

function MusicboxplaceHit()
{
	if((key.GetComponent("musicbox")as musicbox).getKey)
	{
		var musicboxplace = GameObject.FindWithTag("Musicboxplace").transform;
		musicbox.transform.position = musicboxplace.transform.position;
		undergroundkey.transform.position = undergroundkey2.transform.position;
		audio.PlayOneShot(musicboxSE);
		yield WaitForSeconds(3.0);
		audio.PlayOneShot(clapSE);
	}
}



function Update () {

}