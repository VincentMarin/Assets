#pragma strict

function Start () {
}

function Update () {
//	if (Input.touchCount > 0 || Input.GetMouseButtonDown(0))
//	{ 
		if (transform.position.z > 4) 
	   {
		   transform.Translate(0, 0, 4*Time.deltaTime);
		   animation.CrossFade("Run");
	   }
	   if (transform.position.z <= 4 && transform.position.z >0) 
	   {
		   transform.Translate(0, 0, 4*Time.deltaTime);
		   animation.CrossFade("Walk");
	   }
	   if (transform.position.z <= 0) 
	   {
	   animation.CrossFade("Speak");
	   }
 //  }
}