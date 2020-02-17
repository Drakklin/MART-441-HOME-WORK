var random_empty_array = [10];

var random_images_array = ["card0.gif", "card1.gif", "card2.gif", "card3.gif", "card4.gif", "card0x.gif", "card1x.gif", "card2x.gif", "card3x.gif", "card4x.gif" ];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();




var track=new Array();

while(true)
{
    var getRandomImage=Math.floor(Math.random()*imgAr.length);

     if(track.indexOf(getRandomImage)==-1)
     {
        track.push(random);
        break;
     }
}

}
