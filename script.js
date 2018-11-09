/*global $*/
$(".mainMain").hide();
$(".rowMid2").hide();
$(".mid").css("opacity","1");
var scrollCount = 0;
setTimeout(function(){
    $(".mid").css("transform", "translate(0px,-250px) scale(0.5)");
},2000);
window.onscroll = function() {
    if (scrollCount === 0) {
        scrollCount ++;
        $(".mainMain").show();
        $(".aboutme").hide();
        $(".contact").hide();
        $(".mid").css("opacity","0.5");
    } else if (scrollCount === 1){
        console.log("scroll1");
        scrollCount ++;
        $(".aboutme").show();
    } else if (scrollCount === 2) {
        scrollCount ++;
        $(".contact").show();
    }
};