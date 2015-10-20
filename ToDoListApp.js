var radioInput = "";
var textInput = "";
var frequencyInput = "";


//function getTableData() {
//$('#activityTable > tbody:first').append("<tr> <td>" + textInput + "</td> <td>" + radioInput + "</td> </tr> <br>");
//};

function getTableData() {
if(frequencyInput === "Daily") {
$("#daily").append("<div class=\"Row\">" +
			        "<div class=\"Cell\">" +
			            "<p>" + textInput + "</p>" +
			        "</div>" +
			        "<div class=\"Cell\">" +
			            "<p>" + radioInput + "</p>" +
			        "</div>" +
			        "<div class=\"Cell\">" +
			            "<button class=\"deleteButton\">Delete</button>" +
			        "</div>" +
			        "</div>");

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
			            "<p>" + radioInput + "</p>" +
			        "</div>" +
			        "<div class=\"Cell\">" +
			            "<button class=\"deleteButton\">Delete</button>" +
			        "</div>" +
			        "</div>");

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
			            "<p>" + radioInput + "</p>" +
			        "</div>" +
			        "<div class=\"Cell\">" +
			            "<button class=\"deleteButton\">Delete</button>" +
			        "</div>" +
			        "</div>");

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
			            "<p>" + radioInput + "</p>" +
			        "</div>" +
			        "<div class=\"Cell\">" +
			            "<button class=\"deleteButton\">Delete</button>" +
			        "</div>" +
			        "</div>");

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
 	getTableData();
 	var resetForm = document.getElementById("activityInput").reset();
 	$('#overlayDiv').hide();
});


$("#cancelButton").click(function(e) {
	e.preventDefault();
	$('#overlayDiv').hide();
});


$('#addActivityButton').click(function(){
	$('#overlayDiv').show();
});


$('.deleteButton').click(function(){
   $(this).parent().parent().remove();
});
