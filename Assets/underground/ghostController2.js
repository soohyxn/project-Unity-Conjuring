#pragma strict

var move : boolean;
var Player : Transform;
var MoveSpeed = 4;

	
function Start () {
	move = false;
	Player = GameObject.FindWithTag("Player").transform;	

}

function Update () {
	transform.LookAt(Player);
  
    if(move)
    	transform.position += transform.forward*MoveSpeed*Time.deltaTime;
}
function ghostMove2(){
	move = true;
}
function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Player")
		Destroy(gameObject);
}