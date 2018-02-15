$(function() {
  // $('.scLinks').hover(function() {
  //   var targetElem = event.currentTarget.id;
  //   $(targetElem).html('home');
  //   console.log(event.currentTarget.id);
  // })
  // $('#Home_link').hover(mIn, mOt)

  // function mIn() {
  //   $('#Home_link').html('Home');
  // }
  // function mOt() {
  //   $("#Home_link").html('');
  // }




  var scrollLink = $(".scLinks");
  
  scrollLink.click(function(event) {
    event.preventDefault();
    var hashT = $(this.hash);
    var loc = hashT[0].id;

    $("body,html").animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, "swing", function() {
      window.location.hash = loc;
    });
  });

  $(window).scroll(function() {
    var scBarLoc = $(this).scrollTop();
    scrollLink.each(function() {
      var secOffSet = $(this.hash).offset().top - 20;

      if (secOffSet <= scBarLoc) {
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
      }
    });
  });
  







});