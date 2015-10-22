var radioInput = "";
var textInput = "";
var frequencyInput = "";
var perIntervalInput = "";


//FUNCTION USED TO TAKE INPUT FROM FORM AND PUT IT INTO A TABLE ROW

function getTableData() {
	if(frequencyInput === "Daily") {
	$("#daily").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#dailyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "Weekly") {
	$("#weekly").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#weeklyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "Monthly") {
	$("#monthly").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#monthlyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "Yearly") {
	$("#yearly").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#yearlyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "customInterval") {
	$("#custom").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$("#customHeader").append("Every " + numCustomInt.value + " " + customIntSelect.value);
	$('#customHeader').show();

	/*$("#headerWrapper").append("<p id=\"customHeader\" style=\"display:none\" class=\"tableHeader\"></p>" +
"<div id=\"custom\" class=\"Table\"></div>");*/

/*for adding new headers for custom intervals*/


	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();

	});
	}
};



$('input:radio[class=activityType]').click(function() {
radioInput = $('input:radio[class=activityType]:checked').val();
});


$('input:radio[class=activityFrequency]').click(function() {
frequencyInput = $('input:radio[class=activityFrequency]:checked').val();
});


$("#submitButton").click(function(e) {
    e.preventDefault();
    textInput = document.getElementById('activity').value;

    if(frequencyInput === "customInterval") {
    perIntervalInput= customperInterval.value + " time(s)";
    } else {
    perIntervalInput= perInterval.value + " time(s)";
	};

 	getTableData();
 	$("#customIntBox").hide();
 	var resetForm = document.getElementById("activityInput").reset();
 	$('#overlayDiv').hide();
});


$("#cancelButton").click(function(e) {
	e.preventDefault();
	$("#customIntBox").hide();
	$('#overlayDiv').hide();
	var resetForm = document.getElementById("activityInput").reset();
	
});



$('#addActivityButton').click(function(){
	$('#overlayDiv').show();
});



$("#customInterval").click(function(){
	$("#customIntBox").show();
})
