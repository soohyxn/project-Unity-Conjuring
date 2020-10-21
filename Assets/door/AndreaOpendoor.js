#pragma strict

var Dooropen : GameObject;
var Door : GameObject;
var key : GameObject;

var dooropenSE : AudioClip;
var lockdoorSE : AudioClip;

function Start () {
	key = GameObject.Find("AndreaKey");
	if(key != null){
		Debug.Log("found");}
	else {
		Debug.Log("Not found");}
}

function Update () 
{	

}

function AndreaHit()
{
	audio.PlayOneShot(lockdoorSE);
	if((key.GetComponent("andreaKey")as andreaKey).getKey)
	{
		var Arc032 = GameObject.FindWithTag("Arc031").transform;
		Dooropen.transform.position = Arc032.transform.position;
		Dooropen.transform.rotation = Arc032.transform.rotation;
		Door.collider.isTrigger = true;
		audio.PlayOneShot(dooropenSE);
	}
	
}