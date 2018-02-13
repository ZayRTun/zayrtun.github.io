$(function() {

  var scrollLink = $(".scLinks");
  
  scrollLink.click(function(event) {
    event.preventDefault();
    var hashT = $(this.hash);
    var loc = hashT[0].id;

    $("body,html").animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, "swing", function() {
      window.location.hash = loc;
    })
  })

  $(window).scroll(function() {
    var scBarLoc = $(this).scrollTop();
    scrollLink.each(function() {
      var secOffSet = $(this.hash).offset().top - 20;

      if (secOffSet <= scBarLoc) {
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
      }
    })
  })
  
})