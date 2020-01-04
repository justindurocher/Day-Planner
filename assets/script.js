$(document).ready(function(){
var date = moment().format('MMMM Do YYYY, h:mm a');
 $(".currentDate").text(date);
var time = new Date();
var hour = time.getHours();
    getTasks();
    timerinterval();
        if (hour===9){
            $(".nineTime").addClass("current");
            $("#1").addClass("current");
            $("#1").text("Current");
                } else if (hour===10){
                    $(".nineTime").removeClass("current");
                    $(".nineTime").addClass("past");
                    $("#1").removeClass("current");
                    $("#1").addClass("past");
                    $("#1").text("Past");
                    $("#2").addClass("current");
                    $("#2").text("Current");
                    $(".tenTime").addClass("current");
                } else if (hour===11){
                    $(".tenTime").removeClass("current");
                    $(".tenTime").addClass("past");
                    $(".nineTime").addClass("past");
                    $("#1").addClass("past");
                    $("#1").text("Past");
                    $("#2").removeClass("current");
                    $("#2").addClass("past");
                    $("#2").text("Past");
                    $("#3").addClass("current");
                    $("#3").text("Current");
                    $(".elevenTime").addClass("current");
                } else if (hour===12){
                    $(".elevenTime").removeClass("current");
                    $(".elevenTime").addClass("past");
                    $(".tenTime").addClass("past");
                    $(".nineTime").addClass("past");
                    $("#1").addClass("past");
                    $("#1").text("Past");
                    $("#2").addClass("past");
                    $("#2").text("Past");
                    $("#3").removeClass("current");
                    $("#3").addClass("past");
                    $("#3").text("Past");
                    $("#4").addClass("current");
                    $("#4").text("Current");
                    $(".twelveTime").addClass("current");
                } else if (hour===13){
                    $(".twelveTime").removeClass("current");
                    $(".twelveTime").addClass("past");
                    $(".elevenTime").addClass("past");
                    $(".tenTime").addClass("past");
                    $(".nineTime").addClass("past");
                    $("#1").addClass("past");
                    $("#1").text("Past");
                    $("#2").addClass("past");
                    $("#2").text("Past");
                    $("#3").removeClass("current");
                    $("#3").addClass("past");
                    $("#3").text("Past");
                    $("#4").removeClass("current");
                    $("#4").addClass("past");
                    $("#4").text("Past");
                    $("#5").addClass("current");
                    $("#5").text("Current");
                    $(".oneTime").addClass("current");
                } else if (hour===14){
                    $(".oneTime").removeClass("currrent");
                    $(".oneTime").addClass("past");
                    $(".twelveTime").addClass("past");
                    $(".elevenTime").addClass("past");
                    $(".tenTime").addClass("past");
                    $(".nineTime").addClass("past");
                    $("#1").addClass("past");
                    $("#1").val("Past");
                    $("#2").addClass("past");
                    $("#2").val("Past");
                    $("#3").removeClass("current");
                    $("#3").addClass("past");
                    $("#3").val("Past");
                    $("#4").addClass("past");
                    $("#4").val("Past");
                    $("#5").removeClass("current");
                    $("#5").addClass("past");
                    $("#5").val("Past");
                    $("#6").addClass("current");
                    $("#6").val("Current");
                    $(".twoTime").addClass("current");
                } else if (hour===15){
                    $(".twoTime").removeClass("current");
                    $(".twoTime").addClass("past");
                    $(".oneTime").addClass("past");
                    $(".twelveTime").addClass("past");
                    $(".elevenTime").addClass("past");
                    $(".tenTime").addClass("past");
                    $(".nineTime").addClass("past");
                    $("#1").addClass("past");
                    $("#1").val("Past");
                    $("#2").addClass("past");
                    $("#2").val("Past");
                    $("#3").removeClass("current");
                    $("#3").addClass("past");
                    $("#3").val("Past");
                    $("#4").addClass("past");
                    $("#4").val("Past");
                    $("#5").addClass("past");
                    $("#5").val("Past");
                    $("#6").removeClass("current");
                    $("#6").addClass("past");
                    $("#6").val("Past");
                    $("#7").addClass("current");
                    $("#7").val("Current");
                    $(".threeTime").addClass("current");
                } else if (hour===16){
                    $(".threeTime").removeClass("current");
                    $(".threeTime").addClass("past");
                    $(".twoTime").addClass("past");
                    $(".oneTime").addClass("past");
                    $(".twelveTime").addClass("past");
                    $(".elevenTime").addClass("past");
                    $(".tenTime").addClass("past");
                    $(".nineTime").addClass("past");
                    $("#1").addClass("past");
                    $("#1").val("Past");
                    $("#2").addClass("past");
                    $("#2").val("Past");
                    $("#3").removeClass("current");
                    $("#3").addClass("past");
                    $("#3").val("Past");
                    $("#4").addClass("past");
                    $("#4").val("Past");
                    $("#5").addClass("past");
                    $("#5").val("Past");
                    $("#6").addClass("past");
                    $("#6").val("Past");
                    $("#7").removeClass("current");
                    $("#7").addClass("past");
                    $("#7").val("Past");
                    $("#8").addClass("current");
                    $("#8").val("Current");
                    $(".fourTime").addClass("current");
                } else if (hour===17){
                    $(".fourTime").removeClass("current");
                    $(".fourTime").addClass("past");
                    $(".threeTime").addClass("past");
                    $(".twoTime").addClass("past");
                    $(".oneTime").addClass("past");
                    $(".twelveTime").addClass("past");
                    $(".elevenTime").addClass("past");
                    $(".tenTime").addClass("past");
                    $(".nineTime").addClass("past");
                    $("#1").addClass("past");
                    $("#1").val("Past");
                    $("#2").addClass("past");
                    $("#2").val("Past");
                    $("#3").removeClass("current");
                    $("#3").addClass("past");
                    $("#3").val("Past");
                    $("#4").addClass("past");
                    $("#4").val("Past");
                    $("#5").addClass("past");
                    $("#5").val("Past");
                    $("#6").addClass("past");
                    $("#6").val("Past");
                    $("#7").addClass("past");
                    $("#7").val("Past");
                    $("#8").removeClass("current");
                    $("#8").addClass("past");
                    $("#8").val("Past");
                    $("#9").addClass("current");
                    $("#9").val("Current");
                    $(".fiveTime").addClass("current");
                } else {
                    $(".fiveTime").removeClass("current");
                    $(".nineTime").removeClass("past");
                    $(".tenTime").removeClass("past");
                    $(".elevenTime").removeClass("past");
                    $(".twelveTime").removeClass("past");
                    $(".oneTime").removeClass("past");
                    $(".twoTime").removeClass("past");
                    $(".threeTime").removeClass("past");
                    $(".fourTime").removeClass("past");
                    $("#1").removeClass("past");
                    $("#2").removeClass("past");
                    $("#3").removeClass("past");
                    $("#4").removeClass("past");
                    $("#5").removeClass("past");
                    $("#6").removeClass("past");
                    $("#7").removeClass("past");
                    $("#8").removeClass("past");
                    $("#9").removeClass("past");
                }
$(".save1").on("click",function(){
    var v = $("#1").val();
    localStorage.setItem("Task1",v);
})
$(".save2").on("click",function(){
    var v = $("#2").val();
    localStorage.setItem("Task2",v);
})
$(".save3").on("click",function(){
    var v = $("#3").val();
    localStorage.setItem("Task3",v);
})
$(".save4").on("click",function(){
    var v = $("#4").val();
    localStorage.setItem("Task4",v);
})
$(".save5").on("click",function(){
    var v = $("#5").val();
    localStorage.setItem("Task5",v);
})
$(".save6").on("click",function(){
    var v = $("#6").val();
    localStorage.setItem("Task6",v);
})
$(".save7").on("click",function(){
    var v = $("#7").val();
    localStorage.setItem("Task7",v);
})
$(".save8").on("click",function(){
    var v = $("#8").val();
    localStorage.setItem("Task8",v);
})
$(".save9").on("click",function(){
    var v = $("#9").val();
    localStorage.setItem("Task9",v);
})
function getTasks() {
    var task1 = localStorage.getItem("Task1");
    var task2 = localStorage.getItem("Task2");
    var task3 = localStorage.getItem("Task3");
    var task4 = localStorage.getItem("Task4");
    var task5 = localStorage.getItem("Task5");
    var task6 = localStorage.getItem("Task6");
    var task7 = localStorage.getItem("Task7");
    var task8 = localStorage.getItem("Task8");
    var task9 = localStorage.getItem("Task9")
    $("#1").val(task1);
    $("#2").val(task2);
    $("#3").val(task3);
    $("#4").val(task4);
    $("#5").val(task5);
    $("#6").val(task6);
    $("#7").val(task7);
    $("#8").val(task8);
    $("#9").val(task9);
}
function timerinterval() {
    setInterval(function(){
        location.reload();
    }, 60000);
function restart(){
    $("#1").val("");
    $("#2").val("");
    $("#3").val("");
    $("#4").val("");
    $("#5").val("");
    $("#6").val("");
    $("#7").val("");
    $("#8").val("");
    $("#9").val("");
    localStorage.clear();
}
$(".dropdown-toggle").on("click", restart)
}
});