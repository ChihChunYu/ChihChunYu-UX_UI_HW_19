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
    if (document.documentElement.scrollTop > 3500){
        $(".navContact").css("border-style", "solid");
        $(".navWorks").css("border-style", "none");
        $(".navSkills").css("border-style", "none");
        $(".navSummary").css("border-style", "none");
    }

    else if (document.documentElement.scrollTop > 1560){
        $(".navWorks").css("border-style", "solid");
        $(".navContact").css("border-style", "none");
        $(".navSkills").css("border-style", "none");
        $(".navSummary").css("border-style", "none");
    }

    else if (document.documentElement.scrollTop > 740){
        $(".navSkills").css("border-style", "solid");
        $(".navWorks").css("border-style", "none");
        $(".navContact").css("border-style", "none");
        $(".navSummary").css("border-style", "none");
    }

    else {
        $(".navSummary").css("border-style", "solid");
        $(".navWorks").css("border-style", "none");
        $(".navSkills").css("border-style", "none");
        $(".navContact").css("border-style", "none");
    }
}


$(".navSummary").on("click", function(){
    $(document.documentElement).animate({scrollTop:0}, "300");
});

$(".toTop").on("click", function(){
    $(document.documentElement).animate({scrollTop:0}, "300");
});

$(".navSkills").on("click", function(){
    $(document.documentElement).animate({scrollTop:741}, "300");
});

$(".navWorks").on("click", function(){
    $(document.documentElement).animate({scrollTop:1561}, "300");
});

$(".navContact").on("click", function(){
    $(document.documentElement).animate({scrollTop:3501}, "300");
});