

  
// testmonial js ================== >>>>>>>>>>>>>>>>>>>
	 

	// lector question section ============>>>>>>>>>>>>>
 
   
   
  




	// function openCity(evt, cityName) {
	//   var i, tabcontent, tablinks;
	//   tabcontent = document.getElementsByClassName("tabcontent");
	//   for (i = 0; i < tabcontent.length; i++) {
	//     tabcontent[i].style.display = "none";
	//   }
	//   tablinks = document.getElementsByClassName("tablinks");
	//   for (i = 0; i < tablinks.length; i++) {
	//     tablinks[i].className = tablinks[i].className.replace(" active", "");
	//   }
	//   document.getElementById(cityName).style.display = "block";
	//   evt.currentTarget.className += " active";
	// }

	// // Get the element with id="defaultOpen" and click on it
	// document.getElementById("defaultOpen").click();

  
 

$(document).ready(function(){
$(".bar_icon span").click(function(){
  $(".bar_icon").toggleClass("hhhh");
    $(".menu").toggleClass("open");

  });
});


// $(document).ready(function(){
// $(".bar_icon span").click(function(){
//   $(".bar_icon").toggleClass("hhhh");
//     $(".menu2").toggleClass("open");

//   });
// });


    

$(".header-menu ul li ul").parent("li").addClass("addclass");


$('.header-menu ul li a').on('click', function(e) {
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp("swing");
    }
    else {
        element.addClass('open');
        element.children('ul').slideDown("swing");
        element.siblings('li').children('ul').slideUp("swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp("swing");
    }
});