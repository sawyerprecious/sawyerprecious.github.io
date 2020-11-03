var inMotion = false;

var onScreen = 0;

var projShowing = 0;






$(window).resize(function() {

	if ($(this).width() < 1175) {

		setWorkExpSmall();

	} else {

		setWorkExpLarge();

	}

	if (($(this).height() > 500) && ($(this).width() > 750)) {

		setSizeLarge();

  	} else {

  		setSizeSmall();

    }

});

$(window).ready(function() {

	if ($(this).width() < 1175) {

		setWorkExpSmall();

	}

	if (($(this).width() <= 750) || ($(this).height() <= 500)) {

    	smallSize();

	}
});




function setSizeSmall() {
    $('#mobile-warning').show();
}

function setSizeLarge() {
	$('#mobile-warning').hide();
}

function setWorkExpLarge() {

	$(".experience-pic-container").css("margin", "10px");
	$(".experience-pic-container").css("-webkit-transform", "translate(0%, 0%)");
	$(".experience-pic-container").css("transform", "translate(0%, 0%)");

	$(".experience-text-container").css("float", "right");
	$(".experience-text-container").css("width", "calc(70% - 40px)");

}

function setWorkExpSmall() {

	$(".experience-pic-container").css("margin-left", "50%");
	$(".experience-pic-container").css("-webkit-transform", "translate(-50%, 0%)");
	$(".experience-pic-container").css("transform", "translate(-50%, 0%)");

	$(".experience-text-container").css("float", "left");
	$(".experience-text-container").css("width", "100%");

}



function resetInMotion() {
	setTimeout(function(){ 
		inMotion = false; 
	}, 2000);
}




function onAboutClick() {
	if (!inMotion && onScreen != 0) {
		inMotion = true;
		onScreen = 0;

		closeProjDetail();


		$(".section").delay(1000).hide(0);
		$("#about-container").delay(0).show(0);
		$("#main-content").slideUp(1000);
		$("#main-content").slideDown(1000);

		setTimeout(function() {
			$("#main-content").css("background-color", "rgb(105,132,163)");
		}, 1000)

		resetInMotion();
	}
}

function onExperienceClick() {
	if (!inMotion && onScreen != 1) {
		inMotion = true;
		onScreen = 1;

		closeProjDetail();


		$(".section").delay(1000).hide(0);
		$("#exp-container").delay(0).show(0);
		$("#main-content").slideUp(1000);
		$("#main-content").slideDown(1000);

		setTimeout(function() {
			$("#main-content").css("background-color", "rgb(10,29,50)");
		}, 1000);

		resetInMotion();
	}
}

function onProjectsClick() {
	if (!inMotion && onScreen != 2) {
		inMotion = true;
		onScreen = 2;

		closeProjDetail();


		$(".section").delay(1000).hide(0);
		$("#proj-container").delay(0).show(0);
		$("#main-content").slideUp(1000);
		$("#main-content").slideDown(1000);

		setTimeout(function() {
			$("#main-content").css("background-color", "rgb(116, 165, 159)");
		}, 1000);

		resetInMotion();
	}
}

function onInterestsClick() {
	if (!inMotion && onScreen != 4) {
		inMotion = true;
		onScreen = 4;

		closeProjDetail();


		$(".section").delay(1000).hide(0);
		$("#interests-container").delay(0).show(0);
		$("#main-content").slideUp(1000);
		$("#main-content").slideDown(1000);

		setTimeout(function() {

			$("#main-content").css("background-color", "rgb(189, 237, 208)");
		}, 1000);

		

		resetInMotion();
	}
}

function onContactClick() {
	if (!inMotion && onScreen != 5) {
		inMotion = true;
		onScreen = 5;

		closeProjDetail();


		$(".section").delay(1000).hide(0);
		$("#contact-container").delay(0).show(0);
		$("#main-content").slideUp(1000);
		$("#main-content").slideDown(1000);

		setTimeout(function() {
			$("#main-content").css("background-color", "rgb(0,137,137)");
		}, 1000);

		resetInMotion();
	}
}



// email submission
$(function() {
    $(".ajaxForm").submit(function(e) {
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response) {
                if(response.status == "success") {
                    alert("I received your message, thank you!");
                } else {
                    alert("An error occured.");
                }
            }
        });
    });
});




$(function() {
	autosize(document.querySelectorAll('.txt-area-autosize'));
});

window.onload = function () { 
	$('body').addClass('loaded');
}

// $(document).ready(function(){
//  $('body').addClass('loaded');
// });


function onProjInstanceClick(instanceNum) {
	if(projShowing == 0) {

		$("#proj-details").css("display", "block");
		$("#proj" + instanceNum).css("display", "block");
		$("#proj-details").css("opacity", "100");

		$("#overlay").fadeIn(500);

		$("body").css("margin", "0");
		$("body").css("height", "100%");
		$("body").css("overflow", "hidden");

		setTimeout(function() {
			projShowing = instanceNum;
		}, 200);
	}
}

function closeProjDetail() {
	if (projShowing != 0) {

		$("#proj" + projShowing).css("display", "none");
		$("#proj-details").css("display", "none");
		$("#proj-details").css("opacity", "0");

		$("#overlay").fadeOut(500);

		$("body").css("margin", "0");
		$("body").css("height", "100%");
		$("body").css("overflow", "auto");


		projShowing = 0;
	};
}



function showPic(instanceNum) {

	var pic = document.getElementById("int-rowing-pic-" + instanceNum);

	if (pic.style.width === "50%") {
    	pic.style.width = "0px";
  	} else {
    	pic.style.width = "50%";
  	}
}

function showVid() {

	var vid = document.getElementById("windermere-vid");

	if (vid.style.width === "100%") {
    	vid.style.width = "0px";
    	vid.pause();
    	if (vid.hasAttribute("controls")) {
     		vid.removeAttribute("controls")   
  		}
  	} else {
    	vid.style.width = "100%";
    	vid.setAttribute("controls","controls");
  	}
}

function clickedNav(item) {
	if item == 'About' {
		getItemFromDB(item);
		onAboutClick();
		return;
	}
	if item == 'Experience-Section' {
		getItemFromDB(item);
		onExperienceClick();
		return;
	}
	if item == 'Interests-Section' {
		getItemFromDB(item);
		onInterestsClick();
		return;
	}
	if item == 'Projects-Section' {
		getItemFromDB(item);
		onProjectsClick();
		return;
	}
	if item == 'Contact' {
		onContactClick();
		return;
	}
}

// Database

function getItemFromDB(value) {
	alert(firebase.database().once(value));
}
