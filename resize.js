function resize() {
	 if(x.matches) {
		footer.style.padding = "0px 70px";
		footer.style.height = "12vh";
		footerTxt.style.maxWidth = "100%";
		footerTxt.style.fontSize = "2.5vw";
		footerTxt.style.padding = "0px";
		
		footerContent.style.display = "flex";
		footerContent.style.flexDirection = "row-reverse";
		footerContent.style.position = "relative";
		footerContent.style.top = "25px";
		
		durationChooser.style.width = "31px";
		durationChooser.style.maxWidth = "none";
		durationChooser.style.padding = "0px";
		durationChooser.style.fontSize = "2vw";
	} else {
		footer.style.height = "57px";
		footer.style.padding = "0px";
		
		footerTxt.style.fontSize = "2.2vw";
		footerTxt.style.maxWidth = "50%";
		footerTxt.style.marginTop = "22px";
		footerTxt.style.padding = "0px 0px 0px 30px";
		
		footerContent.style.display = "flex";
		footerContent.style.flexDirection = "row-reverse";
		footerContent.style.position = "relative";
		footerContent.style.top = "0px";
		
		autoPlayBtn.style.fontSize = "1.7vw";
		autoPlayBtn.style.padding = "5px 20px";
		
		durationChooser.style.width = "42px";	
		durationChooser.style.maxWidth = "none";
		durationChooser.style.padding = "5px";
		durationChooser.style.fontSize = "2.2vw";
		
		seconds.style.fontSize = "2.2vw";
		seconds.style.marginTop = "20px";
	}
}
resize(y);
resize(x);
y.addListener(resize);
x.addListener(resize);


var f = window.matchMedia("(min-width: 600px)");
function resizeFooter() {
	 if(f.matches) { // 600 or more
		thumbsDiv2.style.display = "none";
		thumbsDiv.style.display = "block";
		bigPicDiv.style.width = "100%";
		bigPicDiv.style.height = "auto";
		bigPicDiv.style.float = "";	 
		
		footer.style.height = "";
		footer.style.height += "10vh";
		 
		footer.style.flexDirection = "row";
		
		footerContent.style.display = "flex";
		footerContent.style.flexDirection = "row-reverse";
		footerContent.style.position = "relative";
		footerContent.style.top = "0px";
		
		footerTxt.style.cssText = "";
		footerTxt.style.cssText += "max-width:52%; font-size:2.4vw; padding:0px 0px 0px 30px; font-family:sans-serif; overflow-x:scroll; white-space:nowrap; position:relative; top:24px";
		
		seconds.style.cssText = "";
		seconds.style.cssText += "font-family:sans-serif; font-size:2.4vw; margin:0px 0px 0px 7px; position:relative; top:4px";
		
		durationChooser.style.margin = "0px";
		durationChooser.style.fontSize = "2.4vw";
		durationChooser.style.padding = "3px";
		 
		autoPlayBtn.style.padding = "8px 18px";
		autoPlayBtn.style.margin = "0px 7px 0px 0px";
//		autoPlayBtn.style.fontSize = "1.4vw";
		
		 
	} else { // less than 600
		bigPicDiv.style.width = "100%";
		footer.style.display = "flex";
		footer.style.flexDirection = "column";
		footer.style.alignItems = "center";
		footer.style.height = "12vh";
		
		footerContent.style.top = "0px";
		
		footerTxt.style.cssText = "";
		footerTxt.style.cssText += "max-width:100%; font-size:2.8vw; padding:0px; margin-top:16px; font-family:sans-serif; overflow-x:scroll; white-space:nowrap; position:relative; top:0px";
		
		seconds.style.fontSize = "2.4vw";
		seconds.style.margin = "0px 0px 0px 7px";
		seconds.style.position = "relative";
		seconds.style.top = "4px";
		
		durationChooser.style.margin = "0px";
		durationChooser.style.fontSize = "2.4vw";
		durationChooser.style.padding = "3px";
		
		autoPlayBtn.style.margin = "0px 7px 0px 0px";
		autoPlayBtn.style.fontSize = "2vw";
		
//		thumbsDiv2.style.display = "none";
//		thumbsDiv.style.display = "block";
//		bigPicDiv.style.width = "100%";
//		bigPicDiv.style.height = "auto";
//		bigPicDiv.style.float = "";
	}
}
resizeFooter(f);
f.addListener(resizeFooter);