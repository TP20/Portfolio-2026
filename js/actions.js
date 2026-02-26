// var disabledButton = "";
// var disabledButtonMobile = "";

var SetVisibilityFor = (function () {

    function displayNavBar (element) {
      if (element === "#homePage_Mobile") {
        document.getElementById("navigationBar").style.display = "none";
      }
      else {
        document.getElementById("navigationBar").style.display = "flex";
      }
    }

    function desktopPage (nextPageId, currentPageId) {
      $(currentPageId).fadeOut("slow");
      $(nextPageId).delay(1000).fadeIn("slow");
      document.querySelector(".zoom-moz").style.transform = "scale(0.99)";
      if (nextPageId == "#homePage") {
        document.querySelector(".zoom-moz").style.transform = "scale(0.8)";

      }
    
    }

    function mobilePage (nextPageId) {
      var mobilePages = ["aboutPage_Mobile", "projectPage_Mobile", "contactPage_Mobile", "homePage_Mobile", "experiencePage_Mobile"];
      for (var c=0; c< mobilePages.length; c++) {
        if (document.getElementById(mobilePages[c]).style.display === 'block') {
          $(".navbar-collapse").removeClass("in");
          $("#"+mobilePages[c]).css("display","none");
          $(nextPageId).fadeIn("slow");
          displayNavBar(nextPageId);
          $(nextPageId).css("display","block");
          SetBackgroundColor.page();
          document.querySelector("#overlay").style.display="none";
          document.querySelector("#nav-content").style.left = "-40rem";
          //document.querySelector("#hamburger-icon").style.display = "block";
          document.querySelector(".navBurger-container").style.display = "block";
       //   document.querySelector(".navBurger").style.background = "white";
       document.querySelector(".navBurger-container").style.marginLeft="10px";
       document.querySelectorAll(".navBurger")[0].style.background = "black";
       document.querySelectorAll(".navBurger")[0].style.transform = "rotate(0deg)";
        document.querySelectorAll(".navBurger")[0].style.top = "0";
       document.querySelectorAll(".navBurger")[1].style.background = "black";
       document.querySelectorAll(".navBurger")[1].style.transform = "rotate(0deg)";
        document.querySelectorAll(".navBurger")[1].style.top = "0";
    
       document.querySelectorAll(".navBurger")[2].style.background = "black";
       document.querySelectorAll(".navBurger")[2].style.display = "block";



        }
      }
    }

    return {
      desktopPage : desktopPage,
      mobilePage : mobilePage
    }
})();

var SetBackgroundColor = (function () {
    return {
      page : function () {
        if (document.getElementById("homePage_Mobile").style.display === "block") {
            $("body").css("background-color","white");
        }
        else {
           // $("body").css("background-color","white");
            document.querySelector(".zoom-moz").style.background = "linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)),url('images/collage.jpg')";
        }
      }
    }
})();

var mobileIcons = (function () {
    return {
      setDimensions : function () {
        var iconWidth = ($(window).width()/2) - 5;
        $(".homePage_Icon").css("width", iconWidth+"px");
        $(".homePage_Icon").css("height", iconWidth+"px");
        $(".mobile-carousel-inner").css("width", (iconWidth-0.5)+"px");
        $(".mobile-carousel-inner").css("height", (iconWidth-0.5)+"px");
      }
    }
})();

