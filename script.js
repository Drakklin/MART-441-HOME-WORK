// creating a object "box" as a constant. setting its size.



function Choice(elem) {
           
  const box = document.getElementById('box');
	myImage.style.height = '500px';
    myImage.style.width = '500px';
	// happy if loop with multiple attribute swaps. >>>>>>>>
  if (elem.id == 'x'){
	  // placeholder images...sorry
	document.getElementById("myImage").src = 'img1.gif';
    box.style.backgroundColor = 'red';
	  
	  document.getElementById('myspan').textContent = 'Found in the night by robbers you become their prey \n END';
  } 
	// our buttons values are checked
	else if (elem.id == 'y') {
	  document.getElementById("myImage").src = 'crossroad.gif';
	   document.body.style.background = 'black';
    box.style.backgroundColor = 'green';
	   document.getElementById('myspan').textContent = 'Pushing through the dense woods you crest a hill and see before you';
  } 
	else if (elem.id == 'z') {
		   document.body.style.background = 'black';
	document.getElementById("myImage").src = 'img3.gif';
    box.style.backgroundColor = 'orange';
	  document.getElementById('myspan4').textContent = 'you attempt to climb the landslide down to the lake below. \nYou slip and fall breaking both legs and die slow and miserably \nEND';
  } 

	else if (elem.id == 'a'){
		   document.body.style.background = 'black';
	  document.getElementById("myImage").src = 'cave.gif';
    document.body.style.background = 'black';
	 box.style.backgroundColor = 'grey';
	   document.getElementById('myspan4').textContent = 'An imposing cavern lays before you with a nefarious energy, formitable maw and a dark miasma \nA large bear suddenly looms and swipes for your head!';
		
	}
	
	else if (elem.id == 'b') {
	  document.getElementById("myImage").src = 'dodge.gif';
	   document.body.style.background = 'black';
    box.style.backgroundColor = 'green';
	   document.getElementById('myspan2').textContent = 'Nimbly you avoid the attack and rush to safety deep within the cavern \nbefore total exhaustion claims you';
  } 
	else if (elem.id == 'c') {
		   document.body.style.background = 'black';
	document.getElementById("myImage").src = 'blackstar2.gif';
    box.style.backgroundColor = 'dark red';
	  document.getElementById('myspan2').textContent = 'Overwhelmed and ruined, you fall into a heap \nfrom the massive strike and lie dead \nEND';
  } 

	else if (elem.id == 'd'){
		   document.body.style.background = 'black';
	  document.getElementById("myImage").src = 'exit.gif';
    document.body.style.background = 'black';
	 box.style.backgroundColor = 'yellow';
	   document.getElementById('myspan3').textContent = 'awaking later to some frightful noises you, delerious and near dead stumble into the glaring light of day';

	}
	    
		else if (elem.id == 'e'){
		   document.body.style.background = 'black';
	  document.getElementById("myImage").src = 'darkking.jpg';
    document.body.style.background = 'black';
	 box.style.backgroundColor = 'black';
		
	   document.getElementById('myspan3').textContent = 'awaking later to some frightful noises you,' + ("lblName") +" "+ 'turn the corner and there \nDEATH FINDS YOU \nEND';

	}

  function getName(greeting)
            {
                var currentName = document.getElementById("txtName").value;
                document.getElementById("lblName").innerHTML = currentName + ", " + greeting;
                
            }
	 do {
document.getElementById("heart").src = 'xheart.gif';
 
} while(
elem.id != 'x' ||  elem.id != 'z');
}