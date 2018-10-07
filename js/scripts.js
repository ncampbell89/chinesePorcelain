// JS that runs on page load
let autoplayCount = 0; // var to keep track of which picture we're at on the slideshow
let duration = 5; // how long to wait between image swaps

document.body.style.backgroundColor = "#123";
let app = document.getElementById("app");
app.style.cssText = "background:#555; width:95%; padding:10px; margin:10px auto";

let bigPicDiv = document.createElement('div');
bigPicDiv.style.cssText = "background-color:rgb(85,85,85); overflow-y:scroll";
app.appendChild(bigPicDiv);

// thumbsDiv for 1 column layout
let thumbsDiv = document.createElement('div');
thumbsDiv.style.cssText = "width: 100%; background-color: #AAA; height: 120px; margin-bottom: 15px; overflow-x: scroll";
app.appendChild(thumbsDiv);

// thumbsDiv2 for 2 column layout
let thumbsDiv2 = document.createElement('div');
thumbsDiv2.style.cssText = "float:right; width: 25%; background-color: #AAA; height: 80vh; margin-bottom: 15px; overflow-x: scroll; display:none";
app.appendChild(thumbsDiv2);


let footer = document.createElement('div');
footer.style.cssText = "clear: both; height: 57px; background-color: #CCC";
app.appendChild(footer);

let footerTxt = document.createElement('h3');
footerTxt.style.cssText = "display: inline; float: left; color: #000; max-width: 70%; font-family: sans-serif; padding-left: 30px; margin-top: 20px; overflow-x:scroll; white-space:nowrap";
footerTxt.style.fontSize = "1.4vw";
footer.appendChild(footerTxt);

let footerContent = document.createElement('div');
footer.appendChild(footerContent);

let seconds = document.createElement('p');
seconds.innerHTML = "seconds";
seconds.style.cssText = "float: right; padding-right: 30px; margin-top: 20px; font-family: sans-serif; font-size:1.4vw";
footerContent.appendChild(seconds);

let durationChooser = document.createElement('input');
durationChooser.type = "number";
durationChooser.maxLength = '2';
durationChooser.style.cssText = "width: 43px; color: #000; background-color: #EEE; max-width: 70%; font-family: sans-serif; float: right; font-size: 1.4vw; weight: bold; margin: 13px 5px 5px; padding: 5px";
durationChooser.value = duration;
footerContent.appendChild(durationChooser);

let autoPlayBtn = document.createElement('button');
autoPlayBtn.innerHTML = "AUTOPLAY";
autoPlayBtn.style.cssText = "padding: 5px 25px; margin: 16px 5px 5px; font-weight: bold; font-size: 1.4vw; background-color: #ADB; color: #586; float: right; letter-spacing: 2px; cursor: pointer";
autoPlayBtn.addEventListener('click', initAutoPlay);
footerContent.appendChild(autoPlayBtn);



let myInterval;

function initAutoPlay() {
    duration = durationChooser.value; //get value from input box
    
    if(duration != '') {
        duration *= 1000; //convert duration from sec to milliseconds
        duration = Math.abs(duration); //convert neg to positive if neg num
    } else {
        duration = 5000; //restore default 5 seconds
        durationChooser.value = duration/1000;
    }
    
  myInterval = setInterval(swapPic, duration); // Set and store the interval
  autoPlayBtn.removeEventListener('click', initAutoPlay); // Remove clickable
  autoPlayBtn.innerHTML = "STOP"; // Change text
  autoPlayBtn.addEventListener('click', stopAutoPlay); // Change functionality
  autoPlayBtn.style.cssText += "background-color: #DAA; color: #855;"
}

function stopAutoPlay() {
  clearInterval(myInterval); // Clear the interval
  autoPlayBtn.removeEventListener('click', stopAutoPlay); // Remove clickable
  autoPlayBtn.innerHTML = "AUTOPLAY";
  autoPlayBtn.style.cssText += "background-color: #ADB; color: #586;";
  autoPlayBtn.addEventListener('click', initAutoPlay); // Restore clickable
}

// the image data: folder and file names
let folder = "chinesePorcelain/";

