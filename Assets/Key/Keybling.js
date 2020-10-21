#pragma strict

function Start () {

}

function Update () {
	renderer.material.color = Color.white * Mathf.Abs(Mathf.Sin(2.0 * Time.time));
}