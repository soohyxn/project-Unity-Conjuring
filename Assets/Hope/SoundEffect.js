#pragma strict

var timeup : AudioClip;
var success: AudioClip;

function Start () {

}

function Update () {

}
function TimeUp() {
 	audio.PlayOneShot(timeup);
}
function Success() {
 	audio.PlayOneShot(success);
}
