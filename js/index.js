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
        $(this).css("background-color", "#3BA4C5");
        $(this).css("color", "white")}
)

$(".buttonP2").hover(
    function(){
        $(this).css("background-color", "#CFE9F2");
        $(this).css("color", "black")},
    function(){
        $(this).css("background-color", "#3BA4C5");
        $(this).css("color", "white")}
)

window.onscroll = function() {navScroll()};

function navScroll () {
    if (document.documentElement.scrollTop > $(".sectionNameFooter").offset().top -300){
        $(".navContact").css("border-style", "solid");
        $(".navWorks").css("border-style", "none");
        $(".navSkills").css("border-style", "none");
        $(".navSummary").css("border-style", "none");
    }

    else if (document.documentElement.scrollTop > $(".sectionNameWorks").offset().top -61){
        $(".navWorks").css("border-style", "solid");
        $(".navContact").css("border-style", "none");
        $(".navSkills").css("border-style", "none");
        $(".navSummary").css("border-style", "none");
    }

    else if (document.documentElement.scrollTop > $(".sectionNameSkills").offset().top -51){
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



$(".toTop").on("click", function(){
    $(document.documentElement).animate({scrollTop:0}, "300");
});


$(".navSummary").on("click", function(){
    $(document.documentElement).animate({scrollTop:$(".sectionSummary").offset().top}, "300");
});

$(".navSkills").on("click", function(){
    $(document.documentElement).animate({scrollTop:$(".sectionNameSkills").offset().top -50}, "300");
});

$(".navWorks").on("click", function(){
    $(document.documentElement).animate({scrollTop:$(".sectionNameWorks").offset().top -60}, "300");
});

$(".navContact").on("click", function(){
    $(document.documentElement).animate({scrollTop:$(".sectionNameFooter").offset().top -60}, "300");
});




var divHeight = $(".project1Content").height(); 
$('.project1Front').css('min-height', divHeight+'px');

var divHeight = $(".project1Content").height(); 
$('.project1').css('min-height', divHeight+'px');


var divHeight = $('.project2Content').height(); 
$('.project2Front').css('min-height', divHeight+'px');

var divHeight = $('.project2Content').height(); 
$('.project2').css('min-height', divHeight+'px');






var card1 = document.querySelector(".card1");

card1.addEventListener("click", function() {
  card1.classList.toggle("is-flipped");
});

var card2 = document.querySelector(".card2");

card2.addEventListener("click", function() {
  card2.classList.toggle("is-flipped");
});