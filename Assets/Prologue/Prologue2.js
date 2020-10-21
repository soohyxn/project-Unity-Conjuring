#pragma strict

var skin : GUISkin;
private var titleStyle : GUIStyle;
var nextStyle : GUIStyle;

var bgmSE : AudioClip;

function Start () {
	
}

function Update () {
	audio.PlayOneShot(bgmSE);
	if(Input.GetButtonDown("Fire1"))
		Application.LoadLevel("prologue3");
		
}

function OnGUI()
{
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(sw/5, sh/8, sw*3/5, sh*1/8),"1971년 로드 아일랜드, 해리스빌. 페론 가족은 꿈에 그리던 새 집으로 이사를 간다.\n\n 이사오자마자 페론 가족은 집에서 3시 7분마다 시계가 멈추며 이상한 일을 겪게 된다.\n\n 워렌 부부에게 도움을 청하고 엑소시즘을 시도했지만 실패하게 된다.\n\n결국 모두가 떠나고 아무도 살지 않는 집이 되어 버렸다.", "Title");
	GUI.Label(Rect(sw/8, sh/8, sw*6/8, sh*6/8),"다음", nextStyle);
} 