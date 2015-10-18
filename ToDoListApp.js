var radioInput = "";
var textInput = "";
var frequencyInput = "";

//function getTableData() {
//$('#activityTable > tbody:first').append("<tr> <td>" + textInput + "</td> <td>" + radioInput + "</td> </tr> <br>");
//};

function getTableData() {
if(frequencyInput === "Daily") {
$("#daily").append("<tr> <td>" + textInput + "</td> <td>" + radioInput + "</td> </tr>");
}
else if(frequencyInput === "Weekly") {
$("#weekly").append("<tr> <td>" + textInput + "</td> <td>" + radioInput + "</td> </tr>");
}
else if(frequencyInput === "Monthly") {
$("#monthly").append("<tr> <td>" + textInput + "</td> <td>" + radioInput + "</td> </tr>");
}
else if(frequencyInput === "Yearly") {
$("#yearly").append("<tr> <td>" + textInput + "</td> <td>" + radioInput + "</td> </tr>");
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
 	$('#activityInput').hide();
});



$('#addActivityButton').click(function(){
	$('#activityInput').show();
});




