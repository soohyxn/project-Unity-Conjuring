#pragma strict

var gameLength : float;
private var elapsed : float;
var timeStyle : GUIStyle;


function Start () {
	elapsed = 0.0;
}

function Update () {
	elapsed += Time.deltaTime;
	gameLength -= Time.deltaTime;
	
	if(elapsed >= gameLength)
	{
		BroadcastMessage("TimeUp");
		enabled = false;
	}
}
function Success() {
	enabled = false;
}

function OnGUI(){
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	var text : String = Mathf.CeilToInt(gameLength).ToString();
	GUI.Label(Rect(sw/16, sh/20, sw*14/16, sh*1/20),"남은 시간 " + text, timeStyle);

}
