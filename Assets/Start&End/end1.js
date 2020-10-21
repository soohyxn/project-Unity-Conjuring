#pragma strict

var skin : GUISkin;

function Start () {
	
}

function Update () {
	if(Input.GetButtonDown("Fire1"))
		Application.LoadLevel("start");	
}

function OnGUI()
{
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(0, sh/4*3, sw, sh/4),"기자 제인 리는 컨저링 집에서 흔적도 남기지 않고 실종 되었다...","message");
}