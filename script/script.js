

document.addEventListener("DOMContentLoaded", function(e){

    pcMenuSlide();
    youtubeBackground();
    mobileMenu();
    privacyUsePopup();

})


const privacyUsePopup = () => {
    $('.privacyPopupBtn').click(function(e){
        e.preventDefault();
        $('#privacyPopup').addClass('active');
    })
    $('.privacyPopup .contentWrap .titleBox .closeBtn').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup .contentWrap').click(function(e){
        e.stopPropagation()
    })
}

const youtubeBackground = () => {
    $('[data-vbg]').youtube_background(); // 실행
}

const mobileMenu = () => {
    $('header .slideMenuBtn').click(function(){
        $(this).toggleClass('on');
        $('.mobileMenu').slideToggle();
        $('header').toggleClass('whiteBg');
    })
}
const pcMenuSlide = () => {
    const header = $('header');
    const menuItems = $('header .menuList .item');
    const menuLi = $('header .menuList > li');

    menuItems.on('mouseenter', function () {
        header.addClass('on');
        menuLi.find('.subMenu').stop(true, true).slideUp();
        const index = $(this).closest('li').index();
        menuLi.eq(index).find('.subMenu').stop(true, true).slideDown();
    });

    // header 전체에서 마우스가 벗어나면
    header.on('mouseleave', function () {
        header.removeClass('on');
        $('header .subMenu').stop(true, true).slideUp();
    });
}

