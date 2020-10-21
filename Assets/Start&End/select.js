#pragma strict

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1"))
		Application.LoadLevel("prologue4");
	if(Input.GetButtonDown("Fire2"))
		Application.LoadLevel("prologue0");
}