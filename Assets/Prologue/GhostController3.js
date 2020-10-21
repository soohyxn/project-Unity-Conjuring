#pragma strict

var Player : Transform;
var MoveSpeed = 4;

function Start () {
	Player = GameObject.FindWithTag("Player").transform;	
}

function Update () {
	transform.LookAt(Player);
  
	transform.position += transform.forward*MoveSpeed*Time.deltaTime;
}

function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Player")
		Application.LoadLevel("prologue1");
}
