#pragma strict

var Dooropen : GameObject;
var Door : GameObject;
var key : GameObject;

var dooropenSE : AudioClip;
var lockdoorSE : AudioClip;

function Start () {
	key = GameObject.Find("AprilKey");
	if(key != null){
		Debug.Log("found");}
	else {
		Debug.Log("Not found");}
}

function Update () 
{	

}

function AprilHit()
{
	audio.PlayOneShot(lockdoorSE);
	if((key.GetComponent("aprilKey")as aprilKey).getKey)
	{
		var Arc032 = GameObject.FindWithTag("Arc032").transform;
		Dooropen.transform.position = Arc032.transform.position;
		Dooropen.transform.rotation = Arc032.transform.rotation;
		Door.collider.isTrigger = true;
		audio.PlayOneShot(dooropenSE);
	}
	
}