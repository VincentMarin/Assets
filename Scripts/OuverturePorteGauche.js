#pragma strict

function Start () {
	
}

var OrientationInitialeGauche = 0;
OrientationInitialeGauche = transform.eulerAngles.y;
function Update () {
	//if (Input.touchCount > 0 || Input.GetMouseButtonDown(0))
	//{
		if (Mathf.Abs(transform.eulerAngles.y-OrientationInitialeGauche) < 90) 
	   {
		transform.RotateAround (Vector3(-315,0,495.514), Vector3(0,1,0), -40 * Time.deltaTime);
		}
	//}
}