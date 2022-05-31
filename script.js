


if ($(window).width() <= 1199.98) {
   
	let acc = document.getElementsByClassName("tab-text");
	let i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    let panel = this.nextElementSibling;
	    if (panel.style.display === "block") {
	      panel.style.display = "none";
	    } else {
	      panel.style.display = "block";
	    }
	  });
	}
}
else {
   function openTab(evt, tabName) {
	let i, tabdescription, tabtext;
	tabdescription = document.getElementsByClassName("tab-description");
	for (i = 0; i < tabdescription.length; i++) {
		tabdescription[i].style.display = "none";
	}
	tabtext = document.getElementsByClassName("tab-text");
	for (i = 0; i < tabtext.length; i++) {
		tabtext[i].className = tabtext[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
	}

	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
}