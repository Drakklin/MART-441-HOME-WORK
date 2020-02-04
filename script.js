
function Choice(elem) {
  const box = document.getElementById('box');
	myImage.style.height = '300px';
    myImage.style.width = '200px';
  if (elem.id == 'x'){
	document.getElementById("myImage").src = 'img1.gif';
    box.style.backgroundColor = 'red';
	  document.getElementById('myspan').textContent = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \n aaaaaaaaaaaaaa';
  } 
	
	else if (elem.id == 'y') {
	  document.getElementById("myImage").src = 'img2.gif';
	   document.body.style.background = 'black';
    box.style.backgroundColor = 'green';
	   document.getElementById('myspan').textContent = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy';
  } 
	else if (elem.id == 'z') {
		   document.body.style.background = 'black';
	document.getElementById("myImage").src = 'img3.gif';
    box.style.backgroundColor = 'orange';
	  document.getElementById('myspan4').textContent = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
  } 

	else if (elem.id == 'a'){
		   document.body.style.background = 'black';
	  document.getElementById("myImage").src = 'cave.gif';
    document.body.style.background = 'black';
	 box.style.backgroundColor = 'grey';
	   document.getElementById('myspan4').textContent = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa3';
		
	}
	
	else if (elem.id == 'b') {
	  document.getElementById("myImage").src = 'img5.gif';
	   document.body.style.background = 'black';
    box.style.backgroundColor = 'green';
	   document.getElementById('myspan2').textContent = 'Nimbly you avoid the attack and rush to safety \nbefore total exhaustion claims you';
  } 
	else if (elem.id == 'c') {
		   document.body.style.background = 'black';
	document.getElementById("myImage").src = 'blackstar2.gif';
    box.style.backgroundColor = 'orange';
	  document.getElementById('myspan2').textContent = 'Overwhelmed and ruined, you fall into a heap \nfrom the massive strike';
  } 

	else if (elem.id == 'd'){
		   document.body.style.background = 'black';
	  document.getElementById("myImage").src = 'cordis.gif';
    document.body.style.background = 'black';
	 box.style.backgroundColor = 'red';
	   document.getElementById('myspan3').textContent = 'Near dead, you stumble into the glaring light of day';

	}
	    
		else if (elem.id == 'e'){
		   document.body.style.background = 'black';
	  document.getElementById("myImage").src = 'darkking.jpg';
    document.body.style.background = 'black';
	 box.style.backgroundColor = 'black';
		
	   document.getElementById('myspan3').textContent = 'DEATH FINDS YOU';

	}}