var SetTemplate = (function () {

    function setLaptopPosition() {
      var WINDOWHEIGHT = $(window).height();
      var WINDOWWIDTH = $(window).width();
      var LAPTOPHEIGHT = $("#laptopImage").height();

      document.getElementById('laptopImage').style.marginTop = ((WINDOWHEIGHT-LAPTOPHEIGHT)/2) - 15+"px";
    	document.getElementById('laptopImage').style.marginBottom = ((WINDOWHEIGHT-LAPTOPHEIGHT)/2) - 10+"px";
    }

    function setNavBarVisibility (currentPage) {
      if (currentPage === "homePage") {
        SetVisibility.toNone("navigationBar");
      }
      else {
        SetVisibility.toFlex("navigationBar");
      }
    }

    function mobilePage () {
      var desktopElements = ["homePage","projectPage","experiencePage","aboutPage"];
      for (c=0; c<desktopElements.length; c++) {
        if(document.getElementById(desktopElements[c]).style.display === "block") {
            SetVisibility.toNone(desktopElements[c]);
            SetVisibility.toNone("desktopVersion");
            SetVisibility.toBlock("mobileVersion");
            SetVisibility.toBlock(desktopElements[c]+"_Mobile");
            if(desktopElements[c] !== "homePage") {
              document.querySelector(".zoom-moz").style.background = "url(Images/collage.jpg";
            }
            setNavBarVisibility(desktopElements[c]);
            SetBackgroundColor.page();
        }
      }
    }

    function desktopPage () {
      setLaptopPosition();
      var mobilePages = ["projectPage_Mobile", "homePage_Mobile", "experiencePage_Mobile", "contactPage_Mobile", "aboutPage_Mobile"];
      for (c =0; c< mobilePages.length; c++) {
        if (document.getElementById(mobilePages[c]).style.display === 'block') {
            SetVisibility.toNone('mobileVersion');
            SetVisibility.toNone(mobilePages[c]);
            SetVisibility.toBlock('desktopVersion');
            SetVisibility.toBlock(mobilePages[c].substring(0,mobilePages[c].indexOf('_')));
            SetBackgroundColor.page();
            document.querySelector(".zoom-moz").style.background = "white";
        }
      }
    }

    return {
      mobilePage: mobilePage,
      desktopPage: desktopPage
    }
})();

function setPositionForContactModal () {
    document.getElementById("modalContent").style.marginTop =  $(window).height()/2 - 128 +"px";
}

function displayNav() {
  //if (document.querySelector("#nav-content").style.width == "0%") {

  if (document.querySelector("#nav-content").style.left == "-40rem") {
   
   // document.querySelector("#nav-content").style.left = "0";

   // document.querySelector("#nav-content").style.width = "70%";
    document.querySelector("#nav-content").style.height = "100%";
    document.querySelector("#overlay").style.display="block";
    //document.querySelector(".navBurger-container").style.marginLeft="80%";
    document.querySelectorAll(".navBurger")[0].style.background = "white";
    document.querySelectorAll(".navBurger")[0].style.transform = "rotate(405deg)";
    document.querySelectorAll(".navBurger")[0].style.top = "5px";
    document.querySelectorAll(".navBurger")[1].style.background = "white";
    document.querySelectorAll(".navBurger")[1].style.transform = "rotate(-45deg)";
    document.querySelectorAll(".navBurger")[1].style.top = "-2px";
    document.querySelectorAll(".navBurger")[2].style.background = "white";
    document.querySelectorAll(".navBurger")[2].style.display = "none";
   // document.querySelector(".navBurger-container").style.marginLeft="80%";
    setTimeout(function() {
      document.querySelector("#nav-content").style.left = "0";
      document.querySelector(".navBurger-container").style.marginLeft="80%";


    },500);

   // document.querySelectorAll(".navBurger")[2].style.transform = "rotate(-30deg)";



    //document.querySelector("#hamburger-icon").style.display="none";
    //document.querySelector(".navBurger-container").style.display="none";


  }
  else {
    document.querySelector("#nav-content").style.left = "-40rem";
    //document.querySelector("#nav-content").style.display = "none";
    //document.querySelector("#nav-content").style.width = "0%";
    document.querySelector("#overlay").style.display="none";
   // document.querySelector("#hamburger-icon").style.display="block";
   //document.querySelector(".navBurger-container").style.display="block";
   document.querySelector(".navBurger-container").style.marginLeft="10px";
   document.querySelectorAll(".navBurger")[0].style.background = "black";
   document.querySelectorAll(".navBurger")[0].style.transform = "rotate(0deg)";
    document.querySelectorAll(".navBurger")[0].style.top = "0";
   document.querySelectorAll(".navBurger")[1].style.background = "black";
   document.querySelectorAll(".navBurger")[1].style.transform = "rotate(0deg)";
    document.querySelectorAll(".navBurger")[1].style.top = "0";

   document.querySelectorAll(".navBurger")[2].style.background = "black";
   document.querySelectorAll(".navBurger")[2].style.display = "block";
  }
}

