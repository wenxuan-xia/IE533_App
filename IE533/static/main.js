var startTime = 0;
var endTime = 0;
var sequence = [];
var currentStep = 0;

function change_msg() {
    $("#instruction").toggle("slow")
    // $("#instruction").html("<h1>Please help to fill in the form.</h1>")
    $("action-button").addClass("disabled");
    $("#main-content").toggle("slow");
    $("#information").toggle("slow");
}


function next() {
    var nextStep = $("#NextButton").attr("next-step");
}

function start() {
    startTime = new Date().getTime();
    $("#action-button-word").html("STOP");
    $("#action-button").attr("onclick", "end()");
    $("#action-button").removeClass("start-button");
    $("#action-button").addClass("stop-button");
    $("#NextButton").addClass("disabled");
}

function end() {
    endTime = new Date().getTime();
    $("#action-button-word").html("START");
    $("#action-button").attr("onclick", "start()");
    $("#action-button").removeClass("stop-button");
    $("#action-button").addClass("start-button");
    $("#NextButton").removeClass("disabled");

    var milliSecond = endTime-startTime;
    alert("Your Time:   " + milliSecond/1000.0 + " Seconds, result is saved.");
    target = "s" + sequence[currentStep];
    $("#"+target).val(milliSecond/1000.0);
    if (currentStep == 2) {
        currentStep += 1;
        $(".currentStep").html(currentStep+1);
        change_msg();
    } else {
        $("#instruction").toggle("slow");
        currentStep += 1;
        $(".currentStep").html(currentStep+1);
        $(".goal").html(sequence[currentStep]);
        $("#instruction").toggle("slow");
    }

}

$(document).ready( function () {
    // $("#main-content").toggle();
    $("#information").toggle();
    var b = [0, 0, 0];
    var rv = Math.random();
    if (rv<0.33) {
        sequence[0] = 15;
        b[0] = 1;
    } else if (rv<0.66) {
        sequence[0] = 30;
        b[1] = 1;
    } else {
        sequence[0] = 60;
        b[2] = 1;
    }

    rv = Math.random();
    if (rv<0.5) {
        sequence[1] = (b[0]==1) ? 30 : 15;
        if (sequence[1] == 30) {
            b[1] = 1;
        } else {
            b[0] = 1;
        }
    } else {
        sequence[1] = (b[2]==1) ? 30 : 60;
        if (sequence[1] == 30) {
            b[1] = 1;
        } else {
            b[2] = 1;
        }
    }

    if (b[0] == 0) {
        sequence[2] = 15;
    }
    if (b[1] == 0) {
        sequence[2] = 30;
    }
    if (b[2] == 0) {
        sequence[2] = 60;
    }
    // alert(sequence);
    $(".currentStep").html(currentStep+1);
    $(".goal").html(sequence[currentStep]);
})


angular.module('MainApp', ['ngRoute'])
    .controller("FormValidatingController", ['$scope', function($scope) {
        $scope.gender = '';
        $scope.age = '';
        $scope.tech = '';
        $scope.testenv = '';
        $scope.musician = '';

    }])
