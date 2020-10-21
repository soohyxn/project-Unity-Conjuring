#pragma strict

var skin : GUISkin;
private var titleStyle : GUIStyle;
private var effectFlag : boolean;
var nextStyle : GUIStyle;



function Start () {
	
}

function Update () {

	if(Input.GetButtonDown("Fire1"))
		Application.LoadLevel("prologue2");
}

function OnGUI()
{
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(sw/5, sh/8, sw*3/5, sh*1/8),"워렌 부부가 이 집에 대해 조사한 내용으로는,\n\n저드슨 셔먼(Judson Sherman)이란 남자가 1863년에 문제의 집을 지었다.\n\n저드슨의 아내 베스쉬바 셔먼(Bathsheba Sherman)는 마녀로 몰려\n\n교수형을 당한 조상을 둔 여자로, 자신도 사탄을 숭배한다.\n\n베스쉬바는 남편과 사이에서 자식을 낳자 아기가 7일째 되었을 때\n\n사탄에게 바치려 했지만, 남편에게 들켜 저지당한다.\n\n베스쉬바는 제물 바치기가 실패하자\n\n자기 땅을 차지하려는 모든 이에게 저주를 내리겠다고 말하며\n\n집 밖에 있는 나무에 목을 매달아 자살했다.\n\n그 시각이 바로 새벽 3시 7분이다.", "Title");
	GUI.Label(Rect(sw/8, sh/8, sw*6/8, sh*6/8),"다음", nextStyle);
} 