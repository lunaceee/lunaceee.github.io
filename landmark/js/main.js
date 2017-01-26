$(document).ready(function(){
    //created show-time carousel
    $('#show-time-carousel').carousel({
        full_width: true,
    });
    //set auto-play for show-time carousel
    // setInterval(function(){
    //     $('#show-time-carousel').carousel('next');
    // },4000)
    

    //import home page location carousel
    $('#coming-soon-carousel').carousel({
        dist: 0,
        padding: 20,
    });


    //location carousel
    $('#location-carousel').carousel({
        dist: 0,
        padding: 100,
    });

    //import parallax
    $('.parallax').parallax();

// scroll magic init controller
var controller = new ScrollMagic.Controller();

var initialScene = new ScrollMagic.Scene({
    offset: 1,
})
.on("leave", function () {
    $("#preloader-day").css({"background-image":"url(css/images/day-theatre.svg)","transition":"all 2s ease-in-out"});
    $(".loading-bg").css({"background-color":"#ebe2d0","transition":"all 2s ease-in-out"});
    $("nav ul a").css("color","#795548");

})
.addTo(controller);

//sceneLoading preloading theatre image
var sceneLoading = new ScrollMagic.Scene({
  offset:2,
  duration: "100%"
})
.on("enter", function () {
		// trigger animation by changing inline style.
		//preloaderDay.style.backgroundImage = "/css/images/preloader-night.svg";
	$("#preloader-day").css({"background-image":"url(css/images/night-theatre.svg)","transition":"all 2s ease-in-out"});
    $(".loading-bg").css({"background-color":"#535352","transition":"all 2s ease-in-out"});
    $("nav ul a").css("color","#BDBDBD");

})

// .on("leave",function(){
//     $("#preloader-day").css("background-image","url(/css/images/day-theatre.svg)");
//     $(".loading-bg").css("background-color","#ebe2d0");

// })
.setPin("#sceneLoading",{pushFollowers:true})
.addIndicators({name: "sceneLoading"}) 
.addTo(controller);


//sceneHomenav navbar
var sceneHomenav = new ScrollMagic.Scene({

    triggerElement: "#sceneHomenav",
    loglevel: 3,
    // duration: 300,
    triggerHook: 0,
})
.on("enter",function(){
    $("#home-navcolor").css("background-color","rgba(0, 0, 0, 0.2)")
})
.on("leave",function(){
    $("#home-navcolor").css("background-color","none")
    // $("nav ul a").css("color","#A8763E")
})
.setPin("#sceneHomenav",{pushFollowers: false})
.addIndicators({name: "sceneHomenav"}) 
.addTo(controller);

//sceneShowtime, now playing
var sceneShowtime = new ScrollMagic.Scene({
    triggerElement:"#sceneShowtime",
    triggerHook: 0,
    duration: "100%"
    
})
.on("enter",function(){
    $("#home-navcolor").css({"background-color":"rgba(33, 33, 33, 0.2)","transition":"all 1s ease-in-out"})
    $("#home-navcolor ul a").css("color","#FFFFFF")
})
.setPin("#sceneShowtime",{pushFollowers: true})
.addIndicators({name: "sceneShowtime"}) 
.addTo(controller);


// sceneComingsoon, coming soon
var sceneComingsoon = new ScrollMagic.Scene({
    triggerElement:"#sceneComingsoon",
    triggerHook: 0,
    duration:"100%"

})

.on("enter",function(){
    $(".poster-effect").css({"border":"10px solid #FFC107","transition":"all 1s ease-in-out"})
    $("#awning").css({"height":"30px","transition":"all 1s ease-in-out"})
    $("#awning-2").css({"border-top":"20px solid #ef6c00","transition":"all 1s ease-in-out"})
    $("#awning-2").css({"border-left":"50px solid transparent","transition":"all 1s ease-in-out"})
    $("#awning-2").css({"border-right":"50px solid transparent","transition":"all 1s ease-in-out"})})

.on("leave",function(){
    $(".poster-effect").css({"border":"0px solid","transition":"all 1s ease-in-out"})
    $("#awning").css({"height":"0px !important","transition":"all 1s ease-in-out"})
    $("#awning-2").css({"border-top":"0px solid !important","transition":"all 1s ease-in-out"})
    $("#awning-2").css({"border-left":"0px solid !important","transition":"all 1s ease-in-out"})
    $("#awning-2").css({"border-right":"0px solid !important","transition":"all 1s ease-in-out"})


})

.setPin("#sceneComingsoon",{pushFollowers: true})
.addIndicators({name: "sceneComingsoon"}) 
.addTo(controller);


//sceneEvents, landmark exclusives
var sceneEvents = new ScrollMagic.Scene({
    triggerElement:"#sceneEvents",
    triggerHook: 0,
    duration:"100%"

})
.on("enter",function(){
    $("#sceneEvents").css("transition","all 1s east-in-out")
    $("body").css({"background-image":"#FF5252","transition":"all 1s ease-in-out"})
})


.setPin("#sceneEvents",{pushFollowers: true})
.addTo(controller);

//sceneLocation, Our locations
var sceneLocation = new ScrollMagic.Scene({
    triggerElement:"#sceneLocations",
    triggerHook: 0,
    duration:"100%"

})
.on("enter",function(){
    $("#sceneLocations").css("transition","all 1s east-in-out")
    $("body").css({"background-color":"white","transition":"all 1s ease-in-out"})

})


.setPin("#sceneLocations",{pushFollowers: true})
.addTo(controller);





  });//scroll magic closing tag



  

