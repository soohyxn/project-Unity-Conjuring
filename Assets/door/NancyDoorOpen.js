#pragma strict

var Dooropen : GameObject;
var Door : GameObject;
var dooropenSE : AudioClip;

function Start () {

}

function Update () 
{	

}

function NancyHit()
{
		var Arc032 = GameObject.FindWithTag("Arc033").transform;
		Dooropen.transform.position = Arc032.transform.position;
		Dooropen.transform.rotation = Arc032.transform.rotation;
		Door.collider.isTrigger = true;
		audio.PlayOneShot(dooropenSE);
}