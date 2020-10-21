#pragma strict

var Dooropen : GameObject;
var Door : GameObject;
var key : GameObject;
private var person : GameObject;

var closetopenSE : AudioClip;

function Start () {
	key = GameObject.Find("NancyCindyClosetKey");
	person = GameObject.FindWithTag("MissingPerson");
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
		if((key.GetComponent("nancycindyclosetKey")as nancycindyclosetKey).getKey)
		{
			var Plane342 = GameObject.FindWithTag("Plane342-1").transform;
			Dooropen.transform.position = Plane342.transform.position;
			Dooropen.transform.rotation = Plane342.transform.rotation;
			Door.collider.isTrigger = true;
			audio.PlayOneShot(closetopenSE);
			person.SendMessage("personMove");
		}
}