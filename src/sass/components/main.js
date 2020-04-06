var $s = jQuery,
    winWidth = $s(window).width();

function initBgCover(e) {
    e || (e = jQuery("body")), e.find(".bg-cover").each(function() {
        var e = jQuery(this),
            t = e.find("> img").hide().prop("src");
        e.css({
            backgroundImage: "url(" + t + ")"
        })
    })
}

function viewPortWidth() {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(e)
    }
}
$s(window).load(function() {
    $s(".review-slider").on("setPosition", function() {
        $s(this).find(".col-lg-4").height("auto");
        var e = $s(this).find(".slick-track"),
            t = $s(e).height();
        $s(this).find(".col-lg-4").css("height", t + "px")
    })
}), $s(function() {
    initBgCover(), viewPortWidth()
}), $s(document).ready(function(e) {
    jQuery("#gform_submit_button_7").click(function() {
        var e = jQuery("#input_7_1").val(),
            t = jQuery("#input_7_3").val(),
            i = jQuery("#input_7_4").val();
        jQuery("#input_9_14").val(e), jQuery("#input_9_15").val(t), jQuery("#input_9_16").val(i)
    }), jQuery(".select-checkbox select").multipleSelect({
        placeholder: "Services you are interested in",
        width: "99%",
        multiple: !0,
        multipleWidth: "100%"
    }), jQuery(document).on("gform_confirmation_loaded", function(e, t) {
        7 == t && (jQuery("#second-step").show(), jQuery("#first-step").hide())
    }), jQuery(document).on("gform_post_render", function() {
        jQuery(".select-checkbox select").multipleSelect({
            placeholder: "Services you are interested in",
            width: "99%",
            multiple: !0,
            multipleWidth: "100%"
        })
    }), $s(".toggle-menu-btn").click(function() {
        $s("body").toggleClass("menu-open")
    }), $s(".js-story-more").on("click", function(e) {
        e.preventDefault(), jQuery(".widget-description .show-more-text").slideDown(), jQuery(this).hide()
    }), $s(".widget-team .widget-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplaySpeed: 2e3,
        autoplay: !0,
        arrows: !1,
        dots: !0,
        pauseOnHover: !1,
        pauseOnDotsHover: !0,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    }), $s(".single-item-slider").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1e3,
        autoplay: !0,
        autoplaySpeed: 1e3,
        dots: !1,
        fade: !0
    }), winWidth < 768 ? jQuery("#tabCarousel").carousel({
        interval: !1,
        pause: !0
    }) : jQuery("#tabCarousel").carousel({
        interval: 4e3,
        mode: "fade"
    });
    var t = !1;
    $s("#tabCarousel").on("click", ".nav a", function() {
        t = !0, $s(".nav li").removeClass("active"), $s(this).parent().addClass("active")
    }).on("slid.bs.carousel", function(e) {
        if (!t) {
            var i = $s(".nav").children().length - 1,
                s = $s(".nav li.active");
            s.removeClass("active").next().addClass("active"), i == parseInt(s.data("slide-to")) && $s(".nav li").first().addClass("active")
        }
        t = !1
    }), $s(".js-result-selector").on("change", function() {
        var e = this.value;
        $s(".nav-pills li." + e).trigger("click")
    }), $s(window).scroll(function() {
        jQuery(window).scrollTop() > 0 ? $s(".site-header").addClass("position-fixed") : $s(".site-header").removeClass("position-fixed")
    }), $s(".review-slider").slick({
        lazyLoad: 'ondemand',
        centerMode: !0,
        infinite: !0,
        adaptiveHeight: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 1e3,
        pauseOnHover: !1,
        pauseOnDotsHover: !0,
        draggable: !1,
        dots: !1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                draggable: !0,
                centerMode: !1
            }
        }]
    }), winWidth < 992 && $s(".menubar-toggle").on("click", function() {
        $s(this).toggleClass("opened"), $s(this).next(".dropdown-items").toggleClass("is-active")
    }), winWidth < 1200 && ($s(".service-items").addClass("img-slider"), $s(".img-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        autoplay: !0,
        dots: !1,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 435,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })), $s("#typed").length && new Typed("#typed", {
        stringsElement: "#typed-items",
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 500,
        startDelay: 1e3,
        loop: !0
    }), $s("#getStart .gform_title").html('<span class="font-semi-bold">Get</span> Started'), $s(".video-btn, .play-btn").click(function() {
        _videoSrc = jQuery(this).data("src")
    }), $s("#videoModal").on("shown.bs.modal", function(e) {
        $s("#video").attr("src", _videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1")
    }), $s("#videoModal").on("hide.bs.modal", function(e) {
        $s("#video").attr("src", _videoSrc)
    }), 0 == GetIEVersion() && winWidth > 1199 && $s(".js-tilt").tilt({}); /*var hqyLazy = new HqyLazyload({elements: document.querySelectorAll('.lazyload')});*/
}), (wow = new WOW({
    animateClass: "animated",
    offset: 100,
    callback: function(e) {}
})).init();
for (var $body = $s("body"), $box = $s(".boxes"), i = 0; i < 20; i++) $box.clone().appendTo($body);
WOW.prototype.addBox = function(e) {
    this.boxes.push(e)
};
var wow = new WOW;

function inits() {
    for (var e = document.getElementsByTagName("iframe"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
}

function GetIEVersion() {
    var e = window.navigator.userAgent,
        t = e.indexOf("MSIE");
    return t > 0 ? parseInt(e.substring(t + 5, e.indexOf(".", t))) : navigator.userAgent.match(/Trident\/7\./) ? 11 : 0
}
wow.init(), window.onload = inits;