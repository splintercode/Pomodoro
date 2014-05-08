﻿var app = angular.module('AgileTasker', ['LocalForageModule']);

app.controller('TimerCtrl', ['$scope', '$localForage', function ($scope, $localForage) {

    //#region Models
    $scope.options = [{ value: 15, label: 15 }, { value: 20, label: 20 }, { value: 25, label: 25 }, { value: 30, label: 30 }];
    $scope.selectedTime = $scope.options[2];
    $scope.currentTime = $scope.selectedTime.value + ":" + "00";
    $scope.localTime = "";
    $scope.taskText = "";
    $scope.isPlaying = false;
    $scope.settingVisible = true;
    //#endregion

    //#region local storage models
    $scope.tasks = [];
    $localForage.bind($scope, {
        key: 'tasks',
        defaultValue: { tasksJSON: ' ' },
        storeName: 'agileTaskStorage'
    });

    $scope.sound = {
        play: true
    };

    $localForage.bind($scope, {
        key: 'sound',
        defaultValue: { play: true }
    });
    //#endregion

    //#region Globals
    var audio = new Audio();
    audio.src = Modernizr.audio.ogg ? 'Content/Audio/chime.ogg' :
                Modernizr.audio.mp3 ? 'Content/Audio/chime.mp3' :
                                      'Content/Audio/chime.m4a';
    var startTime = new Date().toLocaleTimeString();
    var endTime = new Date().toLocaleTimeString();
    var timerInterval = 0;
    var timerDate = new Date();
    timerDate.setMinutes($scope.selectedTime.value);
    timerDate.setSeconds(0);
    //#endregion

    //#region Click Events
    $scope.startTimer = function () {
        resetTimer();
        timerInterval = setInterval(intervalTimer, 1000);
        startTime = new Date().toLocaleTimeString();
        $scope.isPlaying = true;

        if (notify.permissionLevel() === notify.PERMISSION_DEFAULT) {
            notify.requestPermission();
        }
    };

    $scope.stopTimer = function () {
        resetTimer();
        $scope.isPlaying = '';
        document.title = 'Agile Tasker';
    };

    $scope.clearList = function () {
        $scope.tasks = [];
    };

    $scope.toggleSound = function () {
        $scope.sound.play = !$scope.sound.play;
        playSound();
    };
    //#endregion

    //#region Timmer Helper Functons
    setInterval(updateLocalTime, 1000);

    function updateLocalTime() {
        $scope.localTime = toLocalTime(new Date());
        $scope.$apply();
    }

    function toLocalTime(date) {
        var h = date.getHours();
        var m = date.getMinutes();
        var x = h >= 12 ? 'pm' : 'am';
        h = h % 12;
        h = h ? h : 12;
        m = m < 10 ? '0' + m : m;
        var mytime = h + ':' + m + ' ' + x;
        return mytime;
    }

    function intervalTimer() {
        if (timeIsUp()) {
            $scope.stopTimer();
            endTime = new Date().toLocaleTimeString();
            alertNotification();
            saveTaskToHistory();
        } else {
            timerDate.setSeconds(timerDate.getSeconds() - 1);
            $scope.currentTime = getCurrentTime(timerDate);
            document.title = $scope.currentTime;
        }
        $scope.$apply();
    }

    function timeIsUp() {
        return (timerDate.getMinutes() === 0 && timerDate.getSeconds() === 0);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        $scope.currentTime = $scope.selectedTime.value + ":" + "00";
        timerDate.setMinutes(0);  // $scope.selectedOption.value
        timerDate.setSeconds(0);                            // Test Switch 
    }

    function getCurrentTime(currentTime) {
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return minutes + ':' + seconds;
    }
    //#endregion

    //#region Alert/Notification Helper Functions
    function saveTaskToHistory() {
        var _text = "Unknown";
        if ($scope.taskText !== "") {
            _text = $scope.taskText;
        }

        $scope.tasks.push({ start: startTime, stop: endTime, text: _text });
        $scope.taskText = "";
    }

    function alertNotification() {
        vibrationNotification();
        setTimeout(function () { nativeNotification(); playSound(); }, 1600); // Set timeout because html5 Vibrate API does not take a callback ( Alert stops vibration ) :(
    }

    function nativeNotification() {
        if (notify.permissionLevel() === notify.PERMISSION_DEFAULT) {
            notify.requestPermission();
        } else if (notify.permissionLevel() === notify.PERMISSION_GRANTED) {
            notify.createNotification('Agile Task Complete', {
                body: 'Time to take a break!',
                icon: 'Content/icon.png'
            });
        } else if (notify.permissionLevel() === notify.PERMISSION_DENIED) {
            alert("Agile Task Complete");
        } else {
            alert("Agile Task Complete");
        }
    }

    function playSound() {
        if ($scope.sound.play) {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    function vibrationNotification() {
        // enable vibration support
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

        if (navigator.vibrate) {
            navigator.vibrate([500, 200, 500]);
        }
    }
    //#endregion
}]);

app.controller('TimerSizing', ['$scope', function ($scope) {
    jQuery(".current-time").fitText(0.4, { minFontSize: '96px', maxFontSize: '175px' });

    var windowHeight = $(window).height();
    var timmerHeight = $('.timer-box').height();
    if (Modernizr.mq('(min-width: 50em)')) {
        $('.view-main  .task-list').height(windowHeight - timmerHeight - 320 + 'px');
    }

    $(window).resize(function () {
        if (Modernizr.mq('(min-width: 50em)')) {
            windowHeight = $(window).height();
            timmerHeight = $('.timer-box').height();

            $('.view-main  .task-list').height(windowHeight - timmerHeight - 320 + 'px');
        }
        else {
            $('.view-main  .task-list').height('initial');
        }
    });
}]);

//app.service('soundSettings', ['$scope', '$localForage', function ($scope, $localForage) {
//    $scope.sound = {
//        play: true
//    };

//    $localForage.bind($scope, {
//        key: 'sound',
//        defaultValue: { play: true }
//    });

//    return {
//        getObject: function () {
//            return $scope.sound;
//        },
//        setObject: function (value) {
//            $scope.sound = value;
//        }
//    };
//}]);

//app.directive('soundButton', function () {
//    return {
//        restrict: 'E',
//        template: '<i ng-class="{true: "icon-volume-up", false: "icon-volume-off"}[soundSettings.getObject.play]" ng-click="toggleSound()" title="Volume"></i>'
//    };
//});

//app.directive('soundButton', ['$scope', 'soundSettings', function ($scope, soundSettings) {
//    return {
//        restrict: 'E',
//        transclude: true,
//        controller: function ($scope, soundSettings) {
//            $scope.toggleSound = function () {
//                soundSettings.getObject.play = !soundSettings.getObject.play;
//                playSound();
//            };
//        },
//        template:'<i ng-class="{true: "icon-volume-up", false: "icon-volume-off"}[soundSettings.getObject.play]" ng-click="toggleSound()" title="Volume"></i>'
//    };
//}]);

