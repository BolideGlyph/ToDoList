$('input:radio[class=activityType]').click(function() {
radioInput = $('input:radio[class=activityType]:checked').val();
});


$('input:radio[class=activityFrequency]').click(function() {
frequencyInput = $('input:radio[class=activityFrequency]:checked').val();
});

/*$('input:select[id=customIntSelect]').click(function() {
selectInput = $('input:select[id=customIntSelect]:text').val();
});*/


$("#submitButton").click(function(e) {
    e.preventDefault();
    textInput = document.getElementById('activity').value;

    if(frequencyInput === "customInterval") {
    perIntervalInput= customperInterval.value + " time(s)";
    } else {
    perIntervalInput= perInterval.value + " time(s)";
	};


	getSelectBoxChoice();
	customValue();
	standardValue();
 	rowValue = intSelectValue + customIntSelectValue;
 	getTableData();
 	renderTable();
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
