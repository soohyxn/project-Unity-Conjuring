#pragma strict

var move : boolean;
var FrontDoor : Transform;
var MoveSpeed = 4;
var labelStyle : GUIStyle;
var Player : Transform;
var message : String = "실종된 기자: 아, 구해주셔서 감사합니다. 정말, 정말 감사합니다.";
var message2 : String = "제인: 저는 제인이에요. 이제 저한테 맡기고 도망치세요. 현관문까지 데려다 드릴게요. 절 따라오세요!";
var message3 : String = "실종된 기자: 알겠습니다. 여기 지하실 열쇠예요.";

var thankyouSE : AudioClip;
var imjaneSE : AudioClip;
var keySE : AudioClip;

private var state : String;
private var speak : String;
private var currentObjectText : String = "";

function Start () {
	state = "";
	speak = "";
	move = false;
	FrontDoor = GameObject.FindWithTag("Frontdoor").transform;	
	Player = GameObject.FindWithTag("Player").transform;
}

function Update () {
	transform.LookAt(Player);
	
    if(move && state == "run")
    {
    	transform.position += transform.forward*MoveSpeed*Time.deltaTime;
    }	
}
function personMove(){
	move = true;
}

function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Frontdoor")
		Destroy(gameObject);
}
/*function OnMouseEnter() {
	currentObjectText = message;
}
function OnMouseExit() {
	currentObjectText = "";
}*/

function OnGUI()
{	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	if(speak == "reporter")
		GUI.Label(Rect(sw/6,sh/6,sw*2/3,sh*2/3), message, labelStyle);	
	if(speak == "jane")
		GUI.Label(Rect(sw/6,sh/6,sw*2/3,sh*2/3), message2, labelStyle);	
	if(speak == "key")
		GUI.Label(Rect(sw/6,sh/6,sw*2/3,sh*2/3), message3, labelStyle);	
}

function MPHit()
{

	animation.Play("sit");
	//transform.LookAt(Player);
	audio.PlayOneShot(thankyouSE);
	speak = "reporter";
	yield WaitForSeconds(7.0);
	speak = "jane";
	audio.PlayOneShot(imjaneSE);
	yield WaitForSeconds(7.0);
	speak = "key";
	audio.PlayOneShot(keySE);
	yield WaitForSeconds(4.5);
	speak = "off";
	state = "run";
	animation.CrossFade("run");
	
}