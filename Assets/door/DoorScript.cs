using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class DoorScript : MonoBehaviour {

	public bool open = false;
	public float doorOpenAngle = 90f;
	public float doorCloseAngle = 0f;
	public float smoot = 2f;

	// Use this for initialization
	void Start () {
	
	}

	public void ChangeDoorState()
	{
		open = !open;
	}
	
	// Update is called once per frame
	void Update () {
		if (open) 
		{
			Quaternion targetRotation = Quaternion.Euler (0, doorOpenAngle, 0);
			transform.localRotation = Quaternion.Slerp (transform.localRotation, targetRotation, smoot * Time.deltaTime);
		} else 
		{
			Quaternion targetRotation2 = Quaternion.Euler (0, doorCloseAngle, 0);
			transform.localRotation = Quaternion.Slerp (transform.localRotation, targetRotation2, smoot * Time.deltaTime);
		}

	}
}
