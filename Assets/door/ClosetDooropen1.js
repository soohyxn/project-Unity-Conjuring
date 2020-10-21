#pragma strict

var Dooropen : GameObject;
var Door : GameObject;
var key : GameObject;

var closetopenSE : AudioClip;

function Start () {
	key = GameObject.Find("ClosetKey");
	if(key != null){
		Debug.Log("found");}
	else {
		Debug.Log("Not found");}
}

function Update () 
{	

}

function ClosetHit()
{
	if((key.GetComponent("closetKey")as closetKey).getKey)
	{
		var Plane312 = GameObject.FindWithTag("Plane312").transform;
		Dooropen.transform.position = Plane312.transform.position;
		Dooropen.transform.rotation = Plane312.transform.rotation;
		Door.collider.isTrigger = true;
		audio.PlayOneShot(closetopenSE);
	}
	
}