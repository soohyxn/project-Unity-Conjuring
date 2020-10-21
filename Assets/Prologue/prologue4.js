#pragma strict

var skin : GUISkin;
var titleStyle : GUIStyle;
var nextStyle : GUIStyle;
var infoTitle : GUIStyle;

var bgmSE : AudioClip;

function Start () {
	
}

function Update () {
	audio.PlayOneShot(bgmSE);
	if(Input.GetButtonDown("Fire1"))
		Application.LoadLevel("hideandseek");
		
}

function OnGUI()
{
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(sw/5, sh/8, sw*3/5, sh*3/8),"그 '유명한' 사건 전, 행복한 일상을 보내고 있는 네 자매는 숨바꼭질을 합니다. \n\n\n당신이 에이프릴이 되어 나머지 세 언니를 찾아주세요!", titleStyle);
	GUI.Label(Rect(sw/8, sh/8, sw*6/8, sh*6/8),"시작", nextStyle);
	GUI.Label(Rect(sw/8, sh/8, sw*1/8, sh*6/8),"조작키\n\nW S A D\n마우스 왼쪽 클릭", infoTitle);
	
} 