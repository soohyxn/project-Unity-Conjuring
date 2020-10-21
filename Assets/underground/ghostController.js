#pragma strict

var move : boolean;
var Player : Transform;
var MoveSpeed = 4;
var labelStyle : GUIStyle;
private var state : String;
	
function Start () {
	move = false;
	Player = GameObject.FindWithTag("Player").transform;	
}

function Update () {
	transform.LookAt(Player);
  
    if(move)
    {
    	state = "run";
    	transform.position += transform.forward*MoveSpeed*Time.deltaTime;
    }
}
function ghostMove(){
	move = true;
}
function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Player")
		Application.LoadLevel("end1");
}

function OnGUI()
{	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	if(state == "run")
	{
		GUI.Label(Rect(sw/6,sh/6,sw*2/3,sh*2/3),"도망가야 한다!!!", labelStyle);
	}
		
}