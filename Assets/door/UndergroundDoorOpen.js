#pragma strict

var Dooropen : GameObject;
var Door : GameObject;
var key : GameObject;

var dooropenSE : AudioClip;
var lockdoorSE : AudioClip;
var clapSE : AudioClip;

function Start () {
	key = GameObject.Find("UndergroundKey");
	if(key != null){
		Debug.Log("found");}
	else {
		Debug.Log("Not found");}
}

function Update () 
{	

}

function UndergroundHit()
{
	audio.PlayOneShot(lockdoorSE);
	if((key.GetComponent("undergroundKey")as undergroundKey).getKey)
	{
		var Arc032 = GameObject.FindWithTag("Arc034").transform;
		Dooropen.transform.position = Arc032.transform.position;
		Dooropen.transform.rotation = Arc032.transform.rotation;
		Door.collider.isTrigger = true;
		audio.PlayOneShot(dooropenSE);
		yield WaitForSeconds(2.0);
		audio.PlayOneShot(clapSE);
	}
	
}