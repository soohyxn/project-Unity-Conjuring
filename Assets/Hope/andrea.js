#pragma strict

var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;

var isAndrea : boolean;

function Start () {
	isAndrea = false;
}

function Update () {
	if(isAndrea == true)
		gameObject.collider.enabled = false;

}
function OnGUI() { 
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(0,0,sw/8,sh/6),"찾은 사람: ", labelStyle);
	
	if(!isAndrea)
		GUI.Label(Rect(sw/8,0,sw/8,sh/6),"안드레아", labelStyle);
	
	if(isAndrea)
		GUI.Label(Rect(sw/8,0,sw/8,sh/6),"안드레아", labelStyle2);
	
	
}
function AndreaHit() {
	isAndrea = true;
}
