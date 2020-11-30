var test="File is loaded correctly."


$(".myResume").hover(
    function(){
        $(this).css("background-color", "#CFE9F2");
        $(this).css("color", "black")},
    function(){
        $(this).css("background-color", "#3BA4C5");
        $(this).css("color", "white")}
)

$(".buttonP1").hover(
    function(){
        $(this).css("background-color", "#CFE9F2");
        $(this).css("color", "black")},
    function(){
        $(this).css("background-color", "#49A380");
        $(this).css("color", "white")}
)

$(".buttonP2").hover(
    function(){
        $(this).css("background-color", "#CFE9F2");
        $(this).css("color", "black")},
    function(){
        $(this).css("background-color", "#7872B8");
        $(this).css("color", "white")}
)

window.onscroll = function() {navScroll()};

function navScroll () {
    if (document.documentElement.scrollTop > 1500){
        $(".navHighlight").css("justify-content", "flex-end");
    }
    else {
        $(".navHighlight").css("justify-content", "flex-start");
    }
}


$(".about").on("click", function(){
    $(document.documentElement).animate({scrollTop:0}, "300");
});


$(".works").on("click", function(){
    $(document.documentElement).animate({scrollTop:1501}, "300");
});