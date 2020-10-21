#pragma strict

var aprilSE : AudioClip;

function Start () {
	yield WaitForSeconds(1.0);
	audio.PlayOneShot(aprilSE);
}

function Update () {

}