$(document).ready(function () {

    // Menu Fade

    var fader = $('.scroll header .headernav .btn button');
    var menuFade = $('.fixed');
    var icon = $('.fixed .icon i');

    fader.click(function(){
        menuFade.css({
            left: 0,
            transition: '400ms'
        })
    })
    icon.click(function(){
        menuFade.css({
            left: '-350px',
            transition: '400ms',
        })
    })



    // Icon Color Changer

    icon.mouseover(function(){
        $(this).css({
            color: '#07CB79FF',
            transition: '300ms'
        })
    })
    icon.mouseout(function(){
        $(this).css({
            color: '#fff',
            transition: '300ms'
        })
    })

    // Div Train

    var trainer = $('.fixed .nav li a');
    var train = $('.fixed .nav li .train')

    trainer.click(function () {
        train.removeClass('active');
        $(this).prev().addClass('active');

        trainer.removeClass('fader');
        $(this).addClass('fader');
    })


    trainer.mouseover(function () {
        $(this).prev().css({
            transform: 'translateX(-40px)',
            transition: '400ms'
        })
        $(this).css({
            color: '#07CB79FF',
            transition: '400ms'
        })
    })
    trainer.mouseout(function () {
        $(this).prev().css({
            transform: 'translateX(-70px)',
            transition: '400ms'
        })
        $(this).css({
            color: '#fff',
            transition: '400ms'
        })
    })

    // Typed

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 45
    });

    // Btn Up

    var btn = $('.scroll header .headernav .btn')

    btn.mouseover(function () {
        btn.css({
            transform: 'translateY(-8px)',
            transition: '300ms'
        })
    })
    btn.mouseout(function () {
        btn.css({
            transform: 'translateY(0)',
            transition: '300ms'
        })
    })

    // Img Border

    var img = $('.scroll section .section_about .profile_img img');
    var profile = $('.scroll section .section_about .profile_img')
    
    img.mouseover(function(){
        profile.css({
            background: '#07CB79FF',
            transition: '400ms'
        })
    })

    img.mouseout(function(){
        profile.css({
            background: 'none',
            transition: '400ms'
        })
    })

    // Icons Color Changer

    var pulse = $('.scroll section .section_about .info .social a');

    pulse.mouseover(function(){
        $(this).css({
            color: '#fff',
            transition: '400ms'
        })
    })
    

    pulse.mouseout(function(){
        $(this).css({
            color: '#999',
            transition: '500ms'
        })
    })

    // BTn Active

    var btact = $('.scroll section .section_portfolio .nav button');

    btact.click(function(){
        btact.removeClass('btact');
        $(this).addClass('btact');
    })






})