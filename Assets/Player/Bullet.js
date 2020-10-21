#pragma strict

var bullet : GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Andreadoor")
	{
		collisionInfo.gameObject.SendMessage("AndreaHit");
	}
	else if(collisionInfo.gameObject.tag == "Closetdoor1")
	{
		collisionInfo.gameObject.SendMessage("ClosetHit");
	}
	else if(collisionInfo.gameObject.tag == "Closetdoor2")
	{
		collisionInfo.gameObject.SendMessage("ClosetHit");
	}
	else if(collisionInfo.gameObject.tag == "Aprildoor")
	{
		collisionInfo.gameObject.SendMessage("AprilHit");
	}
	else if(collisionInfo.gameObject.tag == "Musicboxplace")
	{
		collisionInfo.gameObject.SendMessage("MusicboxplaceHit");
	}
	else if(collisionInfo.gameObject.tag == "Nancydoor")
	{
		collisionInfo.gameObject.SendMessage("NancyHit");
	}
	else if(collisionInfo.gameObject.tag == "Underdoor")
	{
		collisionInfo.gameObject.SendMessage("UndergroundHit");
	}
	else if(collisionInfo.gameObject.tag == "chair")
	{
		collisionInfo.gameObject.SendMessage("ChairHit");
	}
	else if(collisionInfo.gameObject.tag == "Frontdoor")
	{
		collisionInfo.gameObject.SendMessage("FrontHit");
	}
	else if(collisionInfo.gameObject.tag == "Car")
	{
		collisionInfo.gameObject.SendMessage("CarHit");
	}
	else if(collisionInfo.gameObject.tag == "cindybed")
	{
		collisionInfo.gameObject.SendMessage("BedHit");
	}
	else if(collisionInfo.gameObject.tag == "MissingPerson")
	{
		collisionInfo.gameObject.SendMessage("MPHit");
	}
	else if(collisionInfo.gameObject.tag == "Nancy")
	{
		collisionInfo.gameObject.SendMessage("NancyHit");
		GameObject.FindWithTag("GameController").SendMessage("NancyHit");
	}
	else if(collisionInfo.gameObject.tag == "Andrea")
	{
		collisionInfo.gameObject.SendMessage("AndreaHit");
		GameObject.FindWithTag("GameController").SendMessage("AndreaHit");
	}
	else if(collisionInfo.gameObject.tag == "Cindy")
	{
		collisionInfo.gameObject.SendMessage("CindyHit");
		GameObject.FindWithTag("GameController").SendMessage("CindyHit");
	}

	
	Destroy(gameObject);
}