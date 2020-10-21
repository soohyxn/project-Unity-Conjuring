#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Player")
		Application.LoadLevel("end4");
}