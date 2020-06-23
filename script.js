var failU ="";
var failP ="";
function check(){
	var U = document.getElementById('U').value;
	var P = document.getElementById('P').value;
	
    document.getElementById("glass").innerHTML="Username = " + U + " Password = " + P;
	if(U.toLowerCase() === "ztechpro"){
		document.getElementById("glass").innerHTML+=" <br>You're an admin"
		
	}else{
	
		
		failU += U + " ";
		failP += P;
		document.getElementById("glass").innerHTML+=" <br>Can't trick this pirate"
		localStorage.setItem("failU",failU);
		localStorage.setItem("failP",failP);
	}
}