function dismissNav() {
  document.querySelector("#nav-content").style.left = "-40rem";
  //document.querySelector("#nav-content").style.display = "none";
  //document.querySelector("#nav-content").style.width = "0%";
  document.querySelector("#overlay").style.display = "none";
 // document.querySelector("#hamburger-icon").style.display="block";
// document.querySelector(".navBurger-container").style.display="block";
 document.querySelector(".navBurger-container").style.marginLeft="10px";
 document.querySelectorAll(".navBurger")[0].style.background = "black";
 document.querySelectorAll(".navBurger")[0].style.transform = "rotate(0deg)";
 document.querySelectorAll(".navBurger")[0].style.top = "0";
 document.querySelectorAll(".navBurger")[1].style.background = "black";
 document.querySelectorAll(".navBurger")[1].style.transform = "rotate(0deg)";
    document.querySelectorAll(".navBurger")[1].style.top = "0";

 document.querySelectorAll(".navBurger")[2].style.background = "black";
 document.querySelectorAll(".navBurger")[2].style.display = "block";




}

var SetVisibilityForProjectPage = (function () {
    var disabledButton = "";
    var disabledButtonMobile = "";
    return {
        descriptions: function (buttonId) {
          if (buttonId !== undefined) {
            var elements = [ "#sbProjectDescription", "#plpProjectDescription", "#irsProjectDescription", "#vswProjectDescription","#lunchProjectDescription"];
            var buttons = ["#sbProjectButton_","#plpProjectButton_", "#irsProjectButton_","#vswProjectButton_", "#lunchProjectButton_"];
            var mobileButtons = ["#sbProjectButton_","#plpProjectButtonMobile_", "#irsProjectButtonMobile_","#vswProjectButtonMobile_"];
            if (disabledButton !== "") {
                document.getElementById(disabledButton).disabled = false;
                document.getElementById(disabledButtonMobile).disabled = false;
            }

            for (i=0; i< elements.length; i++) {
                 if (elements[i].charAt(1) === buttonId.charAt(1)) {
                    elementToDisplay = elements[i];
                }
                else {
                    SetVisibility.fadeOut(elements[i]);
                    SetVisibility.fadeOut(elements[i]+"_Mobile");
                }
            }
            SetVisibility.fadeIn(elementToDisplay);
            SetVisibility.fadeIn(elementToDisplay+"_Mobile");
            document.getElementById(buttonId.substring(1, buttonId.length)).disabled=true;
            document.getElementById((buttonId.substring(1, buttonId.length-1)+"Mobile_")).disabled=true;
            disabledButton= buttonId.substring(1, buttonId.length);
            disabledButtonMobile = buttonId.substring(1, buttonId.length-1)+"Mobile_";
          }
      }
    }
})();

var SetVisibility = (function () {
	return {
		toBlock : function (elementId) {
			document.getElementById(elementId).style.display= "block";
		},

    toFlex : function (elementId) {
			document.getElementById(elementId).style.display= "flex";
		},

		toNone : function (elementId) {
			document.getElementById(elementId).style.display = "none";
		},

    fadeOut : function (elementId) {
        $(elementId).fadeOut("slow");
    },

    fadeIn : function (elementId) {
          $(elementId).delay(1000).fadeIn("slow");
    }
	}
})();

$(document).ready(function () {
    $(window).resize(function () {
       mobileIcons.setDimensions();
       if (($(window).width() <= 755) && (document.getElementById('mobileVersion').style.display !== "block")) {
          SetTemplate.mobilePage();
          //document.querySelector(".moz-zoom").style.transform =  "scale(1)";
          if (document.getElementById("myModal").style.display === "block") {
            $(".modal-backdrop").css("display","none");
            $("#myModal").css("display","none");
          }
       }
       else if (($(window).width() > 755) && (document.getElementById('desktopVersion').style.display !== "block")) {
          SetTemplate.desktopPage();
          setPositionForContactModal();
       }
   });
});

$(document).ready(function () {
   if (($(window).width() <= 755) && (document.getElementById('mobileVersion').style.display !== "block")) {
      SetTemplate.mobilePage();
      mobileIcons.setDimensions();
   }
   else if (($(window).width() >755) && (document.getElementById('desktopVersion').style.display !== "block")) {
      SetTemplate.desktopPage();
      setPositionForContactModal();
   }
});
