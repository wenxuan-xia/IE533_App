var startTime = 0;
var endTime = 0;

function next() {
    var nextStep = $("#NextButton").attr("next-step");
    alert(nextStep);
}

function start() {
    startTime = new Date().getTime();
    $("#action-button-word").html("STOP");
    $("#action-button").attr("onclick", "end()");
}

function end() {
    endTime = new Date().getTime();
    $("#action-button-word").html("START");
    $("#action-button").attr("onclick", "start()");
    var milliSecond = endTime-startTime;
    alert("Your Time:    " + milliSecond/1000.0 + " Second"); 
}
