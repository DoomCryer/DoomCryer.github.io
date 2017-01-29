/* Author: W&M Creative Services
*/
$(window).load(function() {
    var numTopPhotos = $("#slideshow .slides li").length;
    var randPhoto = Math.floor(Math.random()*numTopPhotos);
    $('#slideshow .flexslider').flexslider({
        animation: "fade",
        controlsContainer: ".flex-container",
        startAt: randPhoto,
        slideshowSpeed: 10000,
        pauseOnHover: true
    });
    /* Hide slideshow nav elements if only one photo */
    if (numTopPhotos == 1) {
        $('#about_photo ul.flex-direction-nav').hide();
        $('#about_photo ol.flex-control-nav').hide();
    }
    // most block have only the flexslider class
    $('.home_block').children('[class=flexslider]').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: false
    });  
    // the featuring block has both flexslider and featuring classes and we want this to start at a random feature
    var numFeatures = $(".featuring li").length;
    var randFeature = Math.floor(Math.random()*numFeatures);  
    $('.home_block .featuring').flexslider({
        startAt: randFeature,
        animation: "fade",
        slideshow: false,
        directionNav: false
    });  
});

function viewport() {
   var e = window, a = 'inner';
   if (!('innerWidth' in window )) {
       a = 'client';
       e = document.documentElement || document.body;
   }
   return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

var bodyWidth = 0;

var mobileView = true;
var smTabletView = false;
var lgTabletView = false;
var desktopView = false;

var wmMenu = undefined;
var menuButton = undefined;
var searchButton = undefined;
var searchInput = undefined;

$(document).ready(function(){ 

	$('.side-menus').mCustomScrollbar({
            theme: "dark-thick",
            scrollInertia: 80,
            scrollButtons:{
                enable:true
            }
        });
    /*** Handle SVGs ***/
    if ($(".no-svg").length != 0) {
        $("img[src$='.svg']").each(function(){
            origSrc = $(this).attr("src");
            $(this).attr("src", origSrc.replace("svg","png"));
        });
    }

    bodyWidth = viewport().width;
    /*wmMenu = $("#top_nav ul");
    menuButton = $("#menu_btn");
    searchButton = $("#search_btn");
    searchInput = $("#search_site");*/
    ltIE8 = ($(".lt-ie8").length > 0);
    
    $("#minor_emergency #close_minor").click(function(){
        $("#minor_emergency div").fadeOut();
        $("#minor_emergency").slideUp();
    });
    
    $("#search_site #q").blur(function(){
        if ($(this).val() == "") {
            $(this).val("Search");
        }
    });
    $("#search_site #q").focus(function(){
        if ($(this).val() == "Search") {
            $(this).val("");
        }
    });
    
    /*menuButton.click(function() {
        if (wmMenu.is(":visible")) {
            wmMenu.slideUp();
        } else {
            if (searchInput.is(":visible")) {
                searchInput.slideUp();
            }
            wmMenu.slideDown();
        }
    });
    searchButton.click(function() {
        if (searchInput.is(":visible")) {
            searchInput.slideUp();
        } else {
            if (wmMenu.is(":visible")) {
                wmMenu.slideUp();
            }
            searchInput.slideDown();
        }
    });*/
    
    
    // SIDE MENU
    var menuLeft = $( '#side_menu' ),
        menuLeftList = $( '#side_menu ul' ),
        navLeft = $( '#side_top_nav' ),
        menuButton = $("#menu_btn"),
        searchButton = $("#search_btn"),
        searchInput = $("#search_site #q"),
        searchInputSide = $("#side_search_site #q"),
        searchInputSubsite = $("#search_subsite #q"),
        pushContent = $('#container'),
        noTouch = $("html").hasClass("no-touch"),
        ltIE7 = ($(".lt-ie7").length > 0),
        addFancyScroll = (noTouch && $(".lt-ie8").length == 0),
        topbar = $('#topbar'),
        topbarHeight = 78; 

        //metaViewport = $('meta[name=viewport]'),
        //originalMeta = $('meta[name=viewport]').attr("content"),

    // hack for touch devices that cut off the bottom of the menu equal to height of the fixed topbar (presumably because we have height at 100%)
    if(!noTouch){
        $(navLeft).css("padding-bottom", topbarHeight+"px");
    }
    // add fancy scroll bar for desktops
    if (addFancyScroll) {
        $(menuLeft).height($(window).height()-topbarHeight+1);
        /*$(menuLeft).mCustomScrollbar({
            theme: "dark-thick",
            scrollInertia: 80,
            scrollButtons:{
                enable:true
            }
        });    */
    }
    // close the side menu by touching off side menu
    /*$('#container').click(function(event) {*/
    $('#slideshow_background, #blocks').click(function(event) { 
        event.stopPropagation();
        if ($(menuButton).hasClass( "active" ) || $(searchButton).hasClass( "active" )) {
            $(menuButton).removeClass( "active" );
            $(searchButton).removeClass( "active" );
            $(topbar).removeClass("topbar-background");
            var s = $(menuLeft).scrollTop();
            if (s > 10) {
                $(menuLeft).animate({scrollTop:0}, '500', function () {
                    $(menuLeft).removeClass( "menu-open" );          
                });
            }
            else {
                $(menuLeft).removeClass( "menu-open" );
            }
            // restore original zoom
            //$(metaViewport).attr("content", originalMeta);       
            return false;
        }
    });
    // hamburger button push
    $(menuButton).click(function(event) {
        event.stopPropagation();
        $(this).toggleClass( "active" );
        $(searchButton).removeClass( "active" );
        $(topbar).removeClass("topbar-background");
        var s = $(menuLeft).scrollTop();
        if (s > 10) {
            $(menuLeft).animate({scrollTop:0}, '500', function () {
                $(menuLeft).toggleClass( "menu-open" );
            });
        }
        else {
            $(menuLeft).toggleClass( "menu-open" );
        }
        console.log("menu click animation complete");
        // restore original zoom or restrict it
        //$(metaViewport).attr("content", originalMeta);
        return false;
    }); 
    // close menu with left swipe 
    $(menuLeftList).swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if ($(menuButton).hasClass( "active" ) || $(searchButton).hasClass( "active" )) {
                $(menuButton).removeClass( "active" );
                $(searchButton).removeClass( "active" );
                $(topbar).removeClass("topbar-background");
                var s = $(menuLeft).scrollTop();
                if (s > 10) {
                    $(menuLeft).animate({scrollTop:0}, '500', function () {
                        $(menuLeft).removeClass( "menu-open" );          
                    });
                }
                else {
                    $(menuLeft).removeClass( "menu-open" );
                }
                // restore original zoom
                //$(metaViewport).attr("content", originalMeta);   
                $(searchInputSide).blur();
                return false;
            }
        }
    });
    $(searchButton).click(function(event) {   
        if ($(searchButton).hasClass( "active" )) {
            $(menuButton).removeClass( "active" );
            $(searchButton).removeClass( "active" );
            $(topbar).removeClass("topbar-background");
            var s = $(menuLeft).scrollTop();
            if (s > 10) {
                $(menuLeft).animate({scrollTop:0}, '500', function () {
                    $(menuLeft).removeClass( "menu-open" );          
                });
            }
            else {
                $(menuLeft).removeClass( "menu-open" );
            }
            // restore original zoom
            //$(metaViewport).attr("content", originalMeta);       
            return false;
        }
        else if ($(menuButton).hasClass( "active" )) {
            //$(metaViewport).attr("content", originalMeta + ",maximum-scale=1");
            $(menuButton).removeClass( "active" );
            $(searchButton).addClass( "active" );
            $(topbar).addClass("topbar-background");
            $(menuLeft).animate({scrollTop:0}, '500');
            $(searchInputSide).focus();
            return false;
        }
        else  {
            // restrict zoom
            //$(metaViewport).attr("content", originalMeta + ",maximum-scale=1");
            $(menuButton).addClass( "active" );
            $(searchButton).addClass( "active" );
            $(topbar).addClass("topbar-background");
            $(menuLeft).addClass( "menu-open" );
            $(menuLeft).animate({scrollTop:0}, '500');
            $(searchInputSide).focus();
            return false;
        }
    });
    $(searchInput).blur(function(){
        if ($(this).val() == "") {
            $(this).val("Search");
        }
    });
    $(searchInput).focus(function(){
        if ($(this).val() == "Search") {
            $(this).val("");
        }
    });
    $(searchInputSide).blur(function(){
        if ($(this).val() == "") {
            $(this).val("search");
        }
    });
    $(searchInputSide).focus(function(){
        if ($(this).val() == "search") {
            $(this).val("");
        } 
        if (addFancyScroll) {
            //$(menuLeft).mCustomScrollbar("scrollTo","top");
        }
    });     
    $(searchInputSubsite).blur(function(){
        if ($(this).val() == "") {
            $(this).val("Search this site");
        }
    });
    $(searchInputSubsite).focus(function(){
        if ($(this).val() == "Search this site") {
            $(this).val("");
        }
    });    
    
    /* double curly bracket link shortcode in photo caption */
    $( ".photo_caption" ).each(function() {
        var oldHtml = $(this).html();
        var newHtml = oldHtml.replace(/\{\{\s*(https*\:\/\/[^\}\,]+)\s*\}\}/g, "<a href=\"$1\">$1</a>");
        var newHtml = newHtml.replace(/\{\{\s*(https*\:\/\/[^\}\,]+)\s*\,{1}\s*([^\}]*)\s*\}\}/g, "<a href=\"$1\">$2</a>");
        $(this).html(newHtml);
    });
    
    bodyWidth = viewport().width;

    /*** setcopyright year in footer ***/
    $("#footercopyyear").text( (new Date).getFullYear() );
    
    
    $(window).resize(function(){
        if (addFancyScroll) {
            $(menuLeft).height($(window).height()-topbarHeight+1);
        }    
        bodyWidth = viewport().width;
        if (bodyWidth <= 940) {
            if (desktopView) { // if transitioning down from desktop view
                desktopView = false;
                smTabletView = false;
                lgTabletView = true;
                mobile = false;
            }
            if (bodyWidth >= 720) { 
                if (!lgTabletView) { // if transitioning to large tablet view
                    //console.log("transition to lg tablet");
                    lgTabletView = true;
                    desktopView = false;
                    smTabletView = false;
                }
            } else { // < 720
                if (!smTabletView && !mobileView) { // is sub-large tablet view
                    lgTabletView = false;
                    desktopView = false;
                }
                if (bodyWidth < 600) { 
                    if (!mobileView) { // go down to mobile version
                        lgTabletView = false;
                        desktopView = false;
                        smTabletView = false;
                        mobileView = true;
                    }
                } else {
                    if (!smTabletView) { // go to lg tablet view
                        lgTabletView = false;
                        desktopView = false;
                        smTabletView = true;
                        mobileView = false;
                    }
                }
            }
        } else if (!desktopView) { // go to desktop view
            desktopView = true;
            lgTabletView = false;
            smTabletView = false;
            mobileView = false;
            
            // if side menu is visible, hide it
            if ($(menuButton).hasClass( "active" )) {
                $(menuButton).removeClass( "active" );
                $(searchButton).removeClass( "active" );
                $(topbar).removeClass("topbar-background");
                $(menuLeft).removeClass( "menu-open" );
                // restore original zoom
                //$(metaViewport).attr("content", originalMeta);
            }        
            
        }
    });    
    
    
});

