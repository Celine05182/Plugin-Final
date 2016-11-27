window.onload = function (){
		//console.log("Load !")
		interval = setInterval(function (){
			var ladate = new Date();
				heures = ladate.getHours();
				minutes = ladate.getMinutes();
				secondes = ladate.getSeconds();
				if (secondes < 10) secondes = "0" + secondes;
				if (minutes < 10) minutes = "0" + minutes;
				if (heures < 10) heures = "0" + heures;
				
				document.getElementById("hh").innerHTML = heures
				document.getElementById("mm").innerHTML = minutes
				document.getElementById("ss").innerHTML = secondes

				if ( (heures == 09) && (minutes == 00) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est le début des cours !");
				}
				if ( (heures == 11) && (minutes == 00) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est l'heure de la première pause !");
				}
				if ( (heures == 11) && (minutes == 15) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est la fin de la première pause !");
				}
				if ( (heures == 13) && (minutes == 15) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est l'heure de manger. Bon appétit !");
				}
				if ( (heures == 14) && (minutes == 15) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est l'heure de retourner travailler !");
				}
				if ( (heures == 16) && (minutes == 15) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est l'heure de la deuxième pause !");
				}
				if ( (heures == 16) && (minutes == 30) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est la fin de la deuxième pause !");
				}
				if ( (heures == 18) && (minutes == 30) && (secondes == 00) ) {
					alert("Il est "+heures+":"+minutes+":"+secondes+", c'est la fin des cours !");
				}

		}, 1000)
	}