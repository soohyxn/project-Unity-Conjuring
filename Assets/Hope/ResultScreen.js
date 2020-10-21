#pragma strict

var labelStyle : GUIStyle;
var seekStyle : GUIStyle;
private var state : String;
private var message : String = "다 숨었으면 이제 찾는다!";

var count1 : int;
var count2 : int;
var count3 : int;
var all : int;

function Start () {
	count1 = 0;
	count2 = 0;
	count3 = 0;
	all = 0;
	state = "start";
	yield WaitForSeconds(3.0);
	message = "4분 안에 안드레아, 신디, 낸시를 찾아야 합니다!";
	yield WaitForSeconds(3.0);
	message = "";
	
}
function Update () {
	if(all == 3)
	{
		if(Input.GetButtonDown("Fire1"))
		{
			Application.LoadLevel("start");
		}
	}

}
function TimeUp() {
	state = "TimeUp";
	yield WaitForSeconds(3.0);
	Application.LoadLevel("start");
}
function OnGUI() {
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	if(state == "TimeUp")
		GUI.Label(Rect(0,0,sw,sh),"Time Up!!", labelStyle);
	
	all = count1 + count2 + count3;
	if(all == 3)
	{
		GUI.Label(Rect(0,0,sw,sh),"Success!!", labelStyle);
		BroadcastMessage("Success");
	}
	
	if(state == "start")
		GUI.Label(Rect(sw/6,sh/6,sw*2/3,sh*2/3), message, seekStyle);
		
	
}
function AndreaHit() {
	count1 = 1;
}
function NancyHit(){
	count2 = 1;
}
function CindyHit() {
	count3 = 1;
}
