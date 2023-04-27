$(document).ready(function() {

	

	

	

      

	$.fn.menumaker = function(options) {

      

    var cssmenu = $(this), settings = $.extend({

        title: "Menu",

        format: "dropdown",

        sticky: false

      }, options);



      return this.each(function() {

		

		cssmenu.prepend('<div id="menu-button"><span></span><span></span><span></span>' + settings.title + '</div>');

		$(this).find("#menu-button").on('click', function(){

		  $(this).toggleClass('menu-opened');

		  var mainmenu = $(this).next('ul');

		  if (mainmenu.hasClass('open')) { 

			mainmenu.slideUp().removeClass('open');

		  }

		  else {

			mainmenu.slideDown().addClass('open');

			if (settings.format === "dropdown") {

			  mainmenu.find('ul').slideDown();

			}

		  }

		});

		

		cssmenu.find('li ul').parent().addClass('has-sub');



		multiTg = function() {

		  cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');

		  cssmenu.find('.submenu-button').on('click', function() {

			$(this).toggleClass('submenu-opened');

			if ($(this).siblings('ul').hasClass('open')) {

			  $(this).siblings('ul').removeClass('open').slideUp();

			}

			else {

			  $(this).siblings('ul').addClass('open').slideDown();

			}

		  });

		};



		if (settings.format === 'multitoggle') multiTg();

		else cssmenu.addClass('dropdown');

		

		

      });

	};

	

	$(".navy").menumaker({

		title: "Navigation",

		format: "multitoggle"

	});

	

	

		$('#menu-button').click(function(){

		$(this).toggleClass('open');

	});

	

	

	new AnimOnScroll( document.getElementById( 'grid' ), {

				minDuration : 0.4,

				maxDuration : 0.7,

				viewportFactor : 0.2

			} );

	

	filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

});

