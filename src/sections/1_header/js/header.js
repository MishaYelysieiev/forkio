$(document).ready(function () {
    $('#burger-menu').click(()=>{
        $('.header__navbar').toggleClass('header__navbar_active');
        $('.header__burger-menu').toggleClass('header__burger-menu_crossed')
    })
    $('.header__navbar li').click((e)=>{
        $('.header__navbar-item_active').removeClass('header__navbar-item_active');
        $(e.target).addClass('header__navbar-item_active');
    })
})