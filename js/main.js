 $(document).ready(function() {
    var menu_icon = $('#menu_collapsed');
    var main_menu = $('#main_header nav');
    
    $('#menu_collapsed').click(function(e) {
        $('#main_header nav ul').toggleClass('active');
        e.preventDefault();
    });
    $('#main_header nav').click(function(e){
        $('#main_header nav ul').addClass('active');
        
        
    });
    
});


/* http://jsfiddle.net/mariusc23/s6mLJ/31/ */

(function(){
    
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }
})();
/*
(function (){
    $('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.inner').removeClass('show');
        $this.parent().parent().find('.inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
    
})();
*/

 $(function() {
        $("#accordion").accordion({
            autoHeight: true,
            collapsible: false,
            heightStyle: "content",
            active: 0,
            animate: 300
        });
        $('#accordion h3').bind('click',function(){
            var self = this;
            setTimeout(function() {
                theOffset = $(self).offset();
                $('body,html').animate({ scrollTop: theOffset.top - 160 });
            }, 310);
        });
 });
 
 // Blog read more or read less buttons
 
 (function(){
     var readMoreArray = document.querySelectorAll('.read_more');
    var readLessArray = document.querySelectorAll('.read_less');
    
    [].forEach.call(readMoreArray, function(item) {
            item.addEventListener('click', showArticle, false);
     
    });
    
    function showArticle (e){
        e.target.nextElementSibling.classList.remove('hidden');
        e.target.style.display = 'none';
    }
    
    [].forEach.call(readLessArray, function(item) {
            item.addEventListener('click', hideArticle, false);
    });
    
    function hideArticle (e){
        e.target.parentElement.classList.toggle('hidden');
        e.target.parentElement.previousElementSibling.style.display = 'block';
    }
 })();
 
