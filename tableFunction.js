var radioInput = "";
var textInput = "";
var frequencyInput = "";
var perIntervalInput = "";
var selectInput = "";


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

	$("#headerWrapper").append( "<p class=\"tableHeader\">" +
    						    "Every "+ numCustomInt.value + " " + customIntSelect.value + "</p>" +
								"<div class=\"Table\">" +
									"<div class=\"Row\">" +
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
							        "</div>" +
					        	"</div>");


	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();

	});
	}
};




var intSelectValue = "";
var customIntSelectValue = "";

function numericalValue() {
if (frequencyInput === "Daily") {
intSelectValue = 1; }
else if (frequencyInput === "Weekly") {
intSelectValue = 7; }
else if (frequencyInput === "Monthly") {
intSelectValue = 30; }
else if (frequencyInput === "Yearly") {
intSelectValue = 365; }
}


function customNumericalValue() {
if("document.getElementById(\"#customIntSelect\").options === \"days\"") {
customIntSelectValue = 1 * numCustomInt.value; }
else if ("document.getElementById(\"#customIntSelect\").options === \"weeks\"") {
customIntSelectValue = 7 * numCustomInt.value; }
else if ("document.getElementById(\"#customIntSelect\").options === \"months\"") {
customIntSelectValue = 30 * numCustomInt.value; }
else if ("document.getElementById(\"#customIntSelect\").options === \"years\"") {
customIntSelectValue = 365 * numCustomInt.value; }
}




/*var rowChrono = "";

function() {
if(user selects normal interval freq) {
rowChrono = IntSelectValue;
}
if else() {
rowChrono = customIntSelectValue * #customPerInterval.value;
}
}*/