let slideArr = [
    { fileName: "han0.jpg", fileCaption: "China Porcelain Guide (Han Dynasty 206BC - 220AD)", dynasty: "Han" },
  { fileName: "han1.jpg", fileCaption: "Brown Glazed jug with faux ring handles", dynasty: "Han" },
  { fileName: "han2.jpg", fileCaption: "Green Glazed model house. These were commonly included in burials", dynasty: "Han" },
  { fileName: "han3.jpg", fileCaption: "Green Glazed tripod censer for burning incense", dynasty: "Han" },
  { fileName: "han4.jpg", fileCaption: "Green Glazed model granery", dynasty: "Han" },
  { fileName: "han5.jpg", fileCaption: "Spectacular and finely detailed Green Glazed model pagoda, offering a fascinating window on ancient China", dynasty: "Han" },
  { fileName: "han6.jpg", fileCaption: "Green Glazed jug with faux ring handles", dynasty: "Han" },
  { fileName: "han7.jpg", fileCaption: "Ceramic zither player, unglazed, providing wonderful insight into ancient Chinese culture", dynasty: "Han" },
  { fileName: "han7.jpg", fileCaption: "Ceramic zither player, unglazed, providing wonderful insight into ancient Chinese culture", dynasty: "Han" },
  { fileName: "tang0.jpg", fileCaption: "China Porcelain Guide (Tang Dynasty 618 - 907)", dynasty: "Tang" },
  { fileName: "tang1.jpg", fileCaption: "Sancai (three colored) glazed porcelain horse with rider", dynasty: "Tang" },
  { fileName: "tang2.jpg", fileCaption: "Sancai (three colored) glazed porcelain horse", dynasty: "Tang" },
  { fileName: "tang3.jpg", fileCaption: "Sancai (three colored) glazed porcelain camel", dynasty: "Tang" },
  { fileName: "tang4.jpg", fileCaption: "Sancai (three colored) glazed porcelain slender necked ewer", dynasty: "Tang" },
  { fileName: "tang5.jpg", fileCaption: "Sancai (three colored) glazed porcelain lidded censer", dynasty: "Tang" },
  { fileName: "tang6.jpg", fileCaption: "Sancai (three colored) glazed porcelain camel with bearded rider, representing a foreigner, probably from Central Asia, as would be met along the Silk Road", dynasty: "Tang" }
];

let bigPic = new Image();
bigPic.style.cssText = "width: 100%; height: auto; margin-bottom: 10px";
bigPic.src = `${folder}${slideArr[0].fileName}`;
bigPicDiv.appendChild(bigPic);

footerTxt.innerHTML = slideArr[0].fileCaption;

for (let i = 0; i < slideArr.length; i++) {
    // 1 column layout
    let thumbPic = new Image();
    thumbPic.style.cssText = "width:100px; height: 100px; margin: 10px";
	
    thumbPic.src = `${folder}${slideArr[i].fileName}`;
    thumbPic.id = i; // Assign an ID so we can use it to grab the other information such as fileCaption
    thumbPic.addEventListener('click', swapPic);
    thumbsDiv.appendChild(thumbPic);
	
	
	
	// 2 column layout
	let thumbPic2 = new Image();
    thumbPic2.style.cssText = "width:91%; height: auto; margin: 10px";
	
    thumbPic2.src = `${folder}${slideArr[i].fileName}`;
    thumbPic2.id = i; // Assign an ID so we can use it to grab the other information such as fileCaption
    thumbPic2.addEventListener('click', swapPic);
    thumbsDiv2.appendChild(thumbPic2);
}

function swapPic() {
    if(event) { // was it clicked on?
        
        footerTxt.innerHTML = `${slideArr[event.target.id].fileCaption}`; // caption changes as thumb pic is clicked
        bigPic.src = event.target.src; // target the source of bigPic.src
        
    } else { // event doesn't exist (returns FALSE), so we are in AUTOPLAY
        
        bigPic.src = `${folder}${slideArr[autoplayCount].fileName}`;
        footerTxt.innerHTML = `${slideArr[autoplayCount].fileCaption}`;
        
        // when autoplay calls func there was no 'event'
        if(autoplayCount < slideArr.length-1) {
            autoplayCount++; // increment by 1 so that you get next pic next time
        } else { // you are at the end of the array, out of pics, so reset to 0
            autoplayCount = 0;
        } // end inner if/else
        
    } // end outer if/else
} // end swapPic

var x = window.matchMedia("(min-width: 845px)");
function resize() {
	 if(x.matches) { // 2 columns
         thumbsDiv.style.display = "none";
		 thumbsDiv2.style.display = "block";
		 bigPicDiv.style.width = "73%";
		 bigPicDiv.style.height = "auto";
		 bigPicDiv.style.float = "left";
	} else { // 1 column
        thumbsDiv2.style.display = "none";
		thumbsDiv.style.display = "block";
		bigPicDiv.style.width = "100%";
		bigPicDiv.style.height = "auto";
		bigPicDiv.style.float = "";
	}
}
x.addListener(resize);



