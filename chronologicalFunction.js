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