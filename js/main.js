$(document).scroll(function() {
  if($(window).scrollTop() > 40){

   $("nav").css("background","white");
   $("nav").css("border-bottom","3px solid black");
   $(".nav-link").css("color","black");
   $(".navbar-brand").css("color","black");
   $(".up-btn").css("display","block");

  }else if($(window).scrollTop() < 40){

   $("nav").css("background","black");
   $(".nav-link").css("color","#FFB607");
   $(".navbar-brand").css("color","#FFB607");
   $(".up-btn").css("display","none");
  }
});


var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
$('') 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top-200 && cur_pos <= bottom-200) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.gallery a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide');
    else
      $(this).removeClass('hide');
  });

});


/*slide show*/

let array=["card1","card2","card3"];
let i=0;
let pre= document.querySelector('#pre').addEventListener('click',previos);
let next= document.querySelector('#next').addEventListener('click',nex);
function nex(){
    if(i<array.length-1){
        document.getElementById(array[i]).style.display="none";
        i=i+1;
        document.getElementById(array[i]).style.display="block";
    }else{
        i=0;
        document.getElementById(array[0]).style.display="block";
        document.getElementById(array[2]).style.display="none";
    }
}
function previos(){
    if(i>0){
        document.getElementById(array[i]).style.display="none";
        i=i-1;
        document.getElementById(array[i]).style.display="block";      
    }else if(i===0){
        i=2;
        document.getElementById(array[0]).style.display="none";
        document.getElementById(array[i]).style.display="block";
    }
}