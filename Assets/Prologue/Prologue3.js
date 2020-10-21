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
		Application.LoadLevel("forecourt");
		
}

function OnGUI()
{
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(sw/5, sh/8, sw*3/5, sh*1/8),"3개월 후, 캔우드 타임즈 소속 기자, 제인 리는 페론 가족을 취재하고 \n\n그 문제의 집을 방문한다.", titleStyle);
	GUI.Label(Rect(sw/8, sh/8, sw*6/8, sh*6/8),"시작", nextStyle);
	GUI.Label(Rect(sw/5, sh/8, sw*3/5, sh*6/8),"조작키\n\nW S A D\nM - 지도\nL - 라이트\n\n※이 게임은 영화 컨저링을 배경으로 만들어졌습니다.\n맵 구석구석 있는 단서를 찾으며 플레이해주세요.\n\n결말 3개가 존재합니다.\n플레이 해보며 모두 찾아보세요.", infoTitle);
	
} 