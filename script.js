$(function() {
  $("a[href^='#']").on("click", function(event) {
    event.preventDefault();
    
    var target = this.hash;
    var $target = $(target);
    console.log("target "+target);
    console.log("$target "+$target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
      }, 1000, 'swing', function () {
        window.location.hash = target;
      });
  })
});