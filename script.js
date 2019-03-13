// $(window).ready(function(){
//     scrollNav();
// })
// $(window).scroll(function(){
//     scrollNav();
// })

function scrollNav(){
    if ($(window).scrollTop() > 300){
        $('#hamburger').find('div').addClass('black-background');
        $('#hamburger').find('div').removeClass('white-background');
    } else {
        $('#hamburger').find('div').addClass('white-background');
        $('#hamburger').find('div').removeClass('black-background');
    }
}

$(function() {
    $('#hamburger').on('click', function(){
        showMenu();
        var bar1 = $("#hb-bar1");
        var bar2 = $("#hb-bar2");
        var bar3 = $("#hb-bar3");

        if (bar1.hasClass('bar1-animate') || bar1.hasClass('bar1-animate--reverse')){
            bar1.toggleClass('bar1-animate--reverse').toggleClass('bar1-animate');
            bar2.toggleClass('bar2-animate--reverse').toggleClass('bar2-animate');
            bar3.toggleClass('bar3-animate--reverse').toggleClass('bar3-animate');
        } else{
            bar1.addClass("bar1-animate");
            bar2.addClass("bar2-animate");
            bar3.addClass("bar3-animate");
        }
    });
});

// Display menu
function showMenu() {
    $("#menu").slideToggle(500, "swing");
    $('.menu-option_container').fadeToggle(500);
    $("body").toggleClass("no-scroll");
    menuPosition();
}
//Menu positioning
function menuPosition(){
    var marginV = ($(window).height() - $('.menu_container').height()) / 2;
    var marginH = ($(window).width() - $('.menu_container').width()) / 2;
    if (marginH > 350){
        marginH = $(window).width() * 0.2;
    }
    $('.menu_container').css({'margin': marginV +'px ' + marginH + 'px'});
}
// hide menu and go to selected section
function menuButtons(id){
    $("#hamburger").click();
    scrollFunc(id);
}
// menu option underline
$('.menu-option_container').hover(function(){
    $(this).find('.menu_dash__inner').addClass('menu_dash__inner--hover');
}, function(){
    $(this).find('.menu_dash__inner').removeClass('menu_dash__inner--hover');
});

function showFAQ(a){
    var element = "faq" + a
    var answer = document.getElementById(element)
    if (answer.classList.contains('hidden')){
        answer.classList.remove('hidden')
    }else{
        answer.classList.add('hidden')
    }
}